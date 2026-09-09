"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface GrowthCurveProps {
  className?: string;
}

const CURVE_D = "M0,470 C500,470 850,220 1000,20";
const FILL_D = `${CURVE_D} L1000,0 L0,0 Z`;

const GrowthCurve = ({ className }: GrowthCurveProps) => {
  return (
    <svg
      viewBox="0 0 1000 500"
      preserveAspectRatio="none"
      className={cn("absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
    >
      <path d={FILL_D} fill="var(--background)" />
      <motion.path
        d={CURVE_D}
        fill="none"
        stroke="var(--petrol-steel)"
        strokeWidth={1.5}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
};

export { GrowthCurve };
