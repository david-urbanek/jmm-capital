import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizes = {
    sm: "h-11",
    md: "h-16",
    lg: "h-20",
  };

  return (
    <img
      src="/projects/jmm-logo-full.svg"
      alt="JMM Capital"
      className={cn("w-auto select-none", sizes[size], className)}
    />
  );
};

export { Logo };
