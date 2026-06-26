"use client";

import { ArrowLeft, ArrowRight, Calendar, MapPin, Tag } from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/fade-up";

const portfolio = [
  {
    id: 1,
    title: "Nové Královice",
    location: "Praha 22",
    year: "2013–",
    category: "Rezidenční development",
    description:
      "Záchrana historické středověké tvrze s renesanční věží a výstavba nového centra MČ Praha–Královice. Ambice 200 bytových jednotek a rodinných domů v postupných etapách příměstského bydlení.",
    image: "/projects/nove-kralovice.jpg",
  },
  {
    id: 2,
    title: "Podolská brána",
    location: "Pod Vyšehradem, Praha – Podolí",
    year: "V přípravě",
    category: "Rezidenční development",
    description:
      "Dva nárožní domy přímo pod Vyšehradem s více než 100 byty. Soukromá zahrada, concierge 24/7, prémiové parkování. Podána žádost o společné územní a stavební povolení.",
    image: "/projects/pod-vysehradem.jpg",
  },
  {
    id: 3,
    title: "Modřanské břehy",
    location: "Komořanská 19, Praha – Modřany",
    year: "V přípravě",
    category: "Rezidenční development",
    description:
      "12podlažní polyfunkční dům, 94 bytových jednotek, výhled na Vltavu. Vydané územní rozhodnutí, příprava žádosti o stavební povolení. Tramvaj před domem, cyklostezka k řece.",
    image: "/projects/komoranska.jpg",
  },
  {
    id: 4,
    title: "RENWON",
    location: "Chrastava (Liberec)",
    year: "2019",
    category: "Průmyslový park",
    description:
      "Revitalizace brownfieldu bývalé textilky Mykana. 19 500 m² nových průmyslových prostor kategorie A. Zkolaudováno 2019, obsazeno na 10+10 let. Úspěšně prodáno do skupiny CTP.",
    image: "/projects/chrastava.jpg",
  },
  {
    id: 5,
    title: "AWENOR",
    location: "Příšovice (Mladá Boleslav)",
    year: "2022",
    category: "Průmyslový park",
    description:
      "Revitalizace brownfieldu bývalé betonárky Prefa. 97 240 m² celkem, 30 000 m² nových logistických prostor kategorie A. Prodáno ve fázi stavebního povolení globálnímu operátoru Logicor.",
    image: "/projects/prisovice.jpg",
  },
  {
    id: 6,
    title: "BC Vyskočilova",
    location: "Praha 4 – Michle",
    year: "Aktivní",
    category: "Office centrum",
    description:
      "Administrativní budova v prémiové lokalitě Brumlovka. 3 360 m² pronajímatelné plochy. Sídlo a hlavní adresa holdingu JMM Capital. Obsazeno spolehlivými nájemci.",
    image: "/projects/vyskocilova.jpg",
  },
  {
    id: 7,
    title: "Český inkasní kapitál",
    location: "Praha 4",
    year: "Aktivní",
    category: "Debt Collection",
    description:
      "Transparentní investor specializující se na retailové bankovní pohledávky s 20letou zkušeností v oboru. Disciplinovaný přístup k řízení pohledávkových portfolií.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ines-alvarez-fdez-VjRc6HDXJ5s-unsplash.jpg",
  },
];

interface Projects17bProps {
  className?: string;
}

const Projects17b = ({ className }: Projects17bProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className={cn("py-16", className)}>
      <div className="w-full">
        <div className="mb-12 px-8 container">
          <FadeUp>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Naše portfolio
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Rezidenční development, průmyslové parky, komerční nemovitosti a alternativní investice — diverzifikované portfolio s jasnou hodnotovou logikou.
            </p>
          </FadeUp>
        </div>
        <div className="relative w-full">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: false,
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: true,
                },
              },
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 pl-8">
              {portfolio.map((project) => (
                <CarouselItem key={project.id} className="basis-auto pl-4">
                  <div className="w-[min(700px,calc(100vw-4rem))]">
                    <div className="overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm">
                      <div className="aspect-[4/3] overflow-hidden shrink-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-4 p-7">
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-xl font-semibold leading-tight border-l-2 border-[#1c3d28] pl-3">
                              {project.title}
                            </h3>
                            <Badge variant="secondary" className="shrink-0 text-xs">
                              <Tag className="mr-1 h-3 w-3" />
                              {project.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {project.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {project.year}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3 min-h-[4.5rem]">
                          {project.description}
                        </p>
                        <Button variant="outline" className="w-full rounded-full border-border/60 text-xs tracking-widest uppercase hover:border-foreground">
                          Zjistit více
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="pointer-events-none absolute inset-y-0 right-0 left-0 z-10 flex items-center justify-between px-4">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="pointer-events-auto h-9 w-9 rounded-full shadow-sm"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="pointer-events-auto h-9 w-9 rounded-full shadow-sm"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Projects17b };
