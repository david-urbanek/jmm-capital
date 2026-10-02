import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FadeUp } from "@/components/fade-up"
import { TextAnimate } from "@/components/ui/text-animate"

interface PodporujemeProps {
  className?: string
}

const achievements: { value: string; label: string }[] = [
  { value: "2009", label: "ročník narození" },
  { value: "13 let", label: "nejmladší hráč přes cut na Challenge Tour" },
  { value: "2.", label: "Junior Invitational, Sage Valley" },
  { value: "3×", label: "účast na DP World Tour" },
]

const Podporujeme = ({ className }: PodporujemeProps) => {
  return (
    <section className={cn("section-py", className)}>
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeUp className="flex flex-col">
            <TextAnimate
              as="h2"
              by="word"
              animation="blurInUp"
              once
              className="section-heading"
            >
              Podporujeme jeden z největších talentů světového golfu.
            </TextAnimate>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Louis Klein se narodil v srpnu 2009 a už teď patří ve své
              kategorii mezi nejlepší juniory na světě. Jako nejmladší hráč v
              historii prošel ve 13 letech cutem na profesionální Challenge
              Tour, ve 14 letech skončil druhý na prestižním Junior Invitational
              v Sage Valley a zahrál si tři turnaje série DP World Tour. Před
              sebou má dlouhou cestu za poznáním hranic svých golfových
              schopností. Jsme hrdí, že ho na ní podporujeme.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {achievements.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-2xl font-semibold text-foreground">
                    {item.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                asChild
                className="group text-xs tracking-widest uppercase"
              >
                <a
                  href="https://www.louiskleingolf.com/cs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  louiskleingolf.com
                  <ArrowUpRight className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="h-full">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl bg-muted">
              <img
                src="/support/louis-klein.jpg"
                alt="Louis Klein"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <span className="text-xs font-medium tracking-widest text-white/70 uppercase">
                  Podporujeme
                </span>
                <p className="text-2xl font-semibold text-white">Louis Klein</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

export { Podporujeme }
