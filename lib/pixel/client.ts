"use client";

import type {
  MetaEventName,
  CustomEventParams,
  ServerUserData,
} from "./types";

declare global {
  interface Window {
    fbq?: {
      (...args: unknown[]): void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      callMethod?: (...args: unknown[]) => void;
    };
    _fbq?: Window["fbq"];
  }
}

const EXTERNAL_ID_KEY = "mdn_ext_id";
const PENDING_CHECKOUT_KEY = "mdn_checkout_eid";
const FBP_KEY = "mdn_fbp";
const FBC_KEY = "mdn_fbc";

function safeStorage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const target = `${name}=`;
  const parts = document.cookie.split("; ");
  for (const part of parts) {
    if (part.startsWith(target)) return decodeURIComponent(part.slice(target.length));
  }
  return null;
}

function uuid(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(16)}-${Math.random().toString(16).slice(2, 10)}-${Math.random()
    .toString(16)
    .slice(2, 10)}`;
}

export function getOrCreateExternalId(): string {
  const storage = safeStorage();
  if (!storage) return uuid();
  const existing = storage.getItem(EXTERNAL_ID_KEY);
  if (existing) return existing;
  const fresh = uuid();
  storage.setItem(EXTERNAL_ID_KEY, fresh);
  return fresh;
}

export function getFbp(): string | null {
  const cookie = readCookie("_fbp");
  if (cookie) {
    safeStorage()?.setItem(FBP_KEY, cookie);
    return cookie;
  }
  return safeStorage()?.getItem(FBP_KEY) ?? null;
}

export function getFbc(): string | null {
  const cookie = readCookie("_fbc");
  if (cookie) {
    safeStorage()?.setItem(FBC_KEY, cookie);
    return cookie;
  }
  if (typeof window !== "undefined") {
    const fbclid = new URLSearchParams(window.location.search).get("fbclid");
    if (fbclid) {
      const synthetic = `fb.1.${Date.now()}.${fbclid}`;
      safeStorage()?.setItem(FBC_KEY, synthetic);
      return synthetic;
    }
  }
  return safeStorage()?.getItem(FBC_KEY) ?? null;
}

export function getClientUserData(): ServerUserData {
  return {
    external_id: getOrCreateExternalId(),
    fbp: getFbp() ?? undefined,
    fbc: getFbc() ?? undefined,
    client_user_agent:
      typeof navigator !== "undefined" ? navigator.userAgent : undefined,
  };
}

export function stashPendingCheckoutEventId(eventId: string): void {
  safeStorage()?.setItem(PENDING_CHECKOUT_KEY, eventId);
}

export function readPendingCheckoutEventId(): string | null {
  return safeStorage()?.getItem(PENDING_CHECKOUT_KEY) ?? null;
}

function fbqReady(): boolean {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

async function mirrorToCapi(
  event: MetaEventName | string,
  eventId: string,
  customData: CustomEventParams | undefined,
): Promise<void> {
  if (typeof window === "undefined") return;
  try {
    await fetch("/api/conversions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        event_name: event,
        event_id: eventId,
        event_source_url: window.location.href,
        custom_data: customData,
        user_data: getClientUserData(),
      }),
    });
  } catch {
    // CAPI is best-effort; pixel already fired
  }
}

export interface TrackOptions {
  eventId?: string;
  mirrorToServer?: boolean;
}

export function track(
  event: MetaEventName,
  params?: CustomEventParams,
  options?: TrackOptions,
): string {
  const eventId = options?.eventId ?? uuid();
  if (fbqReady()) {
    window.fbq!("track", event, params ?? {}, { eventID: eventId });
  }
  if (options?.mirrorToServer !== false) {
    void mirrorToCapi(event, eventId, params);
  }
  return eventId;
}

export function trackCustom(
  event: string,
  params?: CustomEventParams,
  options?: TrackOptions,
): string {
  const eventId = options?.eventId ?? uuid();
  if (fbqReady()) {
    window.fbq!("trackCustom", event, params ?? {}, { eventID: eventId });
  }
  if (options?.mirrorToServer !== false) {
    void mirrorToCapi(event, eventId, params);
  }
  return eventId;
}
