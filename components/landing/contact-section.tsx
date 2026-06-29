import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Container, Section } from "@/components/landing/container"

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
      className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-primary hover:bg-primary/5"
    >
      {children}
    </a>
  )
}

export function ContactSection() {
  return (
    <Section id="contact" className="bg-section-alt pt-0">
      <Container>
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2 className="font-heading text-3xl leading-tight text-primary md:text-4xl">
              Prêt à commencer votre aventure ?
            </h2>
            <p className="text-base leading-relaxed text-secondary-foreground">
              Contactez-nous dès aujourd&apos;hui pour une consultation
              personnalisée. Notre équipe est à votre écoute pour répondre à
              toutes vos questions.
            </p>
            <div className="space-y-4 text-sm text-secondary-foreground">
              <a
                href="mailto:sakandenimou@gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                sakandenimou@gmail.com
              </a>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p>+226 72 33 74 90</p>
                  <p>+90 548 832 39 76</p>
                </div>
              </div>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                Nous vous accompagnons vers le monde, en toute confiance.
              </p>
            </div>
            <div className="flex gap-3">
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

          <form className="rounded-[28px] border border-border bg-white p-6 lg:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Nom complet" aria-label="Nom complet" />
              <Input
                type="email"
                placeholder="Email"
                aria-label="Email"
              />
              <Input placeholder="Téléphone" aria-label="Téléphone" />
              <Input placeholder="Sujet" aria-label="Sujet" />
            </div>
            <Textarea
              placeholder="Votre message"
              aria-label="Votre message"
              className="mt-4 min-h-32 rounded-3xl"
            />
            <Button type="submit" size="xl" className="mt-6 w-full">
              Envoyer ma demande
              <ArrowRight className="size-4" />
            </Button>
          </form>

          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-[#dbeafe] via-[#e8edf5] to-[#fed7aa]/30">
            <div className="absolute inset-0 opacity-30">
              <div className="grid h-full w-full grid-cols-6 grid-rows-6">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="border border-white/40" />
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin className="size-10 fill-accent text-accent" />
            </div>
            <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-border bg-white p-4 sm:left-auto sm:max-w-xs">
              <p className="text-sm font-semibold text-primary">
                Horizon Mobility
              </p>
              <p className="mt-1 text-xs leading-relaxed text-secondary-foreground">
                123 Avenue des Nations, Ouagadougou, Burkina Faso
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
