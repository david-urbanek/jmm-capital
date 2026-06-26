import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS = [
  {
    heading: "Navigace",
    links: [
      { label: "Poslání", href: "#about" },
      { label: "Naše milníky", href: "#timeline" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Kontakt", href: "#contact" },
    ],
  },
  {
    heading: "Investice",
    links: [
      { label: "Private Equity", href: "#portfolio" },
      { label: "Rezidenční development", href: "#portfolio" },
      { label: "Průmyslové parky", href: "#portfolio" },
      { label: "Debt Collection", href: "#portfolio" },
    ],
  },
  {
    heading: "Firma",
    links: [
      { label: "O nás", href: "#about" },
      { label: "Jaroslav Miňha", href: "#about" },
      { label: "Investor Relations", href: "#contact" },
      { label: "recepce@jmmcapital.cz", href: "mailto:recepce@jmmcapital.cz" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-5">
              <div className="flex size-8 items-center justify-center rounded-sm bg-[#1c3d28] text-white text-xs font-bold tracking-widest">
                J
              </div>
              <span className="text-base font-semibold tracking-tight">
                JMM Capital
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Přinášíme na svět udržitelné projekty. Máme vize, ctíme hodnoty, hledáme potenciál.
            </p>
            <div className="text-xs text-muted-foreground/70 space-y-1">
              <p>Vyskočilova 1326/5, 140 00 Praha 4</p>
              <p>IČ: 02083388 | DIČ: CZ02083388</p>
              <p>+420 242 441 144</p>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground/50 mb-4">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} JMM Capital, spol. s r.o. Zapsána v OR Městského soudu v Praze, sp. zn. C 214800.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">Právní úprava</a>
            <a href="#" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">Ochrana dat</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
