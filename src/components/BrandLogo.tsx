import Image from "next/image";

import { site } from "@/lib/content";

type BrandLogoProps = {
  variant?: "dark" | "light";
};

export function BrandLogo({ variant = "dark" }: BrandLogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-slate-950";
  const markBorder =
    variant === "light" ? "border-white/20" : "border-slate-200";

  return (
    <a href="#home" className="flex items-center gap-3" aria-label={`${site.name} home`}>
      {site.logo.useImage ? (
        <Image
          src={site.logo.imagePath}
          alt={site.name}
          width={280}
          height={60}
          priority
          unoptimized
          className="h-[60px] w-auto"
        />
      ) : (
        <>
          <span
            className={`grid size-10 place-items-center rounded-[10px] border ${markBorder} bg-[linear-gradient(135deg,#2f7cff,#7b5cff_58%,#49e6ff)] text-sm font-black text-white shadow-[0_16px_36px_rgba(47,124,255,0.3)]`}
          >
            N
          </span>
          <span className="flex flex-col leading-none">
            <span className={`text-base font-black tracking-[0.01em] ${textColor}`}>
              NexaFlow
            </span>
            <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Agent
            </span>
          </span>
        </>
      )}
    </a>
  );
}
