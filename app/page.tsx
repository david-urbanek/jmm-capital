import { ArrowRight } from "lucide-react";
import { Navbar8 } from "@/components/navbar8";
import { Hero266 } from "@/components/hero266";
import { Stats11 } from "@/components/stats11";
import { About1 } from "@/components/about1";
import { Timeline11 } from "@/components/timeline11";
import { Projects17b } from "@/components/projects17b";
import { PortfolioBento } from "@/components/portfolio-bento";
import { Gallery27 } from "@/components/gallery27";
import { Contact33 } from "@/components/contact33";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar8 />

      <main className="pt-[73px]">
        {/* Hero */}
        <section id="hero">
          <Hero266
            heading={
              <>
                Investujeme do potenciálu.
                <br />
                Vytváříme hodnotu.
              </>
            }
            description="Více než dekádu stavíme portfolio, které spojuje development, dlouhodobé držení nemovitostí, rozvoj a asset management našich aktiv."
            buttons={{
              primary: {
                text: "Prozkoumat portfolio",
                url: "#portfolio",
                icon: (
                  <ArrowRight className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                ),
              },
            }}
            images={[
              {
                src: "/projects/tvrz-kralovice.png",
                alt: "JMM Capital — rezidenční development Nové Královice, historická tvrz",
                label: "Nové Královice",
              },
              {
                src: "/projects/podolske-narozi.png",
                alt: "JMM Capital — rezidenční development Podolská brána, nárožní dům",
                label: "Podolská brána",
              },
              {
                src: "/projects/borovnicka.png",
                alt: "JMM Capital — rezidenční development Borovnická",
                label: "Borovnická",
              },
              {
                src: "/projects/prisovice.webp",
                alt: "JMM Capital — průmyslový park Přísovice (AWENOR)",
                label: "Přísovice",
              },
              {
                src: "/projects/vyskocilova.webp",
                alt: "JMM Capital — komerční nemovitosti Vyskočilova",
                label: "Vyskočilova",
              },
              {
                src: "/projects/komoranska.webp",
                alt: "JMM Capital — rezidenční development Modřanské břehy, Komoranská",
                label: "Komoranská",
              },
              {
                src: "/projects/pod-vysehradem.webp",
                alt: "JMM Capital — rezidenční development Podolská brána, Pod Vyšehradem",
                label: "Pod Vyšehradem",
              },
              {
                src: "/projects/nove-kralovice.webp",
                alt: "JMM Capital — rezidenční development Nové Královice",
                label: "Nové Královice",
              },
            ]}
          />
        </section>

        {/* Stats */}
        <section id="stats" className="border-t border-border/40">
          <Stats11 />
        </section>

        {/* Timeline */}
        <section id="timeline" className="border-t border-border/40">
          <Timeline11 />
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="border-t border-border/40">
          <PortfolioBento />
        </section>

        {/* About */}
        <section id="about" className="border-t border-border/40">
          <About1
            heading="Poslání"
            description="Podnikání je pro mě o svobodě a odpovědnosti. Chovat se čestně a svojí vírou, vůlí a dovedností ovlivnit chod věcí — to je podnikání. Z nevýhod dělat výhody, z nejistot jistoty. To je můj svět. Každé rozhodnutí děláme s výhledem na desítky let dopředu, ne na příští kvartál."
            images={[
              {
                src: "/projects/borovnicka.png",
                alt: "Borovnická",
              },
            ]}
            sections={[
              {
                title: "Vize",
                content:
                  "Přivádíme na svět udržitelné projekty. Máme vize, ctíme hodnoty, hledáme potenciál. V dnešním světě je spolu všechno a všichni propojeni — a tím, jak jednáme MY, ovlivňujeme jednání ostatních. Není pravda, že jsme jen kapka v moři.",
              },
              {
                title: "Hodnoty",
                content:
                  "Naše portfolio zahrnuje rezidenční development, průmyslové parky, komerční nemovitosti a alternativní investice. Každý projekt začíná jasnou hodnotovou logikou — hledáme příležitosti tam, kde ostatní vidí překážky: brownfieldy, historické objekty, složitá řízení.",
              },
            ]}
          />
        </section>

        {/* Projekty */}
        <section id="projekty" className="border-t border-border/40">
          <Projects17b />
        </section>

        {/* Team */}
        <section id="team" className="border-t border-border/40">
          <Gallery27 />
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border/40">
          <Contact33
            title="Kontaktujte nás"
            description="Jsme otevřeni spolupráci s partnery a investory, kteří sdílejí naši dlouhodobou perspektivu. Napište nám — rádi se setkáme."
            image="/contact-bg.jpg"
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
