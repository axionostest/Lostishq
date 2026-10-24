import type { Metadata, Viewport } from "next"
import "./globals.css"
export const viewport: Viewport = { width: \'device-width\', initialScale: 1, maximumScale: 1 }
export const metadata: Metadata = {
  metadataBase: new URL(\'https://lostishq.in\'),
  title: "Lost Ishq | Lo-fi Love Stories & Music",
  description: "Minimalist lo-fi tracks, stories and visualizers for lost souls.",
  alternates: { canonical: "https://lostishq.in" }
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className="dark"><body className="bg-neutral-950 text-neutral-100 overflow-x-hidden antialiased">{children}</body></html>)
}
