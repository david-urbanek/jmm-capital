"use client";
import { Menu, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { sectors } from "@/lib/portfolio";

interface MenuItem {
  title: string;
  url?: string;
  items?: { title: string; url: string }[];
}

interface MobileNavigationMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const NAVIGATION: MenuItem[] = [
  { title: "Investiční přístup", url: "#about" },
  {
    title: "Portfolio",
    items: sectors.map((sector) => ({
      title: sector.title,
      url: `/portfolio/${sector.slug}`,
    })),
  },
  { title: "Milníky", url: "#timeline" },
  { title: "Podporujeme", url: "#podporujeme" },
  { title: "Kontakt", url: "#contact" },
];

const MOBILE_BREAKPOINT = 1024;

interface Navbar8Props {
  className?: string;
}

const Navbar8 = ({ className }: Navbar8Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) setOpen(false);
    };

    const handleScroll = () => {
      const scrolled = window.scrollY > 60;
      navRef.current?.classList.toggle("shadow-lg", scrolled);
      navRef.current?.classList.toggle("shadow-black/10", scrolled);
    };

    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <section className={cn("", className)}>
      <div
        className="fixed top-0 z-50 w-full border-b border-white/10 bg-petrol-steel transition-shadow duration-500"
        ref={navRef}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-petrol-steel via-[#1b3f4f] to-[#0e2530]" />
          <div className="absolute -top-24 right-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="container relative">
          <div className="flex items-center justify-between gap-4 py-5">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <Logo size="sm" className="brightness-0 invert" />
            </a>

            {/* Desktop nav */}
            <NavigationMenu viewport={false} className="hidden lg:flex">
              <NavigationMenuList className="gap-1">
                {NAVIGATION.map((item, index) =>
                  item.items ? (
                    <NavigationMenuItem key={index} value={`${index}`}>
                      <NavigationMenuTrigger
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent! text-white/70 hover:bg-transparent! focus:bg-transparent! hover:text-white data-[state=open]:bg-transparent! data-[state=open]:text-white text-sm tracking-wide",
                        )}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="min-w-56 p-2">
                        <ul className="grid w-64 gap-1">
                          {item.items.map((sub) => (
                            <li key={sub.url}>
                              <NavigationMenuLink
                                href={sub.url}
                                className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                              >
                                {sub.title}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={index} value={`${index}`}>
                      <NavigationMenuLink
                        href={item.url}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent text-white/70 hover:text-white hover:bg-transparent text-sm tracking-wide",
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hidden sm:flex border-white/30 bg-transparent text-white/90 hover:text-petrol-steel hover:bg-white hover:border-white text-xs tracking-widest uppercase"
              >
                <a href="#contact">Kontaktujte nás</a>
              </Button>
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(!open)}
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Menu className="size-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNavigationMenu open={open} setOpen={setOpen} />
    </section>
  );
};

const MobileNavigationMenu = ({ open, setOpen }: MobileNavigationMenuProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        aria-describedby={undefined}
        side="top"
        className="inset-0 z-50 h-dvh w-full bg-background [&>button]:hidden"
      >
        <div className="flex-1 overflow-y-auto">
          <div className="container pb-12">
            <div className="sr-only">
              <SheetTitle>Mobile Navigation</SheetTitle>
            </div>
            <div className="flex items-center justify-between pt-5 border-b border-border/40 pb-5">
              <a href="/" className="flex items-center">
                <Logo size="sm" />
              </a>
              <SheetClose asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="size-9 text-foreground/60"
                >
                  <X className="size-5" />
                </Button>
              </SheetClose>
            </div>

            <nav className="flex flex-col gap-1 pt-10">
              {NAVIGATION.map((item, index) =>
                item.items ? (
                  <div key={index} className="py-3 border-b border-border/20">
                    <span className="text-4xl font-light tracking-tight text-foreground/80">
                      {item.title}
                    </span>
                    <div className="mt-3 flex flex-col gap-1 pl-4">
                      {item.items.map((sub) => (
                        <SheetClose asChild key={sub.url}>
                          <a
                            href={sub.url}
                            className="text-lg font-light tracking-tight text-foreground/60 hover:text-primary py-1 transition-colors"
                          >
                            {sub.title}
                          </a>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                ) : (
                  <SheetClose asChild key={index}>
                    <a
                      href={item.url}
                      className="text-4xl font-light tracking-tight text-foreground/80 hover:text-primary py-3 border-b border-border/20 transition-colors"
                    >
                      {item.title}
                    </a>
                  </SheetClose>
                ),
              )}
            </nav>

            <div className="mt-12">
              <Button asChild className="w-full text-xs tracking-widest uppercase">
                <a href="#contact">Kontaktujte nás</a>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { Navbar8 };
