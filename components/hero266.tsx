"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";

import { cn } from "@/lib/utils";
import { buildNotchPath, maskedShapeStyle } from "@/lib/masked-shape";

interface CutoutGalleryImage {
  src: string;
  alt?: string;
  label?: string;
}
interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}

interface HeroCutoutGalleryProps {
  heading: string;
  description?: string;
  buttons?: Buttons;
  video?: string;
  images?: CutoutGalleryImage[];
  className?: string;
}

interface Hero266Props extends HeroCutoutGalleryProps {}
type Props = Partial<Hero266Props>;

const defaultProps: Hero266Props = {
  heading: "Blocks Built With Shadcn & Tailwind",
  description:
    "Finely crafted components built with React, Tailwind and shadcn/ui. Developers can copy and paste these blocks directly into their project.",
  buttons: {
    primary: {
      text: "Browse Components",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Learn More",
      url: "https://www.shadcnblocks.com",
    },
  },
  images: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos/photo-1-16x9.jpg",
      alt: "Photographic landscape",
      label: "Mountain Terrain",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos/photo-2-16x9.jpg",
      alt: "Photographic landscape",
      label: "Rolling Hills",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos/photo-3-16x9.jpg",
      alt: "Photographic landscape",
      label: "Forest Canopy",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos/photo-4-16x9.jpg",
      alt: "Photographic city view",
      label: "City Skyline",
    },
  ],
};

const Hero266 = (props: Props) => {
  const { heading, description, buttons, video, images, className } = {
    ...defaultProps,
    ...props,
  };

  const gallery = images ?? [];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (video || gallery.length < 2) return;
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % gallery.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex, gallery.length, video]);

  return (
    <section className={cn("pt-10 pb-16", className)}>
      <div className="w-full pl-5 sm:pl-8 lg:pl-12">
        <div className="relative mr-4 mb-8 sm:mr-8 sm:mb-12 lg:mr-14 lg:mb-16">
          <div className="relative z-10 mb-6 flex flex-col items-start gap-4 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mb-0 lg:max-w-3xl lg:p-14">
            <TextAnimate
              as="h1"
              by="line"
              animation="blurInUp"
              duration={0.7}
              once
              className="text-3xl font-bold tracking-tight text-foreground lg:text-5xl lg:text-white"
            >
              {heading}
            </TextAnimate>
            {description && (
              <p className="max-w-md text-muted-foreground lg:text-lg lg:text-white/80">
                {description}
              </p>
            )}
            {buttons && (
              <div className="flex flex-wrap gap-3">
                {buttons.primary && (
                  <Button
                    size="lg"
                    asChild
                    className="group bg-white text-foreground shadow-md hover:bg-white/90"
                  >
                    <a href={buttons.primary.url}>
                      {buttons.primary.text}
                      {buttons.primary.icon}
                    </a>
                  </Button>
                )}
                {buttons.secondary && (
                  <Button size="lg" variant="outline" asChild>
                    <a href={buttons.secondary.url}>
                      {buttons.secondary.text}
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>

          <MaskedDiv>
            {video ? (
              <video
                className="h-full w-full object-cover"
                src={video}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentIndex}
                  className="h-full w-full object-cover"
                  src={gallery[currentIndex]?.src}
                  alt={gallery[currentIndex]?.alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.6 }}
                />
              </AnimatePresence>
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-2/3 rounded-b-[2.5rem] bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:block" />
          </MaskedDiv>

          {!video && gallery[currentIndex]?.label && (
            <div className="absolute right-8 bottom-8 hidden items-center gap-2 rounded-full bg-background/90 px-4 py-2 shadow-md backdrop-blur-sm lg:flex">
              <MapPin className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium">
                {gallery[currentIndex].label}
              </span>
            </div>
          )}
        </div>

        {!video && gallery.length > 1 && (
          <div className="mt-6 flex gap-3 overflow-x-auto lg:hidden">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "shrink-0 overflow-hidden rounded-xl border-2 transition-all",
                  i === currentIndex
                    ? "border-foreground"
                    : "border-transparent opacity-60",
                )}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-20 w-28 object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { Hero266 };

interface MaskedDivProps {
  children: React.ReactNode;
  className?: string;
}

const R = 56;
const W = 1300;
const H = 680;

const MASK_PATH = buildNotchPath("top-right", W, H, R, 130, 120);

const MaskedDiv: React.FC<MaskedDivProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`} style={maskedShapeStyle(MASK_PATH, W, H)}>
      {children}
    </div>
  );
};
