"use client";

import { useEffect, useRef } from "react";

import { PRODUCT } from "@/lib/pixel/product";
import { track } from "@/lib/pixel/client";

interface Props {
  children: React.ReactNode;
}

export function ViewContentTracker({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || fired.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            track("ViewContent", {
              content_ids: [PRODUCT.id],
              content_name: PRODUCT.name,
              content_type: "product",
              content_category: PRODUCT.category,
              value: PRODUCT.value,
              currency: PRODUCT.currency,
              contents: [{ id: PRODUCT.id, quantity: 1, item_price: PRODUCT.value }],
            });
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
