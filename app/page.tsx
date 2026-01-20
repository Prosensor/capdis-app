"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Gauge,
  Settings,
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react"

export default function CapdisLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Fonction pour gérer le smooth scroll avec offset pour le header
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault()
    
    // Fermer le menu mobile si ouvert
    setMobileMenuOpen(false)
    
    // Attendre un peu pour que le menu se ferme avant de scroller
    setTimeout(() => {
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
    }, mobileMenuOpen ? 300 : 0) // Délai si le menu mobile est ouvert
  }

  return (
    <div className="min-h-screen bg-white text-[#1a5096]">
      {/* Top Bar */}
      <div className="bg-[#1a5096]">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white gap-2">
            <span>Spécialistes en métrologie industrielle</span>
            <div className="flex items-center gap-4">
              <a
                href="tel:+352661339387"
                className="flex items-center gap-1 hover:text-[#d4a528] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +352 661 339 387
              </a>
              <a
                href="mailto:contact@capdis.lu"
                className="flex items-center gap-1 hover:text-[#d4a528] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a 
                href="#accueil" 
                onClick={(e) => handleSmoothScroll(e, 'accueil')}
                className="text-[#1a5096] font-medium hover:text-[#d4a528] transition-colors"
              >
                Accueil
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleSmoothScroll(e, 'services')}
                className="text-[#64748b] hover:text-[#d4a528] transition-colors"
              >
                Services
              </a>
              <a 
                href="#expertise" 
                onClick={(e) => handleSmoothScroll(e, 'expertise')}
                className="text-[#64748b] hover:text-[#d4a528] transition-colors"
              >
                Expertise
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="text-[#64748b] hover:text-[#d4a528] transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={(e) => {
                  e.preventDefault()
                  handleSmoothScroll(e as any, 'contact')
                }}
                className="bg-[#d4a528] hover:bg-[#b8922a] text-white font-semibold"
              >
                Demander un devis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#1a5096]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-4">
              <a 
                href="#accueil" 
                onClick={(e) => handleSmoothScroll(e, 'accueil')}
                className="text-[#1a5096] font-medium hover:text-[#d4a528] transition-colors"
              >
                Accueil
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleSmoothScroll(e, 'services')}
                className="text-[#64748b] hover:text-[#d4a528] transition-colors"
              >
                Services
              </a>
              <a 
                href="#expertise" 
                onClick={(e) => handleSmoothScroll(e, 'expertise')}
                className="text-[#64748b] hover:text-[#d4a528] transition-colors"
              >
                Expertise
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="text-[#64748b] hover:text-[#d4a528] transition-colors"
              >
                Contact
              </a>
              <Button 
                onClick={(e) => {
                  e.preventDefault()
                  handleSmoothScroll(e as any, 'contact')
                }}
                className="bg-[#d4a528] hover:bg-[#b8922a] text-white font-semibold w-fit"
              >
                Demander un devis
              </Button>
            </nav>
          )}
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
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white text-balance">
              Experts en{" "}
              <span className="text-[#d4a528]">Métrologie</span> et{" "}
              <span className="text-[#d4a528]">Instruments de Mesure</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Groupe Capdis vous accompagne dans tous vos projets de mesure industrielle. 
              Calibration, étalonnage et solutions sur mesure pour garantir la précision 
              de vos équipements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={(e) => {
                  e.preventDefault()
                  handleSmoothScroll(e as any, 'services')
                }}
                className="bg-[#d4a528] hover:bg-[#b8922a] text-white font-semibold text-lg px-8"
              >
                Découvrir nos services
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
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

      {/* Stats Banner */}
      <section className="bg-[#7ec8e3] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#1a5096]">15+</p>
              <p className="text-[#1a5096]/80 text-sm">Années d{"'"}expérience</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#1a5096]/20" />
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#1a5096]">500+</p>
              <p className="text-[#1a5096]/80 text-sm">Clients satisfaits</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#1a5096]/20" />
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#1a5096]">10K+</p>
              <p className="text-[#1a5096]/80 text-sm">Instruments calibrés</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#1a5096]/20" />
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#1a5096]">24/7</p>
              <p className="text-[#1a5096]/80 text-sm">Support technique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#d4a528] font-semibold mb-2">NOS SERVICES</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a5096] text-balance">
              Solutions complètes en métrologie
            </h3>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              De l{"'"}étalonnage à la maintenance, nous proposons une gamme complète de services
              pour garantir la précision de vos instruments de mesure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-[#e2e8f0] hover:border-[#d4a528] hover:shadow-lg transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#d4a528]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#d4a528]/20 transition-colors">
                  <Gauge className="w-7 h-7 text-[#d4a528]" />
                </div>
                <h4 className="text-xl font-bold text-[#1a5096] mb-2">Étalonnage</h4>
                <p className="text-[#64748b] leading-relaxed">
                  Services d{"'"}étalonnage accrédités pour tous types d{"'"}instruments de mesure
                  selon les normes internationales.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#e2e8f0] hover:border-[#d4a528] hover:shadow-lg transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#d4a528]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#d4a528]/20 transition-colors">
                  <Settings className="w-7 h-7 text-[#d4a528]" />
                </div>
                <h4 className="text-xl font-bold text-[#1a5096] mb-2">Maintenance</h4>
                <p className="text-[#64748b] leading-relaxed">
                  Maintenance préventive et corrective de vos équipements de mesure pour
                  assurer leur fiabilité à long terme.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#e2e8f0] hover:border-[#d4a528] hover:shadow-lg transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#d4a528]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#d4a528]/20 transition-colors">
                  <Shield className="w-7 h-7 text-[#d4a528]" />
                </div>
                <h4 className="text-xl font-bold text-[#1a5096] mb-2">Certification</h4>
                <p className="text-[#64748b] leading-relaxed">
                  Accompagnement dans vos démarches de certification et mise en conformité
                  réglementaire.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#e2e8f0] hover:border-[#d4a528] hover:shadow-lg transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#d4a528]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#d4a528]/20 transition-colors">
                  <Award className="w-7 h-7 text-[#d4a528]" />
                </div>
                <h4 className="text-xl font-bold text-[#1a5096] mb-2">Conseil</h4>
                <p className="text-[#64748b] leading-relaxed">
                  Expertise et conseil pour optimiser vos processus de mesure et améliorer
                  votre qualité.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#e2e8f0] hover:border-[#d4a528] hover:shadow-lg transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#d4a528]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#d4a528]/20 transition-colors">
                  <Users className="w-7 h-7 text-[#d4a528]" />
                </div>
                <h4 className="text-xl font-bold text-[#1a5096] mb-2">Formation</h4>
                <p className="text-[#64748b] leading-relaxed">
                  Programmes de formation adaptés pour vos équipes sur les bonnes pratiques
                  de métrologie.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#e2e8f0] hover:border-[#d4a528] hover:shadow-lg transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#d4a528]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#d4a528]/20 transition-colors">
                  <Clock className="w-7 h-7 text-[#d4a528]" />
                </div>
                <h4 className="text-xl font-bold text-[#1a5096] mb-2">Intervention rapide</h4>
                <p className="text-[#64748b] leading-relaxed">
                  Service d{"'"}intervention rapide sur site pour minimiser vos temps d{"'"}arrêt
                  de production.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-[#1a5096]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#7ec8e3] font-semibold mb-2">NOTRE EXPERTISE</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white text-balance">
                Plus de 15 ans au service de l{"'"}industrie luxembourgeoise
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Depuis notre création, Groupe Capdis s{"'"}est imposé comme un acteur majeur
                de la métrologie au Luxembourg et dans la Grande Région. Notre équipe
                d{"'"}experts qualifiés met son savoir-faire à votre service.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#d4a528] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Accréditation ISO 17025</h4>
                    <p className="text-white/70 text-sm">
                      Laboratoire accrédité selon les normes internationales
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#d4a528] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Équipe certifiée</h4>
                    <p className="text-white/70 text-sm">
                      Techniciens et ingénieurs formés et certifiés
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#d4a528] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Technologies de pointe</h4>
                    <p className="text-white/70 text-sm">
                      Équipements modernes pour une précision maximale
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#7ec8e3]">
                <Image
                  src="/images/measurement-services.jpg"
                  alt="Services de mesure et calibration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#d4a528] rounded-xl p-4 shadow-lg hidden md:block">
                <p className="text-4xl font-bold text-white">B 148.364</p>
                <p className="text-white/90 text-sm">N° Registre Commerce</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#d4a528] font-semibold mb-2">NOS RÉALISATIONS</p>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1a5096] text-balance">
              Domaines d{"'"}intervention
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden group aspect-[4/3] border-2 border-[#e2e8f0] hover:border-[#7ec8e3] transition-colors">
              <Image
                src="/images/industrial-expertise.jpg"
                alt="Expertise industrielle"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a5096]/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-bold text-white">Industrie manufacturière</h4>
                <p className="text-white/80 text-sm">Contrôle qualité et production</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden group aspect-[4/3] border-2 border-[#e2e8f0] hover:border-[#7ec8e3] transition-colors">
              <Image
                src="/images/measurement-services.jpg"
                alt="Services pharmaceutiques"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a5096]/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-bold text-white">Pharmaceutique</h4>
                <p className="text-white/80 text-sm">Conformité et traçabilité</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden group aspect-[4/3] border-2 border-[#e2e8f0] hover:border-[#7ec8e3] transition-colors">
              <Image
                src="/images/hero-industrial.jpg"
                alt="Secteur énergie"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a5096]/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-bold text-white">Énergie et environnement</h4>
                <p className="text-white/80 text-sm">Surveillance et monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#7ec8e3]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a5096] text-balance">
            Prêt à optimiser vos mesures ?
          </h3>
          <p className="text-[#1a5096]/80 max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de vos besoins en métrologie. Notre équipe
            d{"'"}experts est à votre disposition pour vous conseiller.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={(e) => {
                e.preventDefault()
                handleSmoothScroll(e as any, 'contact')
              }}
              className="bg-[#d4a528] hover:bg-[#b8922a] text-white font-semibold text-lg px-8"
            >
              Demander un devis gratuit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#1a5096] text-[#1a5096] hover:bg-[#1a5096] hover:text-white text-lg px-8 bg-transparent"
            >
              <Phone className="mr-2 w-5 h-5" />
              +352 661 339 387
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#d4a528] font-semibold mb-2">CONTACT</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a5096] text-balance">
                Restons en contact
              </h3>
              <p className="text-[#64748b] mb-8 leading-relaxed">
                N{"'"}hésitez pas à nous contacter pour toute question ou demande de devis.
                Notre équipe vous répondra dans les plus brefs délais.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4a528]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#d4a528]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a5096] mb-1">Adresse</h4>
                    <p className="text-[#64748b]">
                      CAPDIS SARL<br />
                      8 rue de Luxembourg<br />
                      L-5752 FRISANGE<br />
                      Luxembourg
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4a528]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#d4a528]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a5096] mb-1">Téléphone</h4>
                    <a
                      href="tel:+352661339387"
                      className="text-[#64748b] hover:text-[#d4a528] transition-colors"
                    >
                      +352 661 339 387
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4a528]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-[#d4a528]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a5096] mb-1">Registre du commerce</h4>
                    <p className="text-[#64748b]">B 148.364</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-lg">
              <h4 className="text-xl font-bold text-[#1a5096] mb-6">Envoyez-nous un message</h4>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#64748b] mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-[#1a5096] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#d4a528] transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#64748b] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-[#1a5096] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#d4a528] transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#64748b] mb-2">
                    Société
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-[#1a5096] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#d4a528] transition-colors"
                    placeholder="Nom de votre société"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#64748b] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-[#1a5096] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#d4a528] transition-colors resize-none"
                    placeholder="Décrivez votre besoin..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#d4a528] hover:bg-[#b8922a] text-white font-semibold py-3"
                >
                  Envoyer le message
                </Button>
              </form>
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
              <h5 className="font-semibold text-white mb-4">Navigation</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="#accueil" 
                    onClick={(e) => handleSmoothScroll(e, 'accueil')}
                    className="text-white/70 hover:text-[#d4a528] transition-colors"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    onClick={(e) => handleSmoothScroll(e, 'services')}
                    className="text-white/70 hover:text-[#d4a528] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#expertise" 
                    onClick={(e) => handleSmoothScroll(e, 'expertise')}
                    className="text-white/70 hover:text-[#d4a528] transition-colors"
                  >
                    Expertise
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleSmoothScroll(e, 'contact')}
                    className="text-white/70 hover:text-[#d4a528] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
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
