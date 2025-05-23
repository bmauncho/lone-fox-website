import type React from "react"
import "@/app/globals.css"
import ClientLayout from "./client-layout"

export const metadata = {
  title: "Hello Space – Innovative Interior Design & Quality Furniture",
  description:
    "Discover Hello Space – your destination for expert interior design consultations, stylish furniture, and inspiring portfolios. Book your consultation today!",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f5f2" },
    { media: "(prefers-color-scheme: dark)", color: "#2a2722" },
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
