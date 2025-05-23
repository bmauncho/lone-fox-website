"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Heart, LogOut, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenuButton } from "@/components/mobile-menu-button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { useAuth } from "@/contexts/auth-context"
import { useWishlist } from "@/contexts/wishlist-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { user, signOut } = useAuth()
  const { itemCount: wishlistCount } = useWishlist()

  // Close the menu when the path changes (user clicks a link)
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
  ]

  const isShopRelatedPage = () => {
    return (
      pathname?.startsWith("/shop") ||
      pathname?.startsWith("/wishlist") ||
      pathname?.startsWith("/checkout") ||
      pathname?.startsWith("/account") ||
      pathname?.startsWith("/auth")
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e2ded9] bg-[#f8f5f2]/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-PTdwDxQM9qonG5cr2HGVN3WOVP9Jzy.png"
            alt="Hello Space Logo"
            width={40}
            height={40}
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#6b6963]">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-[#3c3a36]",
                pathname === item.href && "text-[#3c3a36] font-semibold",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full" aria-label="User menu">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    {user.name && <p className="font-medium">{user.name}</p>}
                    {user.email && <p className="w-[200px] truncate text-sm text-muted-foreground">{user.email}</p>}
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/account">Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist">Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer"
                  onSelect={(event) => {
                    event.preventDefault()
                    signOut()
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              {!user && isShopRelatedPage() ? (
                <Button asChild variant="ghost" size="sm" className="hidden md:flex">
                  <Link href="/auth/sign-in">Sign In</Link>
                </Button>
              ) : null}
            </>
          )}

          <Link href="/wishlist" className="relative">
            <Button variant="ghost" size="icon" className="text-[#6b6963] hover:text-[#3c3a36]" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#c17c60] text-xs font-medium text-white">
                  {wishlistCount}
                </span>
              )}
            </Button>
          </Link>

          <CartDrawer />
          <Button asChild variant="outline" size="sm" className="hidden md:flex border-[#a8a49e] text-[#3c3a36]">
            <Link href="/consultation">Book Consultation</Link>
          </Button>
          <ThemeToggle />
          <div className="md:hidden">
            <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} className="text-[#6b6963]" />
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#f8f5f2] p-6 shadow-xl transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-PTdwDxQM9qonG5cr2HGVN3WOVP9Jzy.png"
              alt="Hello Space Logo"
              width={32}
              height={32}
            />
          </Link>
          <Button variant="ghost" size="icon" className="text-[#6b6963]" onClick={() => setIsMenuOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="mt-8">
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={item.href}
                className={cn(
                  "transform transition-all duration-300 ease-in-out",
                  isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
                )}
                style={{ transitionDelay: `${150 + index * 50}ms` }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-lg font-medium text-[#6b6963] transition-colors hover:text-[#3c3a36]",
                    pathname === item.href && "text-[#3c3a36] font-semibold",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li
              className={cn(
                "transform transition-all duration-300 ease-in-out",
                isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
              )}
              style={{ transitionDelay: `${150 + menuItems.length * 50}ms` }}
            >
              <Link
                href="/wishlist"
                className="text-lg font-medium text-[#6b6963] transition-colors hover:text-[#3c3a36] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Wishlist
                {wishlistCount > 0 && (
                  <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#c17c60] text-xs font-medium text-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </li>
            {!user && isShopRelatedPage() && (
              <li
                className={cn(
                  "transform transition-all duration-300 ease-in-out",
                  isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
                )}
                style={{ transitionDelay: `${150 + (menuItems.length + 1) * 50}ms` }}
              >
                <Link
                  href="/auth/sign-in"
                  className="text-lg font-medium text-[#6b6963] transition-colors hover:text-[#3c3a36]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </li>
            )}
            <li
              className={cn(
                "transform transition-all duration-300 ease-in-out pt-4",
                isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
              )}
              style={{ transitionDelay: `${150 + (menuItems.length + 2) * 50}ms` }}
            >
              <Button
                asChild
                className="w-full bg-[#a8a49e] text-white hover:bg-[#8c8880]"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/consultation">Book Consultation</Link>
              </Button>
            </li>
            {user && (
              <li
                className={cn(
                  "transform transition-all duration-300 ease-in-out pt-4",
                  isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
                )}
                style={{ transitionDelay: `${150 + (menuItems.length + 3) * 50}ms` }}
              >
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    signOut()
                    setIsMenuOpen(false)
                  }}
                >
                  Sign Out
                </Button>
              </li>
            )}
          </ul>
        </nav>
        <div
          className={cn(
            "mt-auto pt-8 transform transition-all duration-300 ease-in-out",
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
          style={{ transitionDelay: `${150 + (menuItems.length + 4) * 50}ms` }}
        >
          <div className="flex space-x-4 items-center justify-center">
            <Button variant="ghost" size="icon" className="text-[#6b6963] hover:text-[#3c3a36]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-[#6b6963] hover:text-[#3c3a36]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-[#6b6963] hover:text-[#3c3a36]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
          <p className="mt-4 text-center text-sm text-[#6b6963]">© {new Date().getFullYear()} Hello Space</p>
        </div>
      </div>
    </header>
  )
}
