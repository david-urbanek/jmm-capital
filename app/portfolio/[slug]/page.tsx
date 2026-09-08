import { ArrowLeft, Calendar, MapPin, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";
import { Navbar8 } from "@/components/navbar8";
import { projects, sectors } from "@/lib/portfolio";

interface PortfolioSectorPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }: PortfolioSectorPageProps) {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) return {};

  return {
    title: sector.title,
    description: sector.description,
  };
}

export default async function PortfolioSectorPage({
  params,
}: PortfolioSectorPageProps) {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) notFound();

  const sectorProjects = projects.filter(
    (project) => project.category === sector.category,
  );

  return (
    <>
      <Navbar8 />

      <main className="pt-[73px]">
        <section>
          <div className="container pt-16 pb-6 md:pt-20 md:pb-8">
            <Link
              href="/#portfolio"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Zpět na portfolio
            </Link>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {sector.title}
            </h1>
            <p className="mt-3 max-w-xl text-base text-muted-foreground md:text-lg">
              {sector.tagline ?? sector.description}
            </p>
            {sector.stats && (
              <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                {sector.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl font-bold tracking-tight md:text-2xl">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="container pb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectorProjects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3 p-5">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="border-l-2 border-[#1c3d28] pl-3 text-lg font-semibold leading-tight">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="shrink-0 text-xs">
                        <Tag className="mr-1 h-3 w-3" />
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {project.year}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
