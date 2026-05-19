import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import blueprint from "@/assets/blueprint-pattern.jpg";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border/40">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url(${blueprint})`, backgroundSize: "600px" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 to-background" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Mühendislik mükemmelliği ve taahhüt disipliniyle, ülkenin dört bir yanında
              kalıcı altyapılar inşa ediyoruz.
            </p>
            <div className="mt-6 h-px w-24 bg-gradient-gold" />
          </div>

          <div>
            <h4 className="font-display text-base text-primary">Kurumsal</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/hakkimizda" className="transition-colors hover:text-primary">Hakkımızda</Link></li>
              <li><Link to="/hizmetlerimiz" className="transition-colors hover:text-primary">Hizmetlerimiz</Link></li>
              <li><Link to="/projelerimiz" className="transition-colors hover:text-primary">Projelerimiz</Link></li>
              <li><Link to="/iletisim" className="transition-colors hover:text-primary">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base text-primary">İletişim</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>Beşiktaş, İstanbul / Türkiye</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-primary" />
                <span>+90 (212) 000 00 00</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-primary" />
                <span>info@csbtaahhut.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} CSB Taahhüt İnşaat Mühendislik. Tüm hakları saklıdır.</p>
          <p className="tracking-[0.2em] uppercase">Inşa Edilmiş Güven</p>
        </div>
      </div>
    </footer>
  );
}
