"use client";

import { motion } from "framer-motion";
import React from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/fade-up";
import { TextAnimate } from "@/components/ui/text-animate";
import { buildNotchPath, maskedShapeStyle } from "@/lib/masked-shape";

const CARD_W = 1500;
const CARD_H = 560;
const CARD_R = 44;
const CARD_MASK_PATH = buildNotchPath("top-right", CARD_W, CARD_H, CARD_R, 150, 96);

const MILESTONE_CURVE_D = "M-20 720C320 720 635 625 920 470C1200 318 1402 132 1620 -18";

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
    },
    {
      id: 1,
      date: "2019",
      title: "RENWON (exit)",
      description: "Dokončení revitalizace brownfieldu Chrastava (19 500 m²). Úspěšný prodej do skupiny CTP.",
    },
    {
      id: 2,
      date: "2022",
      title: "AWENOR (exit)",
      description: "Brownfield Příšovice (30 000 m²) prodán ve fázi stavebního povolení společnosti Logicor.",
    },
    {
      id: 3,
      date: "2024+",
      title: "Rezidenční expanze",
      description: "Rozvoj bytového portfolia: Podolská brána (65 bytů) a Modřanské břehy (94 bytů, 12 podlaží).",
    },
  ];

  return (
    <section className={cn("bg-background section-py", className)}>
      <div className="container">
        <div
          className="relative bg-petrol-steel px-6 pt-16 pb-24 md:px-12 md:pt-24 md:pb-32"
          style={{ ...maskedShapeStyle(CARD_MASK_PATH, CARD_W, CARD_H), aspectRatio: "auto" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-petrol-steel via-[#1b3f4f] to-[#0e2530]" />
          <svg
            aria-hidden="true"
            viewBox="0 0 1600 800"
            preserveAspectRatio="none"
            className="milestone-growth-curve pointer-events-none absolute inset-0 h-full w-full"
          >
            <path
              d={MILESTONE_CURVE_D}
              fill="none"
              stroke="#b8c5c9"
              strokeOpacity="0.1"
              strokeWidth="2"
            />
            <motion.path
              data-curve-index={0}
              d={MILESTONE_CURVE_D}
              fill="none"
              stroke="#b8c5c9"
              strokeOpacity="0.42"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <g stroke="#b8c5c9" strokeDasharray="8 12" strokeOpacity="0.05" strokeWidth="1">
              <path d="M640 635V800" />
              <path d="M925 475V800" />
              <path d="M1205 318V800" />
            </g>
          </svg>
          <div className="pointer-events-none absolute -top-32 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

          <TextAnimate as="h2" by="word" animation="blurInUp" once className="section-heading relative text-white">
            Naše milníky
          </TextAnimate>
          <FadeUp delay={0.1}>
            <p className="section-subheading relative mb-12 text-white/70">
              Jedenáct let budování hodnoty skrze disciplinovaný přístup k akvizicím, rozvoji a realizaci exitů.
            </p>
          </FadeUp>

          <div className="relative w-full md:py-20">
            <div className="relative flex flex-col items-center md:mt-12">
              <Separator className="absolute -top-8 left-0 hidden bg-white/20 md:block" />
              {currentPhase && (
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${(currentPhase / timelinePhases.length) * 104}%`,
                  }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                  className={cn(
                    "absolute -top-[33px] left-0 hidden h-0.5 bg-white md:block",
                  )}
                />
              )}
              <div className="grid gap-6 md:grid-cols-4">
                {timelinePhases.map((phase, index) => {
                  return (
                    <div key={phase.id} className="relative space-y-2">
                      <Separator
                        orientation="vertical"
                        className="absolute top-6 left-2.5 block bg-white/20 md:hidden"
                      />
                      {index == 0 && (
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{
                            height: currentPhase * 125,
                          }}
                          transition={{ ease: "easeOut", duration: 0.5 }}
                          className={cn(
                            "absolute top-22 left-2.5 z-10 w-0.5 bg-white md:hidden",
                          )}
                        />
                      )}
                      <div className="absolute top-4 -left-6 z-10 mb-5 flex size-18 items-center justify-center rounded-full bg-petrol-steel p-1 md:-top-17 md:-left-4">
                        <div className="flex size-16 items-center justify-center rounded-full border border-white/20 bg-white text-xs font-semibold tracking-tight text-petrol-steel">
                          {phase.date}
                        </div>
                      </div>
                      <div className="pl-13 md:pl-0">
                        <h3 className="mt-10 text-lg font-semibold tracking-tight text-white">
                          {phase.title}
                        </h3>
                        <p className="text-sm text-white/70">
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
      </div>
    </section>
  );
};

export { Timeline11 };
