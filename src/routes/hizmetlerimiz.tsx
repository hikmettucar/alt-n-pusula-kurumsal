import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/hizmetlerimiz")({
  head: () => ({
    meta: [
      { title: "Hizmetlerimiz — CSB Taahhüt İnşaat Mühendislik" },
      { name: "description", content: "Elektrik mühendisliği, inşaat taahhüt, fiber altyapı, telekom, endüstriyel projeler ve mühendislik danışmanlığı." },
      { property: "og:title", content: "Hizmetlerimiz — CSB Taahhüt" },
      { property: "og:description", content: "Altı disiplinde uçtan uca mühendislik ve taahhüt hizmetleri." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Uzmanlık Alanları"
        title="Hizmetlerimiz"
        subtitle="Altı disiplinde tek mühendislik standardı. Planlamadan teslime, her aşamada uzman kadro ve sahada test edilmiş süreç."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl space-y-6">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="glass group grid gap-8 rounded-2xl p-8 transition-all hover:gold-border-glow md:grid-cols-12 md:p-12"
            >
              <div className="md:col-span-1">
                <div className="font-display text-3xl text-gradient-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h2 className="mt-5 font-display text-3xl text-foreground">{s.title}</h2>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-primary">{s.short}</p>
              </div>

              <div className="md:col-span-7">
                <p className="text-base leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {["Proje Tasarımı", "Tedarik & Lojistik", "Saha Mühendisliği", "Garanti & Bakım"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/90">
                      <CheckCircle2 size={16} className="text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <div className="mt-12 text-center">
            <Link to="/iletisim" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold">
              Projeniz İçin Teklif Alın <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
