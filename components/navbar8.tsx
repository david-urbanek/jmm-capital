"use client";
import { Menu, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url: string;
}

interface MobileNavigationMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const NAVIGATION: MenuItem[] = [
  { title: "Strategie", url: "#about" },
  { title: "Milníky", url: "#timeline" },
  { title: "Portfolio", url: "#portfolio" },
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
      navRef.current?.classList.toggle("bg-background/95", scrolled);
      navRef.current?.classList.toggle("backdrop-blur-md", scrolled);
      navRef.current?.classList.toggle("bg-transparent", !scrolled);
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
        className="fixed top-0 z-50 w-full bg-transparent transition-all duration-500"
        ref={navRef}
      >
        <div className="container">
          <div className="flex items-center justify-between gap-4 py-5 border-b border-border/40">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="flex size-8 items-center justify-center rounded-sm bg-primary text-primary-foreground text-xs font-bold tracking-widest">
                J
              </div>
              <span className="font-display text-lg font-semibold tracking-tight hidden sm:block">
                JMM Capital
              </span>
            </a>

            {/* Desktop nav */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-1">
                {NAVIGATION.map((item, index) => (
                  <NavigationMenuItem key={index} value={`${index}`}>
                    <NavigationMenuLink
                      href={item.url}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-muted-foreground hover:text-foreground hover:bg-transparent text-sm tracking-wide",
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hidden sm:flex border-border/60 text-foreground/80 hover:text-foreground hover:border-primary text-xs tracking-widest uppercase"
              >
                <a href="#contact">Investor Relations</a>
              </Button>
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(!open)}
                  className="text-foreground/70"
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
              <a href="/" className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-sm bg-primary text-primary-foreground text-xs font-bold tracking-widest">
                  J
                </div>
                <span className="font-display text-lg font-semibold tracking-tight">
                  JMM Capital
                </span>
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
              {NAVIGATION.map((item, index) => (
                <SheetClose asChild key={index}>
                  <a
                    href={item.url}
                    className="font-display text-4xl font-light tracking-tight text-foreground/80 hover:text-primary py-3 border-b border-border/20 transition-colors"
                  >
                    {item.title}
                  </a>
                </SheetClose>
              ))}
            </nav>

            <div className="mt-12">
              <Button asChild className="w-full text-xs tracking-widest uppercase">
                <a href="#contact">Investor Relations</a>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { Navbar8 };
