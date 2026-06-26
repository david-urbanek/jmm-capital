import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface About3Props {
  className?: string;
  title: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src?: string;
    alt?: string;
    title: string;
    description: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companies?: Array<{
    src: string;
    alt: string;
  }> | null;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
  contentSections?: Array<{
    title: string;
    content: string;
  }>;
}

const About3 = ({
  className,
  title = "About Us",
  description = "We are a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age. With years of experience in design and development, we craft beautiful, accessible components that help teams build faster.",
  mainImage = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg",
    alt: "about",
  },
  secondaryImage = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg",
    alt: "about",
  },
  breakout = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "logo",
    title: "Hundreds of blocks at Shadcnblocks.com",
    description:
      "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
    buttonText: "Discover more",
    buttonUrl: "https://www.shadcnblocks.com",
  },
  companies = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      alt: "Arc",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
      alt: "Descript",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
      alt: "Mercury",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
      alt: "Ramp",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
      alt: "Retool",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
      alt: "Watershed",
    },
  ],
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
  achievements = [
    { label: "Companies ", value: "300+" },
    { label: "Projects Finalized", value: "800+" },
    { label: "Happy Customers", value: "99%" },
    { label: "Recognized Awards", value: "10+" },
  ],
  contentSections = [
    {
      title: "Our Vision",
      content:
        "For years, the process of building custom software has remained challenging. Today, visual builders exist, but tailored solutions still require technical expertise and a lot of time. This is a problem for businesses and individuals alike.\n\nWhat if you could create custom software without writing a single line of code? What if you could build your own tools.\n\nWith our platform, you can! Our tools let you design layouts and create functionality—all without needing to code.\n\nWe believe that everyone should be able to build their own solutions, regardless of their technical background.",
    },
    {
      title: "Our Creators",
      content:
        "Our company has been building web tools for over a decade, focusing on efficiency and user control in every project. We know that the best solutions are the ones that you can create yourself.\n\nWe initially developed these solutions for our own team, and now everyone can benefit from them too. We are proud to offer a platform that is accessible to all, regardless of technical expertise.\n\nOur team is made up of talented individuals who are passionate about creating tools that empower users to build their own solutions with ease. We are dedicated to helping you achieve your goals.",
    },
  ],
}: About3Props) => {
  return (
    <section className={cn("py-24", className)}>
      <div className="container">

        {/* Nadpis + popis — nad gridem */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Vlevo: pouze foto CEO */}
          <div>
            <div className="group relative overflow-hidden rounded-2xl bg-muted">
              <div className="aspect-[3/4]">
                <img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8 pt-28">
                <p className="text-xs font-medium tracking-widest uppercase text-white/60 mb-1">
                  Zakladatel & CEO
                </p>
                <h2 className="text-2xl font-semibold text-white">
                  Jaroslav Miňha
                </h2>
              </div>
            </div>
          </div>

          {/* Vpravo: čísla + texty — zarovnané s vrchem fotky */}
          <div className="flex flex-col gap-8">
            {achievements && achievements.length > 0 && (
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((item, idx) => (
                  <div key={item.label + idx} className="flex flex-col gap-1">
                    <span className="font-mono text-3xl font-semibold md:text-4xl">
                      {item.value}
                    </span>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            )}
            {contentSections && contentSections.length > 0 && (
              <div className="flex flex-col gap-6 border-t border-border/40 pt-8">
                {contentSections.map((section, idx) => (
                  <div key={section.title + idx}>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-foreground">
                      {section.title}
                    </h3>
                    <p className="text-sm leading-7 whitespace-pre-line text-muted-foreground">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export { About3 };
