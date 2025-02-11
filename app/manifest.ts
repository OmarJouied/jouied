import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Omar Jouied Portfolio",
    short_name: "Portfolio Omar",
    description: "Omar Jouied - Software Developer & Web Developer Specialist",
    start_url: "/",
    display: "standalone",
    background_color: "#111827",
    theme_color: "#111827",
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      }
    ]
  }
}