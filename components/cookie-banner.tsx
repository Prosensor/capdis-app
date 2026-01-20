"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X, Cookie } from "lucide-react"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
    // Déclencher un événement pour mettre à jour Analytics
    window.dispatchEvent(new Event("cookieConsentChanged"))
    // Recharger la page pour activer Analytics
    window.location.reload()
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
    // Déclencher un événement pour désactiver Analytics
    window.dispatchEvent(new Event("cookieConsentChanged"))
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow-2xl border-2 border-[#d4a528] p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#d4a528]/10 rounded-full flex items-center justify-center">
                <Cookie className="w-6 h-6 text-[#d4a528]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#1a5096] mb-2">
                Gestion des cookies
              </h3>
              <p className="text-sm text-[#64748b] mb-4 leading-relaxed">
                Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. 
                Les cookies analytiques nous aident à comprendre comment vous utilisez notre site. 
                Vous pouvez accepter tous les cookies ou les refuser.{" "}
                <Link 
                  href="/politique-confidentialite" 
                  className="text-[#d4a528] hover:underline font-medium"
                >
                  En savoir plus
                </Link>
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={acceptCookies}
                  className="bg-[#d4a528] hover:bg-[#b8922a] text-white font-semibold"
                >
                  Accepter tous les cookies
                </Button>
                <Button
                  onClick={rejectCookies}
                  variant="outline"
                  className="border-[#1a5096] text-[#1a5096] hover:bg-[#1a5096] hover:text-white"
                >
                  Refuser
                </Button>
              </div>
            </div>
            <button
              onClick={rejectCookies}
              className="flex-shrink-0 text-[#64748b] hover:text-[#1a5096] transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
