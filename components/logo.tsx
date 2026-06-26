import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizes = {
    sm: { top: "text-sm tracking-[0.2em]", bottom: "text-[9px] tracking-[0.25em]", gap: "gap-[2px]" },
    md: { top: "text-base tracking-[0.25em]", bottom: "text-[10px] tracking-[0.3em]", gap: "gap-[3px]" },
    lg: { top: "text-xl tracking-[0.3em]", bottom: "text-xs tracking-[0.35em]", gap: "gap-1" },
  };

  const s = sizes[size];

  return (
    <div className={cn("flex flex-col items-center leading-none select-none", s.gap, className)}>
      <span className={cn("font-semibold uppercase text-foreground", s.top)}>
        JMM Capital
      </span>
      <span className={cn("font-medium uppercase text-[#1c3d28]", s.bottom)}>
        Private Equity
      </span>
    </div>
  );
};

export { Logo };
