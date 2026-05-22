import { createHmac, timingSafeEqual } from "node:crypto";

import { NextRequest, NextResponse } from "next/server";

import { PRODUCT } from "@/lib/pixel/product";
import { sendCapiEvent } from "@/lib/pixel/server";
import type { ServerUserData } from "@/lib/pixel/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface WebhookBody {
  transaction_id?: string;
  status?: string;
  value?: number;
  currency?: string;
  payment_method?: string;
  customer?: {
    email?: string;
    phone?: string;
    name?: string;
    document?: string;
  };
  tracking?: {
    external_id?: string;
    fbp?: string;
    fbc?: string;
    event_id?: string;
    placement?: string;
    client_ip?: string;
    client_user_agent?: string;
  };
}

function verifySignature(rawBody: string, signature: string | null, secret: string): boolean {
  if (!signature) return false;
  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  const sigBuf = Buffer.from(signature, "utf8");
  const expBuf = Buffer.from(expected, "utf8");
  if (sigBuf.length !== expBuf.length) return false;
  return timingSafeEqual(sigBuf, expBuf);
}

function splitName(full: string | undefined): { fn?: string; ln?: string } {
  if (!full) return {};
  const parts = full.trim().split(/\s+/);
  if (parts.length === 0) return {};
  if (parts.length === 1) return { fn: parts[0] };
  return { fn: parts[0], ln: parts.slice(1).join(" ") };
}

export async function POST(req: NextRequest) {
  const secret = process.env.GATEWAY_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "webhook_disabled" },
      { status: 503 },
    );
  }

  const raw = await req.text();
  const sig =
    req.headers.get("x-gateway-signature") ?? req.headers.get("x-signature");
  if (!verifySignature(raw, sig, secret)) {
    return NextResponse.json({ ok: false, error: "invalid_signature" }, { status: 401 });
  }

  let body: WebhookBody;
  try {
    body = JSON.parse(raw) as WebhookBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Only fire Purchase on confirmed payments.
  const statusOk = ["paid", "approved", "succeeded", "completed"].includes(
    (body.status ?? "").toLowerCase(),
  );
  if (!statusOk) {
    return NextResponse.json({ ok: true, ignored: true, reason: "status_not_paid" });
  }
  if (!body.transaction_id) {
    return NextResponse.json(
      { ok: false, error: "missing_transaction_id" },
      { status: 400 },
    );
  }

  const value = typeof body.value === "number" ? body.value : PRODUCT.value;
  const currency = body.currency ?? PRODUCT.currency;
  const eventId = `purchase_${body.transaction_id}`;
  const { fn, ln } = splitName(body.customer?.name);

  const userData: ServerUserData = {
    external_id: body.tracking?.external_id,
    em: body.customer?.email,
    ph: body.customer?.phone,
    fn,
    ln,
    fbp: body.tracking?.fbp,
    fbc: body.tracking?.fbc,
    client_ip_address: body.tracking?.client_ip,
    client_user_agent: body.tracking?.client_user_agent,
  };

  const result = await sendCapiEvent({
    event_name: "Purchase",
    event_id: eventId,
    custom_data: {
      content_ids: [PRODUCT.id],
      content_name: PRODUCT.name,
      content_type: "product",
      content_category: PRODUCT.category,
      contents: [{ id: PRODUCT.id, quantity: 1, item_price: value }],
      value,
      currency,
      num_items: 1,
      payment_method: body.payment_method,
      transaction_id: body.transaction_id,
    },
    user_data: userData,
  });

  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}
