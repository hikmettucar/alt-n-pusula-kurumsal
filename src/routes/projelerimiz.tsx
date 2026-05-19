import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/lib/projects";
import { MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/projelerimiz")({
  head: () => ({
    meta: [
      { title: "Projelerimiz — CSB Taahhüt İnşaat Mühendislik" },
      { name: "description", content: "Türkiye genelinde tamamladığımız enerji, fiber, telekom ve endüstriyel mühendislik projeleri." },
      { property: "og:title", content: "Projelerimiz — CSB Taahhüt" },
      { property: "og:description", content: "Sahada kanıtlanmış referans projelerimiz." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portföy"
        title="Projelerimiz"
        subtitle="Türkiye'nin dört bir yanında tamamladığımız enerji, altyapı ve endüstriyel projelerden seçkiler."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`group overflow-hidden rounded-2xl glass transition-transform hover:-translate-y-1 ${
                  i % 3 === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      i % 3 === 0 ? "aspect-[21/9]" : "aspect-[4/3]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-primary/40 bg-background/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-primary backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><MapPin size={12} className="text-primary" /> {p.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar size={12} className="text-primary" /> {p.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
