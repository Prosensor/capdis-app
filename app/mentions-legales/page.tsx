import React from "react"
import type { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: 'Mentions légales - Groupe Capdis',
  description: 'Mentions légales de CAPDIS SARL',
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a5096]">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-[#e2e8f0] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-capdis.jpg"
                alt="Groupe Capdis - Au service de la mesure"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-[#1a5096] text-[#1a5096] hover:bg-[#1a5096] hover:text-white">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-[#1a5096]">Mentions légales</h1>
        
        <div className="prose prose-lg max-w-none space-y-8 text-[#64748b]">
          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">1. Informations légales</h2>
            <div className="space-y-2">
              <p><strong className="text-[#1a5096]">Raison sociale :</strong> CAPDIS SARL</p>
              <p><strong className="text-[#1a5096]">Forme juridique :</strong> Société à responsabilité limitée</p>
              <p><strong className="text-[#1a5096]">Siège social :</strong></p>
              <div className="ml-4 space-y-1">
                <p>8 rue de Luxembourg</p>
                <p>L-5752 FRISANGE</p>
                <p>Luxembourg</p>
              </div>
              <p><strong className="text-[#1a5096]">Registre du commerce :</strong> B 148.364</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">2. Directeur de publication</h2>
            <p>Le directeur de publication du site est le représentant légal de CAPDIS SARL.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">3. Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, graphismes, etc.) est la propriété exclusive de CAPDIS SARL, 
              sauf mention contraire. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
              des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable 
              de CAPDIS SARL.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">5. Protection des données personnelles</h2>
            <p>
              Les informations collectées sur ce site sont traitées conformément à notre politique de confidentialité. 
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, 
              de rectification, de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p className="mt-4">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante :{" "}
              <a href="mailto:contact@capdis.lu" className="text-[#d4a528] hover:underline">
                contact@capdis.lu
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">6. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
              En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">7. Responsabilité</h2>
            <p>
              CAPDIS SARL s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. 
              Toutefois, CAPDIS SARL ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations 
              mises à disposition sur ce site.
            </p>
            <p className="mt-4">
              CAPDIS SARL ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation 
              du site ou de l'impossibilité de l'utiliser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">8. Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers d'autres sites. CAPDIS SARL n'exerce aucun contrôle sur ces sites 
              et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">9. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit luxembourgeois. En cas de litige, les tribunaux 
              du Luxembourg seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">10. Contact</h2>
            <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter :</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4a528] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#1a5096]">Adresse</p>
                  <p>CAPDIS SARL<br />
                  8 rue de Luxembourg<br />
                  L-5752 FRISANGE<br />
                  Luxembourg</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d4a528] flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#1a5096]">Téléphone</p>
                  <a href="tel:+352661339387" className="hover:text-[#d4a528] transition-colors">
                    +352 661 339 387
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d4a528] flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#1a5096]">Email</p>
                  <a href="mailto:contact@capdis.lu" className="hover:text-[#d4a528] transition-colors">
                    contact@capdis.lu
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-8 border-t border-[#e2e8f0]">
            <p className="text-sm text-[#94a3b8]">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a5096] py-12 mt-16">
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
                  <Link href="/#accueil" className="text-white/70 hover:text-[#d4a528] transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-white/70 hover:text-[#d4a528] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#expertise" className="text-white/70 hover:text-[#d4a528] transition-colors">
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-white/70 hover:text-[#d4a528] transition-colors">
                    Contact
                  </Link>
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
