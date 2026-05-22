"use client";

import { useCallback } from "react";

import { PRODUCT } from "@/lib/pixel/product";
import {
  getClientUserData,
  stashPendingCheckoutEventId,
  track,
  trackCustom,
} from "@/lib/pixel/client";

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
  placement: string;
}

function buildCheckoutUrl(baseHref: string, params: Record<string, string | undefined>): string {
  const href = baseHref.trim();
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return href;
  }
  for (const [key, value] of Object.entries(params)) {
    if (!value) continue;
    url.searchParams.set(key, value);
  }
  return url.toString();
}

export function CheckoutButton({ href, className, children, placement }: Props) {
  const onClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      const user = getClientUserData();

      trackCustom("ButtonClick", {
        button_label: typeof children === "string" ? children : placement,
        placement,
      });

      const eventId = track("InitiateCheckout", {
        content_ids: [PRODUCT.id],
        content_name: PRODUCT.name,
        content_type: "product",
        content_category: PRODUCT.category,
        value: PRODUCT.value,
        currency: PRODUCT.currency,
        num_items: 1,
        contents: [{ id: PRODUCT.id, quantity: 1, item_price: PRODUCT.value }],
      });

      stashPendingCheckoutEventId(eventId);

      const enrichedHref = buildCheckoutUrl(href, {
        external_id: user.external_id,
        fbp: user.fbp,
        fbc: user.fbc,
        event_id: eventId,
        placement,
      });

      // Replace the anchor href in-flight so the native click still opens the
      // enriched URL — keeps user-activation intact (no popup blockers).
      event.currentTarget.href = enrichedHref;
    },
    [children, href, placement],
  );

  return (
    <a
      href={href}
      onClick={onClick}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      data-pixel-cta={placement}
    >
      {children}
    </a>
  );
}
