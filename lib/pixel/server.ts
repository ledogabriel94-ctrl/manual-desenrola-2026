import "server-only";

import { createHash } from "node:crypto";

import type {
  CapiPayload,
  CustomEventParams,
  MetaEventName,
  ServerUserData,
} from "./types";

const GRAPH_VERSION = "v21.0";

const PII_KEYS = ["em", "ph", "fn", "ln", "ct", "st", "zp", "country"] as const;
type PiiKey = (typeof PII_KEYS)[number];

function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function hashUserData(user: ServerUserData): ServerUserData {
  const out: ServerUserData = { ...user };
  for (const key of PII_KEYS) {
    const raw = out[key as PiiKey];
    if (raw && !/^[0-9a-f]{64}$/i.test(raw)) {
      out[key as PiiKey] = sha256(raw);
    }
  }
  if (out.external_id && !/^[0-9a-f]{64}$/i.test(out.external_id)) {
    out.external_id = sha256(out.external_id);
  }
  return out;
}

export interface SendCapiInput {
  event_name: MetaEventName | string;
  event_id: string;
  event_source_url?: string;
  user_data: ServerUserData;
  custom_data?: CustomEventParams;
  event_time?: number;
}

export interface SendCapiResult {
  ok: boolean;
  status: number;
  body?: unknown;
  skipped?: "missing_env";
  error?: string;
}

export async function sendCapiEvent(input: SendCapiInput): Promise<SendCapiResult> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !accessToken) {
    return { ok: false, status: 0, skipped: "missing_env" };
  }

  const payload: CapiPayload = {
    event_name: input.event_name,
    event_time: input.event_time ?? Math.floor(Date.now() / 1000),
    event_id: input.event_id,
    event_source_url: input.event_source_url,
    action_source: "website",
    user_data: hashUserData(input.user_data),
    custom_data: input.custom_data,
  };

  const body: Record<string, unknown> = {
    data: [payload],
    access_token: accessToken,
  };
  if (process.env.META_TEST_EVENT_CODE) {
    body.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    const parsed = (await res.json()) as unknown;
    return { ok: res.ok, status: res.status, body: parsed };
  } catch (e) {
    return { ok: false, status: 0, error: String(e) };
  }
}
