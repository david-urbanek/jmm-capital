"use client";

import { motion } from "framer-motion";
import { Building2, Factory, FlagIcon, RocketIcon } from "lucide-react";
import React from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/fade-up";

interface Timeline11Props {
  className?: string;
}

const Timeline11 = ({ className }: Timeline11Props) => {
  const currentPhase = 3;
  const timelinePhases = [
    {
      id: 0,
      date: "2013",
      title: "Vstup do trhu",
      description: "Akvizice lokality Nové Královice a záchrana historické středověké tvrze s renesanční věží.",
      icon: RocketIcon,
    },
    {
      id: 1,
      date: "2019",
      title: "RENWON — exit",
      description: "Dokončení revitalizace brownfieldu Chrastava (19 500 m²). Úspěšný prodej do skupiny CTP.",
      icon: Factory,
    },
    {
      id: 2,
      date: "2022",
      title: "AWENOR — exit",
      description: "Brownfield Příšovice (30 000 m²) prodán ve fázi stavebního povolení společnosti Logicor.",
      icon: Building2,
    },
    {
      id: 3,
      date: "2024+",
      title: "Rezidenční expanze",
      description: "Rozvoj bytového portfolia: Podolská brána (100+ bytů) a Modřanské břehy (94 bytů, 12 podlaží).",
      icon: FlagIcon,
    },
  ];

  return (
    <section className={cn("bg-background py-24", className)}>
      <div className="container">
        <FadeUp>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Naše milníky
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mb-12 text-muted-foreground max-w-xl">
            Jedenáct let budování hodnoty skrze disciplinovaný přístup k akvizicím, rozvoji a realizaci exitů.
          </p>
        </FadeUp>
        <div className="relative w-full md:py-16">
          <div className="relative flex flex-col items-center md:mt-12">
            <Separator className="absolute -top-8 left-0 hidden md:block" />
            {currentPhase && (
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${(currentPhase / timelinePhases.length) * 104}%`,
                }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                className={cn(
                  "absolute -top-[33px] left-0 hidden h-0.5 bg-[#1c3d28] md:block",
                )}
              />
            )}
            <div className="grid gap-6 md:grid-cols-4">
              {timelinePhases.map((phase, index) => {
                const PhaseIcon = phase.icon;
                return (
                  <div key={phase.id} className="relative space-y-2">
                    <Separator
                      orientation="vertical"
                      className="absolute top-6 left-2.5 block md:hidden"
                    />
                    {index == 0 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{
                          height: currentPhase * 125,
                        }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        className={cn(
                          "absolute top-22 left-2.5 z-10 w-0.5 bg-foreground md:hidden",
                        )}
                      />
                    )}
                    <div className="absolute top-4 -left-6 z-10 mb-5 flex size-18 items-center justify-center rounded-full bg-background p-1 md:-top-17 md:-left-4">
                      <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background p-[5px]">
                        <div className="flex size-full items-center justify-center rounded-md border border-border bg-muted">
                          <PhaseIcon size={16} />
                        </div>
                      </div>
                    </div>
                    <div className="pl-13 md:pl-0">
                      <p className="mt-10 text-sm text-muted-foreground">
                        {phase.date}
                      </p>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Timeline11 };
