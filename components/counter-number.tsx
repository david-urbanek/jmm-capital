"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import NumberFlow from "@number-flow/react";

interface CounterNumberProps {
  value: number;
  suffix?: string;
  className?: string;
}

const CounterNumber = ({ value, suffix, className }: CounterNumberProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) setDisplay(value);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      <NumberFlow
        value={display}
        suffix={suffix}
        transformTiming={{ duration: 1600, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        spinTiming={{ duration: 1600, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        opacityTiming={{ duration: 500, easing: "ease-out" }}
      />
    </span>
  );
};

export { CounterNumber };
