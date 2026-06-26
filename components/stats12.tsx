"use client";

import NumberFlow from "@number-flow/react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, RefreshCcw } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/fade-up";

const STATS = {
  monthly: {
    // Exity (RENWON + AWENOR)
    TotalRevenue: 1.8,
    TotalUsers: 50,
    CompanyGrowth: 2,
    NewCustomers: 49,
    BigCorpClients: 11,
  },
  yearly: {
    // Celkové portfolio
    TotalRevenue: 3.2,
    TotalUsers: 300,
    CompanyGrowth: 7,
    NewCustomers: 100,
    BigCorpClients: 11,
  },
} as const;

const ZERO_STATS = {
  monthly: {
    TotalRevenue: 0,
    TotalUsers: 0,
    CompanyGrowth: 0,
    NewCustomers: 0,
    BigCorpClients: 0,
  },
  yearly: {
    TotalRevenue: 0,
    TotalUsers: 0,
    CompanyGrowth: 0,
    NewCustomers: 0,
    BigCorpClients: 0,
  },
};

interface Stats12Props {
  className?: string;
}

const Stats12 = ({ className }: Stats12Props) => {
  const [showMonthlyStats, setShowMonthlyStats] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const stats = isInView ? STATS : ZERO_STATS;

  return (
    <section className={cn("py-32", className)}>
      <div className="container flex justify-center">
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <FadeUp>
              <h1 className="font-calSans w-full text-3xl font-medium md:text-4xl">
                Výsledky, které hovoří za nás
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="my-4 text-lg tracking-tight text-muted-foreground">
                Jedenáct let disciplinovaného přístupu k private equity, developmentu a správě nemovitostí v České republice.
              </p>
            </FadeUp>
            <Button
              variant="secondary"
              className="text-md group mt-10 flex w-fit items-center justify-center gap-2 rounded-full px-6 py-1 tracking-tight shadow-none"
              asChild
            >
              <a href="#contact">
                <span>Investor Relations</span>
                <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </a>
            </Button>
            <div className="mt-10 lg:w-[115%]">
              <Graph />
            </div>
          </div>
          <div ref={ref} className="flex w-full flex-col items-end lg:w-1/2">
            <h1 className="font-calSans text-6xl font-medium leading-none lg:text-7xl text-[#1c3d28]">
              <NumberFlow
                value={
                  showMonthlyStats
                    ? stats.monthly.TotalRevenue
                    : stats.yearly.TotalRevenue
                }
                suffix=" mld. Kč"
                className="font-calSans"
              />
            </h1>
            <div className="mb-6 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-17">
              <p>{showMonthlyStats ? "Realizované exity" : "Celkové portfolio"}</p>
              <Button
                variant="secondary"
                className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-6 py-1 tracking-tight shadow-none transition-all duration-300 ease-out active:scale-95"
                onClick={() => setShowMonthlyStats(!showMonthlyStats)}
              >
                <span>{showMonthlyStats ? "Celkové portfolio" : "Zobrazit exity"}</span>
                <RefreshCcw className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </Button>
            </div>
            <div className="mt-auto mb-10 grid w-full grid-cols-2 gap-14">
              <div className="text-left border-l-2 border-[#1c3d28] pl-4">
                <h2 className="text-2xl font-medium md:text-3xl">
                  <NumberFlow
                    value={
                      showMonthlyStats
                        ? stats.monthly.TotalUsers
                        : stats.yearly.TotalUsers
                    }
                    suffix="+"
                  />
                </h2>
                <p className="text-muted-foreground/70">Bytů v pipeline</p>
              </div>
              <div className="text-right border-r-2 border-[#1c3d28] pr-4">
                <h2 className="text-2xl font-medium md:text-3xl">
                  <NumberFlow
                    value={
                      showMonthlyStats
                        ? stats.monthly.CompanyGrowth
                        : stats.yearly.CompanyGrowth
                    }
                    suffix="+"
                  />
                </h2>
                <p className="text-muted-foreground/70">Projektů celkem</p>
              </div>
              <div className="text-left border-l-2 border-[#1c3d28] pl-4">
                <h2 className="text-2xl font-medium md:text-3xl">
                  <NumberFlow
                    value={
                      showMonthlyStats
                        ? stats.monthly.NewCustomers
                        : stats.yearly.NewCustomers
                    }
                    suffix="k m²"
                  />
                </h2>
                <p className="text-muted-foreground/70">Dokončených ploch</p>
              </div>
              <div className="text-right border-r-2 border-[#1c3d28] pr-4">
                <h2 className="text-2xl font-medium md:text-3xl">
                  <NumberFlow
                    value={
                      showMonthlyStats
                        ? stats.monthly.BigCorpClients
                        : stats.yearly.BigCorpClients
                    }
                    suffix=" let"
                  />
                </h2>
                <p className="text-muted-foreground/70">Na trhu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats12 };

function Graph() {
  return (
    <div className="wrapper">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 644 388"
        initial={{
          clipPath: "inset(0px 100% 0px 0px)",
        }}
        animate={{
          clipPath: "inset(0px 0% 0px 0px)",
        }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 18,
        }}
      >
        <g clipPath="url(#grad)">
          <path
            d="M1 118.5C1 118.5 83.308 102.999 114.735 89.4998C146.162 76.0008 189.504 87.7868 235.952 77.4998C273.548 69.1718 294.469 62.4938 329.733 46.9998C409.879 11.7848 452.946 30.9998 483.874 22.4998C514.802 13.9998 635.97 0.84884 644 1.49984"
            stroke="#1c3d28"
            strokeWidth="2"
          />
          <path
            d="M113.912 89.4888C82.437 102.988 1 118.487 1 118.487V438.477H644V1.49977C635.957 0.849773 514.601 13.9988 483.625 22.4978C452.649 30.9958 409.515 11.7838 329.245 46.9938C293.926 62.4868 272.973 69.1638 235.318 77.4908C188.798 87.7768 145.388 75.9908 113.912 89.4888Z"
            fill="url(#grad)"
          />
        </g>
        <defs>
          <linearGradient
            id="grad"
            x1="321.5"
            y1="0.476773"
            x2="321.5"
            y2="387.477"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1c3d28" stopOpacity="0.3" />
            <stop offset="1" stopColor="#1c3d28" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
