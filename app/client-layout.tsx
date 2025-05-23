"use client"

import type React from "react"
import { AuthProvider } from "@/contexts/auth-context"
import { CartProvider } from "@/contexts/cart-context"
import { WishlistProvider } from "@/contexts/wishlist-context"
import { Toaster } from "@/components/ui/toaster"
import { useState, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { LoadingScreen } from "@/components/loading-screen"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

// Configure loading durations for different scenarios
const LOADING_DURATIONS = {
  // Initial page load
  initial: 2500,

  // Minimum loading time for any page transition
  minimum: 800,

  // Maximum loading time for any page transition
  maximum: 3000,

  // Page-specific loading times (in milliseconds)
  pages: {
    "/": 1200, // Homepage
    "/about": 1000, // About page (lighter content)
    "/services": 1000, // Services page
    "/portfolio": 1800, // Portfolio page (heavier with images)
    "/shop": 1500, // Shop page (product listings)
    "/consultation": 1000, // Consultation page
    "/contact": 800, // Contact page (lightest content)
    "/wishlist": 1000, // Wishlist page
  },

  // Default loading time for pages not specified above
  default: 1200,
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  // Determine if this is the first visit to the site in this session
  useEffect(() => {
    const hasVisitedBefore = sessionStorage.getItem("hasVisitedBefore")
    if (hasVisitedBefore) {
      setIsFirstLoad(false)
    } else {
      sessionStorage.setItem("hasVisitedBefore", "true")
    }
  }, [])

  // Show loading screen on initial page load
  useEffect(() => {
    if (isFirstLoad) {
      // For first visit, show the full initial loading experience
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, LOADING_DURATIONS.initial)
      return () => clearTimeout(timer)
    } else {
      // For refresh but not first visit, use a shorter duration
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, LOADING_DURATIONS.minimum)
      return () => clearTimeout(timer)
    }
  }, [isFirstLoad])

  // Show loading screen on route changes with page-specific durations
  useEffect(() => {
    if (isFirstLoad) return // Skip if this is the initial load

    setIsLoading(true)

    // Get the appropriate loading duration for this page
    const pageDuration =
      pathname in LOADING_DURATIONS.pages
        ? LOADING_DURATIONS.pages[pathname as keyof typeof LOADING_DURATIONS.pages]
        : LOADING_DURATIONS.default

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, pageDuration)

    return () => clearTimeout(timer)
  }, [pathname, searchParams, isFirstLoad])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <div
              className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
            >
              <LoadingScreen isLoading={isLoading} />
              <Suspense fallback={<div>Loading...</div>}>
                <SiteHeader />
                {children}
              </Suspense>
              <Toaster />
            </div>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
