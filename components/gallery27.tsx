"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { TextAnimate } from "@/components/ui/text-animate";

const teamMembers = [
  {
    src: "/founder.png",
    title: "Jaroslav Miňha",
    designation: "Zakladatel & CEO",
    bio: "Podnikatel s jedenáctiletou zkušeností v private equity a developmentu. Zakladatel JMM Capital a architekt všech klíčových transakcí od akvizice po exit.",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    title: "Tomáš Novák",
    designation: "CFO",
    bio: "Odpovídá za finanční strukturování projektů, vztahy s investory a reporting. Zkušenosti z korporátních financí a realitního trhu.",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    title: "Petra Horáková",
    designation: "Head of Development",
    bio: "Řídí přípravu a realizaci rezidenčních projektů. Koordinuje územní řízení, stavební povolení a vztahy s architekty a dodavateli.",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    title: "Martin Šimánek",
    designation: "Transakce & Právní",
    bio: "Zajišťuje due diligence, smluvní dokumentaci a právní strukturování akvizic. Klíčová role při exitech do CTP a Logicor.",
  },
];

interface Gallery27Props {
  className?: string;
}

const Gallery27 = ({ className }: Gallery27Props) => {
  return (
    <section className={cn("section-py", className)}>
      <div className="container">
        <TextAnimate as="h2" by="word" animation="blurInUp" once className="section-heading">
          Tým
        </TextAnimate>
        <p className="section-subheading">
          Za každým projektem stojí zkušení lidé, kteří rozumí trhu, číslům i
          lidem.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full pt-12"
        >
          <div className="absolute top-0 right-0 flex h-12 items-center gap-2">
            <CarouselArrow direction="prev" />
            <CarouselArrow direction="next" />
          </div>
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="group">
                  <img
                    src={member.src}
                    alt={member.title}
                    className="h-92 w-full rounded-2xl object-cover transition-all duration-300 group-hover:translate-y-[-10px]"
                  />
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {member.title}
                  </h3>
                  <p className="text-muted-foreground">{member.designation}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">
                    {member.bio}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery27 };

interface CarouselArrowProps {
  direction: "prev" | "next";
}

const CarouselArrow = ({ direction }: CarouselArrowProps) => {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();
  const isPrev = direction === "prev";

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={isPrev ? scrollPrev : scrollNext}
      disabled={isPrev ? !canScrollPrev : !canScrollNext}
      className="h-9 w-9 rounded-full shadow-sm"
      aria-label={isPrev ? "Předchozí" : "Další"}
    >
      {isPrev ? (
        <ArrowLeft className="h-4 w-4" />
      ) : (
        <ArrowRight className="h-4 w-4" />
      )}
    </Button>
  );
};
