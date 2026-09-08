import { cn } from "@/lib/utils";
import { buildNotchPath, maskedShapeStyle } from "@/lib/masked-shape";

interface AboutBasicSection {
  title: string;
  content: string;
  label?: string;
}
interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}

interface AboutBasicProps {
  heading: string;
  description?: string;
  images?: Image[];
  sections?: AboutBasicSection[];
  className?: string;
}

interface About1Props extends AboutBasicProps {}
type Props = Partial<About1Props>;

const defaultProps: About1Props = {
  heading: "About Us",
  description:
    "We are a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age. With years of experience in design and development, we craft beautiful, accessible components that help teams build faster.",
  images: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about/photo-1-16x9.jpg",
      alt: "Team collaboration",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about/photo-2-16x9.jpg",
      alt: "Studio workspace",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about/photo-3-16x9.jpg",
      alt: "Team meeting",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about/photo-4-16x9.jpg",
      alt: "Office interior",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about/photo-5-16x9.jpg",
      alt: "Workshop session",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about/photo-6-16x9.jpg",
      alt: "Founding team",
    },
  ],
  sections: [
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
    {
      label: "Our mission",
      title: "We make creating software easy.",
      content:
        "We aim to help empower 1,000,000 teams to create their own software. Here is how we plan on doing it.",
    },
    {
      label: "What drives us",
      title:
        "We are a team of creators, thinkers, and builders who believe in crafting experiences that truly connect. Our story is built on passion, innovation, and the drive to bring meaningful ideas to life.",
      content:
        "We start from the purpose, the people it serves, and the simplest path forward. Clarity first, then the work gets better.",
    },
  ],
};

const MAX_IMAGES = 1;
const MAX_SECTIONS = 2;

const FEATURED_W = 900;
const FEATURED_H = 1080;
const FEATURED_MASK_PATH = buildNotchPath(
  "top-left",
  FEATURED_W,
  FEATURED_H,
  48,
  90,
  200,
);

const About1 = (props: Props) => {
  const { heading, description, images, sections, className } = {
    ...defaultProps,
    ...props,
  };

  const featured = (images ?? []).slice(0, MAX_IMAGES)[0];
  const contentSections = (sections ?? []).slice(0, MAX_SECTIONS);

  const points = [
    { title: heading, content: description },
    ...contentSections.map(({ title, content }) => ({ title, content })),
  ].filter((point): point is { title: string; content: string } => Boolean(point.content));

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-20">
          <div className="flex flex-col justify-center gap-10">
            {points.map((point) => (
              <div key={point.title} className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight">
                  {point.title}
                </h3>
                <p className="leading-7 text-muted-foreground">
                  {point.content}
                </p>
              </div>
            ))}
          </div>
          {featured && (
            <div
              className="relative mx-auto w-full max-w-md lg:h-full lg:max-w-none"
              style={maskedShapeStyle(FEATURED_MASK_PATH, FEATURED_W, FEATURED_H)}
            >
              <img
                src={featured.src}
                alt={featured.alt}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { About1 };
