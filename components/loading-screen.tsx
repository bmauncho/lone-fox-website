"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LoadingScreenProps {
  isLoading?: boolean
}

export function LoadingScreen({ isLoading = true }: LoadingScreenProps) {
  const [show, setShow] = useState(isLoading)
  const [fadeOut, setFadeOut] = useState(false)
  const [showSkip, setShowSkip] = useState(false)

  // Show skip button after a delay
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setShowSkip(true)
      }, 1500) // Show skip button after 1.5 seconds
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  // Handle the fade out animation when isLoading changes to false
  useEffect(() => {
    if (!isLoading && show) {
      setFadeOut(true)
      const timer = setTimeout(() => {
        setShow(false)
        setFadeOut(false)
        setShowSkip(false)
      }, 600) // Match this with the CSS transition duration
      return () => clearTimeout(timer)
    } else if (isLoading && !show) {
      setShow(true)
    }
  }, [isLoading, show])

  const handleSkip = () => {
    setFadeOut(true)
    const timer = setTimeout(() => {
      setShow(false)
      setFadeOut(false)
      setShowSkip(false)
    }, 600)
  }

  if (!show) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-black dark:bg-gray-950 transition-opacity duration-600",
        fadeOut ? "opacity-0" : "opacity-100",
      )}
    >
      <div className="relative flex flex-col items-center">
        {/* Hello Space Logo */}
        <div className="h-32 w-32 animate-pulse">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-PTdwDxQM9qonG5cr2HGVN3WOVP9Jzy.png"
            alt="Hello Space Logo"
            width={128}
            height={128}
            className="animate-pulse"
          />
        </div>

        {/* Skip button */}
        {showSkip && (
          <Button
            variant="ghost"
            className="absolute bottom-[-80px] text-white/70 hover:text-white hover:bg-transparent"
            onClick={handleSkip}
          >
            Skip
          </Button>
        )}
      </div>
    </div>
  )
}
