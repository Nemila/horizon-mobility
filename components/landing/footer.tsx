import { Mail, MapPin, Phone, Plane } from "lucide-react"

import { Container } from "@/components/landing/container"
import { Logo } from "@/components/landing/logo"

const quickLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Nos services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Ressources", href: "#ressources" },
  { label: "Contact", href: "#contact" },
]

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-primary hover:bg-primary/5"
    >
      {children}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-1">
            <Logo showCaption={false} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-foreground">
              Horizon Mobility vous accompagne dans la réalisation de vos projets
              d&apos;études, de voyage et d&apos;immigration à travers le monde.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialIcon href="#" label="Facebook">
                <span className="text-xs font-bold">f</span>
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <span className="text-xs font-bold">in</span>
              </SocialIcon>
              <SocialIcon href="#" label="WhatsApp">
                <span className="text-xs font-bold">wa</span>
              </SocialIcon>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.15em] text-primary uppercase">
              Liens rapides
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.15em] text-primary uppercase">
              Contactez-nous
            </p>
            <ul className="space-y-3 text-sm text-secondary-foreground">
              <li>
                <a
                  href="mailto:sakandenimou@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Mail className="size-4 shrink-0 text-primary" />
                  sakandenimou@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  +226 72 33 74 90
                  <br />
                  +90 548 832 39 76
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                123 Avenue des Nations, Ouagadougou, Burkina Faso
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-secondary-foreground sm:flex-row">
          <p>© 2024 Horizon Mobility. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              Mentions légales
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Politique de confidentialité
            </a>
          </div>
          <div className="absolute right-0 bottom-0 hidden lg:block">
            <svg
              viewBox="0 0 100 60"
              className="h-14 w-24 text-accent/30"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 45 Q 50 5, 95 25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
            <Plane
              className="absolute top-0 right-0 size-4 rotate-12 text-accent"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </Container>
    </footer>
  )
}
