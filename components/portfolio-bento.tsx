import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/fade-up";
import { sectors } from "@/lib/portfolio";

interface PortfolioBentoProps {
  className?: string;
}

const PortfolioBento = ({ className }: PortfolioBentoProps) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container">
        <div className="mb-12">
          <FadeUp>
            <h2 className="section-heading">
              Portfolio
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="section-subheading">
              Čtyři oblasti podnikání, jedna hodnotová logika — hledáme
              příležitosti tam, kde ostatní vidí překážky.
            </p>
          </FadeUp>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[280px_280px]">
          {sectors.map((sector) => (
            <FadeUp key={sector.title} className={sector.span}>
              <Link
                href={`/portfolio/${sector.slug}`}
                className={cn(
                  "group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl bg-muted",
                  sector.aspect,
                )}
              >
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6 md:p-7">
                  <sector.icon className="mb-3 h-6 w-6 text-white/80" />
                  <h3 className="text-lg font-semibold text-white md:text-xl">
                    {sector.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
                    {sector.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                    Prozkoumat projekty
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export { PortfolioBento };
