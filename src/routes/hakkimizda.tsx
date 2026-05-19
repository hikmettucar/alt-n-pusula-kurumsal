import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Target, Eye, Compass, Award } from "lucide-react";
import consulting from "@/assets/project-consulting.jpg";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda — CSB Taahhüt İnşaat Mühendislik" },
      { name: "description", content: "20 yılı aşkın deneyimle Türkiye'nin altyapı ve mühendislik projelerini hayata geçiren CSB Taahhüt'ün hikayesi." },
      { property: "og:title", content: "Hakkımızda — CSB Taahhüt" },
      { property: "og:description", content: "Mühendislik mükemmelliği ve kurumsal disiplinle inşa edilmiş bir hikaye." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal"
        title="Hakkımızda"
        subtitle="2004'ten bu yana, mühendislik disiplinini saha kabiliyetiyle birleştirerek kalıcı altyapılar inşa ediyoruz."
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-2xl gold-border-glow">
            <img src={consulting} alt="CSB ekip" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-primary">Hikayemiz</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Bir mühendislik <span className="text-gradient-gold">geleneği</span>
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                CSB Taahhüt İnşaat Mühendislik, 2004 yılında elektrik mühendisliği
                taahhütleri ile başlayan yolculuğunu, bugün Türkiye'nin önde gelen
                altyapı projelerinde söz sahibi olan çok disiplinli bir mühendislik
                firmasına dönüştürmüştür.
              </p>
              <p>
                Elektrik, inşaat, fiber optik ve telekom altyapılarındaki uzmanlığımızı,
                85 kişilik teknik kadromuz ve sahada test edilmiş süreçlerimizle
                birleştiriyoruz. Her projede aynı söz: <span className="text-foreground">söz verilen kalite, söz verilen sürede.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Target, title: "Misyonumuz", text: "Mühendislik bilgisi, kurumsal disiplin ve sahada güvenle ülkenin altyapısına kalıcı eserler kazandırmak." },
              { icon: Eye, title: "Vizyonumuz", text: "Türkiye ve bölgesinde en güvenilen anahtar teslim mühendislik markası olmak." },
              { icon: Compass, title: "Değerlerimiz", text: "Şeffaflık, sorumluluk, mühendislik dürüstlüğü, sürdürülebilirlik ve ekip ruhu." },
              { icon: Award, title: "Standartlarımız", text: "ISO 9001, 14001 ve 45001 sertifikalı yönetim sistemleriyle uluslararası standartlar." },
            ].map((v) => (
              <div key={v.title} className="glass rounded-xl p-7 transition-transform hover:-translate-y-1">
                <v.icon size={22} className="text-primary" />
                <h3 className="mt-5 font-display text-xl text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
