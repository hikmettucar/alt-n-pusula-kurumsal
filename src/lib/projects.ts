import electric from "@/assets/project-electric.jpg";
import construction from "@/assets/project-construction.jpg";
import fiber from "@/assets/project-fiber.jpg";
import telecom from "@/assets/project-telecom.jpg";
import industrial from "@/assets/project-industrial.jpg";
import consulting from "@/assets/project-consulting.jpg";

export type Project = {
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Anadolu Enerji Nakil Hattı",
    category: "Elektrik Mühendisliği",
    location: "Ankara — Konya",
    year: "2024",
    image: electric,
    description: "154 kV yüksek gerilim enerji iletim hattı projesinin mühendislik, tedarik ve inşası.",
  },
  {
    title: "Marmara Plaza Kompleksi",
    category: "İnşaat Taahhüt",
    location: "İstanbul",
    year: "2023",
    image: construction,
    description: "42 katlı karma kullanım kulesinin kaba inşaat ve mekanik tesisat işleri.",
  },
  {
    title: "Ege Fiber Omurga",
    category: "Fiber Altyapı",
    location: "İzmir — Aydın",
    year: "2024",
    image: fiber,
    description: "780 km uzunluğunda metropolitan fiber optik omurga şebeke kurulumu.",
  },
  {
    title: "Doğu Anadolu Baz İstasyonları",
    category: "Telekom Altyapısı",
    location: "Erzurum Bölgesi",
    year: "2023",
    image: telecom,
    description: "120 noktada 4G/5G baz istasyonu kurulumu, güç sistemleri ve şebeke entegrasyonu.",
  },
  {
    title: "Kocaeli Üretim Tesisi",
    category: "Endüstriyel Projeler",
    location: "Kocaeli OSB",
    year: "2022",
    image: industrial,
    description: "Otomotiv yan sanayi üretim tesisinin elektromekanik ve otomasyon çözümleri.",
  },
  {
    title: "Metro Hattı Süpervizyon",
    category: "Proje Danışmanlığı",
    location: "İstanbul",
    year: "2024",
    image: consulting,
    description: "Yeni metro hattı projesinde bağımsız mühendislik denetim ve süpervizyon hizmetleri.",
  },
];
