import { BlueprintBg } from "./BlueprintBg";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20">
      <BlueprintBg opacity={0.08} />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="reveal text-xs font-medium uppercase tracking-[0.4em] text-primary">{eyebrow}</p>
        <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
          {title.split(" ").map((w, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} className="text-gradient-gold">{w}</span>
            ) : (
              <span key={i}>{w} </span>
            )
          )}
        </h1>
        {subtitle && (
          <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        )}
        <div className="reveal reveal-delay-3 mx-auto mt-10 h-px w-24 bg-gradient-gold" />
      </div>
    </section>
  );
}
