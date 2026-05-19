import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim — CSB Taahhüt İnşaat Mühendislik" },
      { name: "description", content: "Mühendislik projeleriniz için bizimle iletişime geçin. Beşiktaş, İstanbul merkez ofisimiz." },
      { property: "og:title", content: "İletişim — CSB Taahhüt" },
      { property: "og:description", content: "Projeniz için bizimle iletişime geçin." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Bize Ulaşın"
        title="İletişim"
        subtitle="Projenizi konuşmak, teklif almak veya kariyer fırsatlarımız hakkında bilgi edinmek için bizimle iletişime geçin."
      />

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {[
              { icon: MapPin, title: "Merkez Ofis", text: "Levent Mahallesi, Büyükdere Cad. No: 000\nBeşiktaş, İstanbul" },
              { icon: Phone, title: "Telefon", text: "+90 (212) 000 00 00\n+90 (532) 000 00 00" },
              { icon: Mail, title: "E-posta", text: "info@csbtaahhut.com\nteklif@csbtaahhut.com" },
              { icon: Clock, title: "Çalışma Saatleri", text: "Pazartesi — Cuma\n09:00 — 18:00" },
            ].map((c) => (
              <div key={c.title} className="glass flex gap-5 rounded-xl p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                  <c.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">{c.title}</h3>
                  <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{c.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-strong rounded-2xl p-8 md:p-10 lg:col-span-7">
            <h2 className="font-display text-3xl">Teklif <span className="text-gradient-gold">Talep Edin</span></h2>
            <p className="mt-2 text-sm text-muted-foreground">Form üzerinden bize ulaşın, 24 saat içinde dönüş yapalım.</p>

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
                <label htmlFor="subject" className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Konu</label>
                <select id="subject" className="w-full rounded-md border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none focus:border-primary">
                  <option>Elektrik Mühendisliği</option>
                  <option>İnşaat Taahhüt</option>
                  <option>Fiber Altyapı</option>
                  <option>Telekom Altyapısı</option>
                  <option>Endüstriyel Projeler</option>
                  <option>Proje Danışmanlığı</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Mesajınız</label>
                <textarea id="message" rows={5} className="w-full rounded-md border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none focus:border-primary" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5 sm:w-auto">
                Talebi Gönder <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-border">
          <iframe
            title="CSB Taahhüt Konum"
            src="https://www.google.com/maps?q=Levent%2C%20Besiktas%2C%20Istanbul&output=embed"
            width="100%"
            height="460"
            loading="lazy"
            style={{ border: 0, filter: "grayscale(0.6) contrast(1.1) brightness(0.85)" }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input id={id} type={type} className="w-full rounded-md border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none focus:border-primary" />
    </div>
  );
}
