import { iconMap } from "@/components/icons";

type CardItem = {
  icon: string;
  title: string;
  description: string;
};

type CardGridProps = {
  items: CardItem[];
  variant?: "light" | "dark";
  columns?: "four" | "three";
};

export function CardGrid({ items, variant = "light", columns = "four" }: CardGridProps) {
  const gridCols =
    columns === "four"
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";
  const cardClass =
    variant === "dark"
      ? "border-white/10 bg-white/[0.07] text-white hover:bg-white/[0.1]"
      : "border-slate-200 bg-white text-slate-950 shadow-[0_18px_50px_rgba(15,23,42,0.07)] hover:border-blue-200 hover:shadow-[0_22px_70px_rgba(47,124,255,0.13)]";
  const copyClass = variant === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`grid gap-4 ${gridCols}`}>
      {items.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <article
            key={item.title}
            className={`group rounded-[20px] border p-5 transition duration-200 hover:-translate-y-1 ${cardClass}`}
          >
            <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#2f7cff,#49e6ff)] text-white shadow-[0_14px_28px_rgba(47,124,255,0.2)]">
              {Icon ? <Icon size={22} aria-hidden="true" /> : null}
            </div>
            <h3 className="text-lg font-black leading-snug">{item.title}</h3>
            <p className={`mt-3 text-sm leading-6 ${copyClass}`}>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}
