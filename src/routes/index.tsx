import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Award, Users, TrendingUp, CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { BlueprintBg } from "@/components/BlueprintBg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CSB Taahhüt İnşaat Mühendislik — Mühendislikle İnşa Edilmiş Güven" },
      { name: "description", content: "Elektrik mühendisliği, inşaat taahhüt, fiber ve telekom altyapısında lider kurumsal çözümler. 20+ yıllık deneyim." },
      { property: "og:title", content: "CSB Taahhüt İnşaat Mühendislik" },
      { property: "og:description", content: "Mühendislikle inşa edilmiş güven. Türkiye genelinde altyapı ve taahhüt çözümleri." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "240+", label: "Tamamlanan Proje" },
  { value: "20", label: "Yıllık Deneyim" },
  { value: "85+", label: "Mühendis Kadrosu" },
  { value: "18", label: "İl Genelinde Hizmet" },
];

const whyUs = [
  { icon: ShieldCheck, title: "Sertifikalı Kalite", text: "ISO 9001, ISO 14001 ve ISO 45001 belgeli yönetim sistemleri." },
  { icon: Award, title: "Mühendislik Disiplini", text: "Her projede uzman mühendisler ve uçtan uca süpervizyon." },
  { icon: Users, title: "Deneyimli Kadro", text: "85+ kişilik teknik ekiple sahada güçlü icra kabiliyeti." },
  { icon: TrendingUp, title: "Zamanında Teslim", text: "Disiplinli planlama ile söz verilen tarihte tamamlanan projeler." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Mühendislik blueprint" width={1920} height={1280} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-gold" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary">Est. 2004 · İstanbul</span>
            </div>

            <h1 className="reveal reveal-delay-1 mt-8 font-display text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-8xl">
              Mühendislikle
              <br />
              <span className="text-gradient-gold">İnşa Edilmiş</span>
              <br />
              Güven.
            </h1>

            <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              CSB Taahhüt; elektrik, inşaat, fiber ve telekom altyapısında
              uçtan uca mühendislik çözümleri sunan kurumsal bir taahhüt firmasıdır.
              20 yılı aşkın deneyim, sahada kanıtlanmış disiplin.
            </p>

            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
              <Link
                to="/projelerimiz"
                className="group inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5"
              >
                Projelerimizi İnceleyin
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/iletisim"
                className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-primary/5"
              >
                Teklif Talep Edin
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px shimmer-line" />
      </section>

      {/* STATS */}
      <section className="relative -mt-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="glass-strong grid grid-cols-2 gap-px overflow-hidden rounded-xl shadow-glass md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card/50 p-8 text-center">
                <div className="font-display text-4xl font-semibold text-gradient-gold md:text-5xl">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 py-32">
        <BlueprintBg opacity={0.05} />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-primary">Hizmetlerimiz</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Altı disiplin, <span className="text-gradient-gold">tek mühendislik standardı</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Her hizmet alanında uzmanlaşmış kadrolarımız ile projelerinizi planlamadan teslime kadar yönetiyoruz.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.slug}
                className="group relative overflow-hidden rounded-xl glass p-8 transition-all duration-500 hover:-translate-y-1 hover:gold-border-glow"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <Link
                  to="/hizmetlerimiz"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
                >
                  Detay <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCE PROJECTS */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-primary">Referans Projeler</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Sahada <span className="text-gradient-gold">kanıtlanmış</span></h2>
            </div>
            <Link to="/projelerimiz" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Tümünü Gör <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-xl glass">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-primary/40 bg-background/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.location} · {p.year}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative px-6 py-24">
        <BlueprintBg opacity={0.04} />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-primary">Neden Biz</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Bir projeyi <span className="text-gradient-gold">eseri</span> kılan farkımız
              </h2>
              <p className="mt-5 text-muted-foreground">
                CSB Taahhüt, mühendislik disiplinini saha tecrübesiyle birleştirir.
                Yatırımcılarımızın güvenini, tasarımdan teslime kadar tutarlı icra
                ile kazanırız.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Bağımsız mühendislik denetim altyapısı",
                  "Şeffaf maliyet ve süre raporlaması",
                  "Sürekli saha güvenliği ve İSG denetimi",
                  "Anahtar teslim sorumluluk ve garantisi",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/90">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyUs.map((w) => (
                <div key={w.title} className="glass rounded-xl p-6 transition-transform hover:-translate-y-1">
                  <w.icon size={22} className="text-primary" />
                  <h3 className="mt-4 font-display text-lg text-foreground">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="glass-strong rounded-2xl p-8 md:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-primary">İletişim</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">Projenizi <span className="text-gradient-gold">konuşalım</span></h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Aşağıdaki formu doldurun, ekibimiz 24 saat içinde sizinle iletişime geçsin.
              </p>

              <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Ad Soyad" id="name" />
                  <Field label="Firma" id="company" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="E-posta" id="email" type="email" />
                  <Field label="Telefon" id="phone" type="tel" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Mesaj</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5 sm:w-auto">
                  Mesajı Gönder <ArrowRight size={16} />
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { icon: MapPin, title: "Merkez Ofis", text: "Beşiktaş, İstanbul" },
                  { icon: Phone, title: "Telefon", text: "+90 (212) 000 00 00" },
                  { icon: Mail, title: "E-posta", text: "info@csbtaahhut.com" },
                ].map((c) => (
                  <div key={c.title} className="glass rounded-xl p-5">
                    <c.icon size={18} className="text-primary" />
                    <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.title}</div>
                    <div className="mt-1 text-sm text-foreground">{c.text}</div>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  title="CSB Taahhüt Konum"
                  src="https://www.google.com/maps?q=Besiktas%2C%20Istanbul&output=embed"
                  width="100%"
                  height="320"
                  loading="lazy"
                  style={{ border: 0, filter: "grayscale(0.6) contrast(1.1) brightness(0.85)" }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        id={id}
        type={type}
        className="w-full rounded-md border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
