"use client"

import { useState, useEffect } from "react"
import { Analytics } from "@vercel/analytics/next"

export function ConditionalAnalytics() {
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false)

  useEffect(() => {
    // Vérifier le consentement aux cookies
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie-consent")
      if (consent === "accepted") {
        setShouldLoadAnalytics(true)
      }
    }
  }, [])

  // Écouter les changements de consentement depuis d'autres composants
  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== "undefined") {
        const consent = localStorage.getItem("cookie-consent")
        setShouldLoadAnalytics(consent === "accepted")
      }
    }

    // Écouter les changements dans localStorage
    window.addEventListener("storage", handleStorageChange)
    
    // Écouter les événements personnalisés pour les changements dans le même onglet
    window.addEventListener("cookieConsentChanged", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("cookieConsentChanged", handleStorageChange)
    }
  }, [])

  if (!shouldLoadAnalytics) {
    return null
  }

  return <Analytics />
}
