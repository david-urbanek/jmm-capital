import { Navbar8 } from "@/components/navbar8";
import { Hero214 } from "@/components/hero214";
import { Stats12 } from "@/components/stats12";
import { About3 } from "@/components/about3";
import { Timeline11 } from "@/components/timeline11";
import { Projects17b } from "@/components/projects17b";
import { Team4 } from "@/components/team4";
import { Contact33 } from "@/components/contact33";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar8 />

      <main className="pt-[73px]">
        {/* Hero */}
        <section id="hero">
          <Hero214
            heading="Přivádíme na svět udržitelné projekty"
            buttons={{
              primary: {
                text: "Naše portfolio",
                url: "#portfolio",
              },
            }}
            images={[
              {
                src: "/projects/komoranska.jpg",
                alt: "JMM Capital — rezidenční development Komoranská",
              },
              {
                src: "/projects/prisovice.jpg",
                alt: "JMM Capital — průmyslový park Přísovice",
              },
              {
                src: "/projects/vyskocilova.jpg",
                alt: "JMM Capital — komerční nemovitosti Vyskočilova",
              },
              {
                src: "/projects/chrastava.jpg",
                alt: "JMM Capital — Business Park Chrastava",
              },
            ]}
          />
        </section>

        {/* Stats */}
        <section id="stats" className="border-t border-border/40">
          <Stats12 />
        </section>

        {/* Timeline */}
        <section id="timeline" className="border-t border-border/40">
          <Timeline11 />
        </section>

        {/* About */}
        <section id="about" className="border-t border-border/40">
          <About3
            title="Poslání"
            description="Podnikání je pro mě o svobodě a odpovědnosti. Chovat se čestně a svojí vírou, vůlí a dovedností ovlivnit chod věcí — to je podnikání. Z nevýhod dělat výhody, z nejistot jistoty. To je můj svět."
            mainImage={{
              src: "/founder.png",
              alt: "Jaroslav Miňha, zakladatel JMM Capital",
            }}
            secondaryImage={{
              src: "/team.jpg",
              alt: "Tým JMM Capital",
            }}
            breakout={{
              title: "My jsme JMM Capital",
              description:
                "Přemýšlíme strategicky, pracujeme racionálně. Budujeme nové, nebo vracíme do života staré. Svoboda a etika je pro nás nejvyšší hodnota.",
              buttonText: "Naše milníky",
              buttonUrl: "#timeline",
            }}
            companies={null}
            achievementsTitle="Výsledky, které hovoří za nás"
            achievementsDescription="Jedenáct let disciplinovaného investování v číslech."
            achievements={[
              { label: "Objem transakcí", value: "3,2 mld. Kč" },
              { label: "Realizovaných projektů", value: "7+" },
              { label: "Bytových jednotek v pipeline", value: "300+" },
              { label: "Let na trhu", value: "11" },
            ]}
            contentSections={[
              {
                title: "Vize",
                content:
                  "Přivádíme na svět udržitelné projekty. Máme vize, ctíme hodnoty, hledáme potenciál.\n\nV dnešním světě je spolu všechno a všichni propojeni — a tím, jak jednáme MY, ovlivňujeme jednání ostatních. Pokud budeme jednat v úctě a konstruktivně, budou ostatní naším jednáním ovlivněni.\n\nNení pravda, že jsme jen kapka v moři.",
              },
              {
                title: "Hodnoty",
                content:
                  "Naše portfolio zahrnuje rezidenční development, průmyslové parky, komerční nemovitosti a alternativní investice.\n\nKaždý projekt začíná jasnou hodnotovou logikou — hledáme příležitosti tam, kde ostatní vidí překážky: brownfieldy, historické objekty, složitá řízení.\n\nJaroslav Miňha, zakladatel & CEO\nrecepce@jmmcapital.cz | +420 242 441 144",
              },
            ]}
          />
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="border-t border-border/40">
          <Projects17b />
        </section>

        {/* Team */}
        <section id="team" className="border-t border-border/40">
          <Team4 />
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border/40">
          <Contact33
            title="Kontaktujte nás"
            description="Jsme otevřeni spolupráci s partnery a investory, kteří sdílejí naši dlouhodobou perspektivu. Napište nám — rádi se setkáme."
            image="/projects/pod-vysehradem.png"
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
