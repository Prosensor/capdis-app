"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Award,
} from "lucide-react"

export default function CapdisLandingPage() {
  // Fonction pour gérer le smooth scroll avec offset pour le header
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault()
    
    const element = document.getElementById(targetId)
    
    if (element) {
      // Calculer l'offset pour le header sticky (hauteur du header + top bar)
      // Le header fait environ 80px + top bar 40px = 120px
      const headerOffset = 120
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: Math.max(0, offsetPosition), // S'assurer qu'on ne scroll pas en négatif
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#1a5096]">

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-[#e2e8f0] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a 
              href="#accueil" 
              onClick={(e) => handleSmoothScroll(e, 'accueil')}
              className="flex items-center"
            >
              <Image
                src="/images/logo-capdis.jpg"
                alt="Groupe Capdis - Au service de la mesure"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </a>

            {/* CTA Button */}
            <Button 
              onClick={(e) => {
                e.preventDefault()
                handleSmoothScroll(e as any, 'contact')
              }}
              className="bg-[#d4a528] hover:bg-[#b8922a] text-white font-semibold text-sm md:text-base px-4 md:px-6"
            >
              Nos coordonnées
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-industrial.jpg"
            alt="Installations industrielles de mesure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a5096]/95 via-[#1a5096]/80 to-[#1a5096]/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white text-balance">
              Groupe Capdis{" "}
              <span className="text-[#d4a528]"><br />Mesure</span> et{" "}
              <span className="text-[#d4a528]">Instrumentation</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Au service de la mesure depuis 2010
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                onClick={(e) => {
                  e.preventDefault()
                  handleSmoothScroll(e as any, 'contact')
                }}
                className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

  



      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#d4a528] text-balance">
              CONTACT
            </h3>
            <p className="text-[#64748b] max-w-2xl mx-auto leading-relaxed">
              N{"'"}hésitez pas à nous contacter pour toute question ou demande de devis.
              Notre équipe vous répondra dans les plus brefs délais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Colonne Adresse */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#d4a528]/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-[#d4a528]" />
              </div>
              <h4 className="font-semibold text-[#1a5096] mb-3 text-lg">Adresse</h4>
              <p className="text-[#64748b] leading-relaxed">
                CAPDIS SARL<br />
                8 rue de Luxembourg<br />
                L-5752 FRISANGE<br />
                Luxembourg
              </p>
            </div>

            {/* Colonne Téléphone */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#d4a528]/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-[#d4a528]" />
              </div>
              <h4 className="font-semibold text-[#1a5096] mb-3 text-lg">Téléphone</h4>
              <a
                href="tel:+352661339387"
                className="text-[#64748b] hover:text-[#d4a528] transition-colors text-lg"
              >
                +352 661 339 387
              </a>
            </div>

            {/* Colonne Registre du commerce */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#d4a528]/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-[#d4a528]" />
              </div>
              <h4 className="font-semibold text-[#1a5096] mb-3 text-lg">Registre du commerce</h4>
              <p className="text-[#64748b] text-lg">B 148.364</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a5096] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo-capdis.jpg"
                  alt="Groupe Capdis"
                  width={150}
                  height={50}
                  className="h-10 w-auto object-contain bg-white rounded p-1"
                />
              </div>
              <p className="text-white/80 text-sm max-w-md">
                Votre partenaire de confiance pour tous vos besoins en métrologie
                et instruments de mesure industrielle au Luxembourg.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4">Légal</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/mentions-legales" className="text-white/70 hover:text-[#d4a528] transition-colors">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/politique-confidentialite" className="text-white/70 hover:text-[#d4a528] transition-colors">
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2026 CAPDIS SARL. Tous droits réservés.</p>
            <p>
              Immatriculé au registre du commerce de Luxembourg sous le numéro B 148.364
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
