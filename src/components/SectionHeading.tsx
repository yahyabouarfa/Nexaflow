type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleColor = invert ? "text-white" : "text-slate-950";
  const copyColor = invert ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-black leading-tight tracking-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${copyColor}`}>{description}</p>
      ) : null}
    </div>
  );
}
