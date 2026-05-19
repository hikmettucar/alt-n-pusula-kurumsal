import { Zap, Building2, Cable, Radio, Factory, ClipboardCheck, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "elektrik",
    title: "Elektrik Mühendisliği",
    short: "Yüksek ve alçak gerilim sistemleri",
    description:
      "Trafo merkezleri, enerji nakil hatları, OG/AG dağıtım panoları, aydınlatma ve topraklama projeleri uçtan uca mühendislik disipliniyle teslim edilir.",
    icon: Zap,
  },
  {
    slug: "insaat",
    title: "İnşaat Taahhüt",
    short: "Anahtar teslim yapısal projeler",
    description:
      "Endüstriyel tesisler, ticari yapılar ve kamu projelerinde kaba inşaattan ince işlere kadar tüm süreci yöneten anahtar teslim taahhüt hizmeti.",
    icon: Building2,
  },
  {
    slug: "fiber",
    title: "Fiber Altyapı",
    short: "Yüksek kapasiteli fiber optik şebekeler",
    description:
      "FTTH, FTTB ve omurga şebeke kurulumları; mikro kanal, hava hattı ve mevcut altyapı entegrasyonlarıyla geleceğe hazır iletişim çözümleri.",
    icon: Cable,
  },
  {
    slug: "telekom",
    title: "Telekom Altyapısı",
    short: "Baz istasyonları ve şebeke kurulumu",
    description:
      "GSM/4G/5G baz istasyonları, kule montajı, güç sistemleri ve şebeke optimizasyonu için saha mühendisliği ve sürekli bakım hizmetleri.",
    icon: Radio,
  },
  {
    slug: "endustriyel",
    title: "Endüstriyel Projeler",
    short: "Fabrika ve tesis mühendisliği",
    description:
      "Üretim hatları, mekanik tesisat, otomasyon ve enerji verimliliği projeleriyle endüstriyel tesislerin tam kapsamlı modernizasyonu.",
    icon: Factory,
  },
  {
    slug: "danismanlik",
    title: "Proje Danışmanlığı",
    short: "Fizibilite, denetim ve süpervizyon",
    description:
      "Yatırım kararı öncesi fizibilite, ihale dosyası hazırlama, proje yönetimi ve yapım aşamasında bağımsız mühendislik denetim hizmetleri.",
    icon: ClipboardCheck,
  },
];
