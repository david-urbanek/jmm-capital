"use client"
import { Menu, X } from "lucide-react"
import type { Dispatch, SetStateAction } from "react"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { sectors } from "@/lib/portfolio"

interface MenuItem {
  title: string
  url?: string
  items?: { title: string; url: string }[]
}

interface MobileNavigationMenuProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
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
]

const MOBILE_BREAKPOINT = 1024

interface Navbar8Props {
  className?: string
}

const Navbar8 = ({ className }: Navbar8Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) setOpen(false)
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > 60
      navRef.current?.classList.toggle("shadow-lg", scrolled)
      navRef.current?.classList.toggle("shadow-black/10", scrolled)
    }

    handleResize()
    handleScroll()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  return (
    <section className={cn("", className)}>
      <div
        className="fixed top-0 z-50 w-full border-b border-white/15 bg-transparent backdrop-blur-xl transition-shadow duration-500"
        ref={navRef}
      >
        <div className="relative container">
          <div className="flex items-center justify-between gap-4 py-5">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <Logo size="sm" />
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
                          "bg-transparent! text-sm tracking-wide text-black/80 hover:bg-transparent! hover:text-black focus:bg-transparent! data-[state=open]:bg-transparent! data-[state=open]:text-black"
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
                          "bg-transparent text-sm tracking-wide text-black/80 hover:bg-transparent hover:text-black"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                asChild
                className="hidden border-white/20 bg-petrol-steel text-xs tracking-widest text-white uppercase hover:border-white/30 hover:bg-[#326b82] hover:text-white sm:flex"
              >
                <a href="#contact">Kontaktujte nás</a>
              </Button>
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(!open)}
                  className="text-black/80 hover:bg-black/10 hover:text-black"
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
  )
}

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
            <div className="flex items-center justify-between border-b border-border/40 pt-5 pb-5">
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
                  <div key={index} className="border-b border-border/20 py-3">
                    <span className="text-4xl font-light tracking-tight text-foreground/80">
                      {item.title}
                    </span>
                    <div className="mt-3 flex flex-col gap-1 pl-4">
                      {item.items.map((sub) => (
                        <SheetClose asChild key={sub.url}>
                          <a
                            href={sub.url}
                            className="py-1 text-lg font-light tracking-tight text-foreground/60 transition-colors hover:text-primary"
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
                      className="border-b border-border/20 py-3 text-4xl font-light tracking-tight text-foreground/80 transition-colors hover:text-primary"
                    >
                      {item.title}
                    </a>
                  </SheetClose>
                )
              )}
            </nav>

            <div className="mt-12">
              <Button
                asChild
                className="w-full text-xs tracking-widest uppercase"
              >
                <a href="#contact">Kontaktujte nás</a>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export { Navbar8 }
