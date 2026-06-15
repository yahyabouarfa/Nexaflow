import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-cyan-300 text-slate-950 shadow-[0_18px_45px_rgba(73,230,255,0.28)] hover:-translate-y-0.5 hover:bg-white",
  secondary:
    "border border-white/15 bg-white/10 text-white hover:-translate-y-0.5 hover:border-cyan-200/70 hover:bg-white/15",
  ghost:
    "border border-slate-200 bg-white text-slate-950 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...props}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-bold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
