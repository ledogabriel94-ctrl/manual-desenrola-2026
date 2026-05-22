import { NextRequest, NextResponse } from "next/server";

import { sendCapiEvent } from "@/lib/pixel/server";
import type { CustomEventParams, ServerUserData } from "@/lib/pixel/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface RequestBody {
  event_name?: string;
  event_id?: string;
  event_source_url?: string;
  custom_data?: CustomEventParams;
  user_data?: ServerUserData;
}

function pickClientIp(req: NextRequest): string | undefined {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? undefined;
}

export async function POST(req: NextRequest) {
  let body: RequestBody;
  try {
    body = (await req.json()) as RequestBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!body.event_name || !body.event_id) {
    return NextResponse.json(
      { ok: false, error: "missing_event_name_or_id" },
      { status: 400 },
    );
  }

  const result = await sendCapiEvent({
    event_name: body.event_name,
    event_id: body.event_id,
    event_source_url: body.event_source_url,
    custom_data: body.custom_data,
    user_data: {
      ...body.user_data,
      client_ip_address: pickClientIp(req),
      client_user_agent: req.headers.get("user-agent") ?? body.user_data?.client_user_agent,
    },
  });

  if (result.skipped === "missing_env") {
    return NextResponse.json(
      { ok: false, skipped: "missing_env" },
      { status: 200 },
    );
  }

  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}
