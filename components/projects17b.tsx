"use client";

import { ArrowLeft, ArrowRight, Calendar, MapPin, Tag } from "lucide-react";
import Link from "next/link";
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
import { TextAnimate } from "@/components/ui/text-animate";
import { projects as portfolio, sectors } from "@/lib/portfolio";

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
    <section className={cn("section-py", className)}>
      <div className="w-full">
        <div className="mb-12 px-8 container">
          <TextAnimate as="h2" by="word" animation="blurInUp" once className="section-heading">
            Naše projekty
          </TextAnimate>
          <FadeUp delay={0.1}>
            <p className="section-subheading">
              Rezidenční development, průmyslové parky, komerční nemovitosti a alternativní investice: diverzifikované portfolio s jasnou hodnotovou logikou.
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
                  <div className="w-[min(440px,calc(100vw-4rem))]">
                    <div className="overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm">
                      <div className="aspect-[4/3] overflow-hidden shrink-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-3 p-5">
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-lg font-semibold tracking-tight leading-tight border-l-2 border-[#1c3d28] pl-3">
                              {project.title}
                            </h3>
                            <Badge
                              variant="secondary"
                              className={cn(
                                "shrink-0 text-xs",
                                project.category === "Rezidenční development" &&
                                  "border-[#1c3d28]/20 bg-[#1c3d28]/8 text-[#1c3d28]",
                              )}
                            >
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
                        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2 min-h-[2.75rem]">
                          {project.description}
                        </p>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full rounded-full border-border/60 text-xs tracking-widest uppercase hover:border-foreground"
                        >
                          <Link
                            href={`/portfolio/${sectors.find((s) => s.category === project.category)?.slug ?? ""}`}
                          >
                            Vidět více projektů
                          </Link>
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
