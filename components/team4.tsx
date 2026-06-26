"use client";

import { Link } from "lucide-react";

import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/fade-up";

const teamMembers = [
  {
    name: "Jaroslav Miňha",
    role: "Zakladatel & CEO",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    bio: "Podnikatel s jedenáctiletou zkušeností v private equity a developmentu. Zakladatel JMM Capital a architekt všech klíčových transakcí od akvizice po exit.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Tomáš Novák",
    role: "CFO",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    bio: "Odpovídá za finanční strukturování projektů, vztahy s investory a reporting. Zkušenosti z korporátních financí a realitního trhu.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Petra Horáková",
    role: "Head of Development",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    bio: "Řídí přípravu a realizaci rezidenčních projektů. Koordinuje územní řízení, stavební povolení a vztahy s architekty a dodavateli.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Martin Šimánek",
    role: "Transakce & Právní",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    bio: "Zajišťuje due diligence, smluvní dokumentaci a právní strukturování akvizic. Klíčová role při exitech do CTP a Logicor.",
    linkedin: "https://www.linkedin.com/",
  },
];

interface Team4Props {
  className?: string;
}

const Team4 = ({ className }: Team4Props) => {
  return (
    <section className={cn("py-24", className)}>
      <div className="container">
        <div className="mb-12 flex flex-col gap-4">
          <FadeUp>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Tým
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="max-w-lg text-muted-foreground">
              Za každým projektem stojí zkušení lidé, kteří rozumí trhu, číslům i lidem.
            </p>
          </FadeUp>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-14 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col">
              <img
                src={member.image}
                alt={member.name}
                width={72}
                height={72}
                className="size-[72px] rounded-full object-cover"
              />
              <div className="mt-5 flex flex-col">
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
                <div className="mt-5">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground/60 hover:text-foreground transition-colors"
                  >
                    <Link className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team4 };
