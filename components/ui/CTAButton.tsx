import { env } from "@/lib/env";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
}

export function CTAButton({
  children,
  variant = "primary",
  size = "lg",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center font-display font-bold rounded-xl transition-all duration-200 min-h-[56px] active:scale-[0.98]";
  const sizes =
    size === "lg" ? "px-10 py-5 text-lg md:text-xl" : "px-8 py-4 text-base";
  const variants =
    variant === "primary"
      ? "bg-verde text-white hover:bg-verde-dark hover:scale-[1.02] shadow-lg shadow-verde/30"
      : "bg-white text-verde border-2 border-verde hover:bg-verde-light";

  return (
    <a
      href={env.checkoutUrl}
      className={`${base} ${sizes} ${variants}`}
      aria-label="Comprar o Manual Desenrola 2026"
    >
      {children}
    </a>
  );
}
