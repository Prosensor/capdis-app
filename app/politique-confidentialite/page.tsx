import React from "react"
import type { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: 'Politique de confidentialité - Groupe Capdis',
  description: 'Politique de confidentialité de CAPDIS SARL',
}

export default function PolitiqueConfidentialitePage() {
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
        <h1 className="text-4xl font-bold mb-8 text-[#1a5096]">Politique de confidentialité</h1>
        
        <div className="prose prose-lg max-w-none space-y-8 text-[#64748b]">
          <section>
            <p className="text-lg">
              CAPDIS SARL ("nous", "notre", "nos") s'engage à protéger et respecter votre vie privée. 
              Cette politique de confidentialité explique comment nous collectons, utilisons, stockons 
              et protégeons vos données personnelles conformément au Règlement Général sur la Protection 
              des Données (RGPD) et à la législation luxembourgeoise en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">1. Responsable du traitement</h2>
            <p>Le responsable du traitement des données personnelles est :</p>
            <div className="mt-4 space-y-2">
              <p><strong className="text-[#1a5096]">CAPDIS SARL</strong></p>
              <p>8 rue de Luxembourg</p>
              <p>L-5752 FRISANGE</p>
              <p>Luxembourg</p>
              <p>Registre du commerce : B 148.364</p>
              <p>
                Email :{" "}
                <a href="mailto:contact@capdis.lu" className="text-[#d4a528] hover:underline">
                  contact@capdis.lu
                </a>
              </p>
              <p>Téléphone : <a href="tel:+352661339387" className="text-[#d4a528] hover:underline">+352 661 339 387</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">2. Données collectées</h2>
            <p className="mb-4">
              Notre site web est un site vitrine simple qui présente les informations de contact de notre entreprise. 
              Nous ne collectons aucune donnée personnelle directement via ce site web.
            </p>
            <p className="mb-4">Les seules données collectées sont :</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li><strong className="text-[#1a5096]">Données de navigation techniques :</strong> adresse IP, données de connexion collectées automatiquement par notre hébergeur (Vercel) pour des raisons techniques et de sécurité</li>
              <li><strong className="text-[#1a5096]">Données statistiques anonymisées :</strong> via Vercel Analytics (uniquement si vous acceptez les cookies analytiques), pour comprendre comment les visiteurs utilisent notre site web de manière anonymisée</li>
            </ul>
            <p className="mt-4 text-sm text-[#94a3b8]">
              <strong>Important :</strong> Ce site ne contient aucun formulaire de contact. Si vous nous contactez par email ou téléphone 
              (via les liens présents sur le site), ces communications sont gérées en dehors du site web et ne font pas partie 
              du traitement de données décrit dans cette politique.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">3. Finalités du traitement</h2>
            <p>Les données techniques collectées sont utilisées uniquement pour les finalités suivantes :</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li><strong className="text-[#1a5096]">Sécurité technique :</strong> assurer le bon fonctionnement et la sécurité de notre site web, prévenir les abus et les attaques</li>
              <li><strong className="text-[#1a5096]">Analyse statistique anonymisée :</strong> comprendre comment les visiteurs utilisent notre site web via Vercel Analytics (uniquement si vous acceptez les cookies analytiques). Ces données sont anonymisées et ne permettent pas de vous identifier personnellement</li>
              <li><strong className="text-[#1a5096]">Obligations légales :</strong> respecter nos obligations légales et réglementaires en matière de conservation des logs techniques</li>
            </ul>
            <p className="mt-4 text-sm text-[#94a3b8]">
              <strong>Note :</strong> Ce site étant un simple site vitrine, nous ne collectons pas de données personnelles 
              identifiables via le site web lui-même. Les communications par email ou téléphone sont gérées séparément 
              et ne font pas partie du traitement décrit dans cette politique.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">4. Base légale du traitement</h2>
            <p>Le traitement des données techniques collectées est fondé sur :</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li><strong className="text-[#1a5096]">Votre consentement</strong> pour les cookies analytiques (via la bannière de cookies qui s'affiche lors de votre première visite)</li>
              <li><strong className="text-[#1a5096]">Notre intérêt légitime</strong> pour assurer la sécurité technique du site, prévenir les abus et analyser le trafic de manière anonymisée</li>
              <li><strong className="text-[#1a5096]">Le respect d'obligations légales</strong> auxquelles nous sommes soumis en matière de conservation des logs techniques pour des raisons de sécurité</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">5. Conservation des données</h2>
            <p>
              Les données techniques collectées sont conservées uniquement pendant la durée nécessaire aux finalités 
              pour lesquelles elles ont été collectées :
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li><strong className="text-[#1a5096]">Données de navigation (Analytics) :</strong> conservées par Vercel Analytics selon leur politique de conservation (généralement 13 mois maximum). Ces données sont anonymisées et ne permettent pas de vous identifier</li>
              <li><strong className="text-[#1a5096]">Données techniques (logs serveur) :</strong> conservées par notre hébergeur (Vercel) pour des raisons de sécurité et de fonctionnement technique, généralement 12 mois maximum</li>
            </ul>
            <p className="mt-4 text-sm text-[#94a3b8]">
              Au-delà de ces durées, les données sont automatiquement supprimées ou anonymisées de manière sécurisée 
              par nos prestataires techniques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">6. Destinataires des données</h2>
            <p>Les données techniques collectées peuvent être communiquées à :</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li><strong className="text-[#1a5096]">Vercel Inc. :</strong> notre hébergeur et fournisseur du service d'analyse (Vercel Analytics) - situé aux États-Unis, conforme au RGPD via des garanties appropriées (clauses contractuelles types)</li>
              <li><strong className="text-[#1a5096]">Les autorités compétentes :</strong> uniquement en cas d'obligation légale ou de réquisition judiciaire</li>
            </ul>
            <p className="mt-4">
              <strong>Important :</strong> Nous ne vendons jamais vos données à des tiers à des fins commerciales. 
              Nous ne partageons les données qu'avec notre prestataire technique (Vercel) strictement nécessaire 
              au fonctionnement et à l'hébergement du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">7. Transferts hors UE</h2>
            <p>
              Certains de nos prestataires peuvent être situés hors de l'Union Européenne. Dans ce cas, 
              nous nous assurons que des garanties appropriées sont mises en place (clauses contractuelles 
              types, Privacy Shield, etc.) pour protéger vos données conformément au RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">8. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li><strong className="text-[#1a5096]">Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong className="text-[#1a5096]">Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
              <li><strong className="text-[#1a5096]">Droit à l'effacement :</strong> supprimer vos données dans certains cas</li>
              <li><strong className="text-[#1a5096]">Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong className="text-[#1a5096]">Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
              <li><strong className="text-[#1a5096]">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong className="text-[#1a5096]">Droit de retirer votre consentement :</strong> à tout moment pour les traitements fondés sur le consentement</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse :{" "}
              <a href="mailto:contact@capdis.lu" className="text-[#d4a528] hover:underline">
                contact@capdis.lu
              </a>
            </p>
            <p className="mt-2">
              Vous avez également le droit d'introduire une réclamation auprès de la Commission Nationale 
              pour la Protection des Données (CNPD) du Luxembourg si vous estimez que le traitement de 
              vos données personnelles constitue une violation du RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">9. Cookies</h2>
            <p className="mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser 
              le trafic. Nous utilisons les types de cookies suivants :
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-3">
              <li>
                <strong className="text-[#1a5096]">Cookies essentiels :</strong> nécessaires au fonctionnement technique du site. 
                Ces cookies ne nécessitent pas votre consentement et sont automatiquement activés.
              </li>
              <li>
                <strong className="text-[#1a5096]">Cookies analytiques (Vercel Analytics) :</strong> nous permettent de comprendre 
                comment les visiteurs utilisent notre site (pages visitées, durée de visite, etc.) de manière anonymisée. 
                Ces cookies nécessitent votre consentement et vous pouvez les accepter ou les refuser via la bannière de cookies 
                qui s'affiche lors de votre première visite.
              </li>
            </ul>
            <p className="mt-4">
              <strong>Gestion de vos préférences :</strong> Lors de votre première visite, une bannière vous permet d'accepter 
              ou de refuser les cookies analytiques. Vous pouvez modifier vos préférences à tout moment en supprimant les cookies 
              de votre navigateur ou en nous contactant.
            </p>
            <p className="mt-4 text-sm text-[#94a3b8]">
              Pour plus d'informations sur les cookies utilisés par Vercel Analytics, consultez leur 
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#d4a528] hover:underline ml-1">
                politique de confidentialité
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">10. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
              protéger vos données personnelles contre tout accès non autorisé, perte, destruction 
              ou altération. Cependant, aucune méthode de transmission sur Internet n'est totalement 
              sécurisée et nous ne pouvons garantir une sécurité absolue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">11. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Toute modification sera publiée sur cette page avec une mise à jour de la date de dernière 
              modification. Nous vous encourageons à consulter régulièrement cette page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a5096] mb-4">12. Contact</h2>
            <p>Pour toute question concernant cette politique de confidentialité ou vos données personnelles :</p>
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
