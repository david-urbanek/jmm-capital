import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";

const FOOTER_LINKS = [
  {
    heading: "Navigace",
    links: [
      { label: "Investiční přístup", href: "#about" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Milníky", href: "#timeline" },
      { label: "Projekty", href: "#projekty" },
      { label: "Podporujeme", href: "#podporujeme" },
      { label: "Kontakt", href: "#contact" },
    ],
  },
  {
    heading: "Portfolio",
    links: [
      { label: "Rezidenční development", href: "/portfolio/rezidencni-development" },
      { label: "Průmyslové parky", href: "/portfolio/prumyslove-parky" },
      { label: "Komerční nemovitosti", href: "/portfolio/komercni-nemovitosti" },
      { label: "Hospitality", href: "/portfolio/hospitality" },
    ],
  },
  {
    heading: "Firma",
    links: [
      { label: "Investiční přístup", href: "#about" },
      { label: "recepce@jmmcapital.cz", href: "mailto:recepce@jmmcapital.cz" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-petrol-steel">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-petrol-steel via-[#1b3f4f] to-[#0e2530]" />
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="container relative py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center mb-5">
              <Logo size="md" className="brightness-0 invert" />
            </a>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Přivádíme na svět udržitelné projekty. Máme vize, ctíme hodnoty, hledáme potenciál.
            </p>
            <div className="text-xs text-white/50 space-y-1">
              <p>Vyskočilova 1326/5, 140 00 Praha 4</p>
              <p>IČ: 02083388 | DIČ: CZ02083388</p>
              <p>+420 242 441 144</p>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            JMM Capital s.r.o., Praha, IČO 02083388
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Právní úprava</a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Ochrana dat</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
