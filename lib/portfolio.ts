import { Building2, Factory, Hotel, Home, type LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  category: string;
  description: string;
  image: string;
  website?: string;
}

export const projects: Project[] = [
  {
    id: 3,
    title: "Modřanské břehy",
    location: "Praha 12, Modřany",
    year: "V přípravě",
    category: "Rezidenční development",
    description:
      "94 bytových jednotek, ČPP 5 283 m², 359 m² parteru pro komerční využití. 12podlažní polyfunkční dům s výhledem na Vltavu. Vydané územní rozhodnutí, příprava žádosti o stavební povolení.",
    image: "/projects/komoranska.webp",
    website: "https://modranskebrehy.cz/",
  },
  {
    id: 1,
    title: "Nové Královice",
    location: "Praha 22",
    year: "Ve výstavbě od 2013",
    category: "Rezidenční development",
    description:
      "4. etapa: 96 bytových jednotek (ČPP 6 300 m²). 5. etapa: 58 bytů. 6. etapa: 29 bytů. Záchrana historické středověké tvrze s renesanční věží a postupná výstavba nového centra MČ Praha-Královice.",
    image: "/projects/nove-kralovice.webp",
    website: "https://www.novekralovice.cz/",
  },
  {
    id: 2,
    title: "Podolská brána",
    location: "Praha 4, Podolí",
    year: "V přípravě",
    category: "Rezidenční development",
    description:
      "65 bytových jednotek, ČPP 4 239 m². Nárožní dům přímo pod Vyšehradem se soukromou zahradou, concierge 24/7 a prémiovým parkováním. Podána žádost o společné územní a stavební povolení.",
    image: "/projects/pod-vysehradem.webp",
  },
  {
    id: 8,
    title: "Podolské nároží",
    location: "Praha 4, Podolí",
    year: "V přípravě",
    category: "Rezidenční development",
    description:
      "25 bytových jednotek, ČPP 1 170 m², 280 m² parteru pro komerční využití. Kompaktní nárožní dům v Podolí navazující na okolní zástavbu.",
    image: "/projects/podolske-narozi.webp",
  },
  {
    id: 9,
    title: "Borovnická",
    location: "Praha 9",
    year: "V přípravě",
    category: "Rezidenční development",
    description:
      "29 bytových jednotek, ČPP 1 909 m². Projekt v Praze 9 s důrazem na kvalitu bydlení a okolní zeleň.",
    image: "/projects/borovnicka.webp",
  },
  {
    id: 4,
    title: "RENWON",
    location: "Chrastava (Liberec)",
    year: "2019",
    category: "Průmyslový park",
    description:
      "Revitalizace brownfieldu bývalé textilky Mykana. 19 500 m² nových průmyslových prostor kategorie A. Zkolaudováno 2019, obsazeno na 10+10 let. Úspěšně prodáno do skupiny CTP.",
    image: "/projects/chrastava.webp",
  },
  {
    id: 5,
    title: "AWENOR",
    location: "Příšovice (Mladá Boleslav)",
    year: "2022",
    category: "Průmyslový park",
    description:
      "Revitalizace brownfieldu bývalé betonárky Prefa. 97 240 m² celkem, 30 000 m² nových logistických prostor kategorie A. Prodáno ve fázi stavebního povolení globálnímu operátoru Logicor.",
    image: "/projects/prisovice.webp",
  },
  {
    id: 6,
    title: "BC Vyskočilova",
    location: "Praha 4, Michle",
    year: "Aktivní",
    category: "Office centrum",
    description:
      "Administrativní budova v prémiové lokalitě Brumlovka. 3 360 m² pronajímatelné plochy. Sídlo a hlavní adresa holdingu JMM Capital. Obsazeno spolehlivými nájemci.",
    image: "/projects/vyskocilova.webp",
    website: "https://bcvyskocilova.cz/",
  },
  {
    id: 7,
    title: "Restaurace Markéta",
    location: "Praha 22, Královice",
    year: "Aktivní",
    category: "Hospitality",
    description:
      "Restaurace v areálu Tvrze Královice s kapacitou 80 míst a soukromým salónkem pro 40 lidí. Zajišťuje gastronomii pro svatby a firemní akce a doplňuje rezidenční část areálu o vlastní návštěvnost. Oceněna průvodcem Gault&Millau 2026, hodnocení Google 4,8★ (812 recenzí).",
    image: "/projects/restaurace-marketa.webp",
    website: "https://www.restauracemarketa.cz/",
  },
  {
    id: 10,
    title: "Tvrz Královice",
    location: "Praha 22, Nové Královice",
    year: "Aktivní",
    category: "Hospitality",
    description:
      "Zrekonstruovaná historická tvrz s renesanční věží proměněná v prostor pro svatby, firemní akce a výstavy. Zázemí doplňuje Restaurace Markéta a přilehlé rezidenční Nové Královice.",
    image: "/projects/tvrz-kralovice.jpg",
    website: "https://www.tvrzkralovice.cz/",
  },
  {
    id: 11,
    title: "Amalia Haus, Land Haus, Tux",
    location: "Tux, Rakousko",
    year: "V provozu",
    category: "Hospitality",
    description:
      "Dva penziony s kapacitou 53 lůžek v rakouském Tuxu, 5 km od celoročně otevřeného ledovce Hintertux. Celoroční provoz se zimní i letní sezónou a hodnocením 9,0 (Fantastické, 234 hodnocení) na Booking.com.",
    image: "/projects/amalia-haus.png",
  },
];

export interface SectorStat {
  value: string;
  label: string;
}

export interface Sector {
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  icon: LucideIcon;
  span: string;
  aspect: string;
  tagline?: string;
  stats?: SectorStat[];
}

export const sectors: Sector[] = [
  {
    title: "Rezidenční development",
    slug: "rezidencni-development",
    category: "Rezidenční development",
    description:
      "Bytové domy a rezidenční projekty s důrazem na lokalitu a kvalitu bydlení, od historických tvrzí po moderní nárožní domy pod Vyšehradem.",
    image: "/projects/pod-vysehradem.webp",
    icon: Home,
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
    tagline:
      "Rezidenční development soustředíme do vyhledávaných pražských lokalit.",
    stats: [
      { value: "318+", label: "bytů v pipeline" },
      { value: "18 900+", label: "m² ČPP v přípravě" },
      { value: "5", label: "rezidenčních projektů" },
    ],
  },
  {
    title: "Hospitality",
    slug: "hospitality",
    category: "Hospitality",
    description:
      "Hotelové a pohostinské provozy rozšiřující portfolio o segment volnočasových nemovitostí.",
    image: "/projects/restaurace-marketa.webp",
    icon: Hotel,
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-1",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
  },
  {
    title: "Komerční nemovitosti",
    slug: "komercni-nemovitosti",
    category: "Office centrum",
    description:
      "Administrativní budovy a kancelářská centra v prémiových lokalitách s dlouhodobě spolehlivými nájemci.",
    image: "/projects/vyskocilova.webp",
    icon: Building2,
    span: "lg:col-span-1 lg:row-span-1",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
  },
  {
    title: "Průmyslové parky",
    slug: "prumyslove-parky",
    category: "Průmyslový park",
    description:
      "Revitalizace brownfieldů na moderní logistické a výrobní areály kategorie A pro nadnárodní nájemce a operátory.",
    image: "/projects/prisovice.webp",
    icon: Factory,
    span: "lg:col-span-1 lg:row-span-1",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
  },
];

