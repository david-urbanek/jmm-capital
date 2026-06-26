import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata = {
  metadataBase: new URL("https://www.jmmcapital.cz"),
  title: {
    default: "JMM Capital",
    template: "%s | JMM Capital",
  },
  description:
    "Přivádíme na svět udržitelné projekty. Rezidenční development, průmyslové parky a komerční nemovitosti v České republice.",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://www.jmmcapital.cz",
    siteName: "JMM Capital",
    title: "JMM Capital — Přivádíme na svět udržitelné projekty",
    description:
      "Jedenáct let disciplinovaného investování. 3,2 mld. Kč objemu transakcí. Rezidenční development, průmyslové parky a komerční nemovitosti.",
    images: [
      {
        url: "/projects/komoranska.jpg",
        width: 1200,
        height: 630,
        alt: "JMM Capital — Modřanské břehy, Praha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JMM Capital — Přivádíme na svět udržitelné projekty",
    description:
      "Jedenáct let disciplinovaného investování. 3,2 mld. Kč objemu transakcí.",
    images: ["/projects/komoranska.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", geist.variable, geistMono.variable, "font-sans")}
    >
      <body>
        <ThemeProvider forcedTheme="light" enableSystem={false}>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
