import { ArrowRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Container,
  Highlight,
  Section,
  SectionTitle,
} from "@/components/landing/container"

const team = [
  {
    name: "Aissata N.",
    role: "Conseillère en immigration",
    image: "/team/aissata.jpg",
    alt: "Aissata N., conseillère en immigration chez Horizon Mobility",
  },
  {
    name: "Ousmane D.",
    role: "Spécialiste visa & études",
    image: "/team/ousmane.jpg",
    alt: "Ousmane D., spécialiste visa et études chez Horizon Mobility",
  },
  {
    name: "Mariam K.",
    role: "Conseillère en tourisme",
    image: "/team/mariam.jpg",
    alt: "Mariam K., conseillère en tourisme chez Horizon Mobility",
  },
  {
    name: "Yassine B.",
    role: "Responsable des opérations",
    image: "/team/yassine.jpg",
    alt: "Yassine B., responsable des opérations chez Horizon Mobility",
  },
]

export function TeamSection() {
  return (
    <Section id="apropos" className="bg-section-alt pt-0">
      <Container>
        <div className="flex flex-col gap-12 lg:gap-14">
          <div className="mx-auto flex max-w-2xl flex-col gap-6 text-center">
            <SectionTitle>
              Des experts <Highlight>passionnés</Highlight>, à votre service.
            </SectionTitle>
            <p className="text-base leading-relaxed text-secondary-foreground">
              Notre équipe pluridisciplinaire combine expertise locale et
              connaissance internationale pour vous guider avec rigueur et
              bienveillance à chaque étape de votre projet.
            </p>
            <div>
              <Button variant="outline" size="lg" className="bg-white">
                Rencontrer l&apos;équipe
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {team.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-[28px] border border-border bg-white p-5"
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-[20px]">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    quality={100}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-secondary-foreground">
                  {member.role}
                </p>
                <button
                  type="button"
                  aria-label={`LinkedIn de ${member.name}`}
                  className="mt-4 flex size-8 cursor-pointer items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4 fill-current"
                    aria-hidden
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
