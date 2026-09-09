import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JMM Capital",
    short_name: "JMM Capital",
    description:
      "Přivádíme na svět udržitelné projekty. Rezidenční development, průmyslové parky a komerční nemovitosti v České republice.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b1626",
    lang: "cs",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
