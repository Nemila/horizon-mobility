import { Quote } from "lucide-react"

import {
  Container,
  Highlight,
  Section,
  SectionTitle,
} from "@/components/landing/container"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "Grâce à Horizon Mobility, j'ai pu obtenir mon visa étudiant pour le Canada sans stress. L'équipe a été incroyable !",
    name: "Fatoumata Diallo",
    role: "Étudiante au Canada",
    initials: "FD",
  },
  {
    quote:
      "Un accompagnement professionnel de A à Z. Mon visa touristique pour la France a été approuvé en un temps record.",
    name: "Mohamed Camara",
    role: "Voyageur",
    initials: "MC",
  },
  {
    quote:
      "Je recommande Horizon Mobility les yeux fermés. Transparence, écoute et efficacité sont au rendez-vous.",
    name: "Sophie K.",
    role: "Touriste",
    initials: "SK",
  },
]

export function TestimonialsSection() {
  return (
    <Section className="bg-background pt-0">
      <Container className="flex flex-col items-center gap-10 lg:gap-12">
        <SectionTitle className="max-w-3xl text-center">
          Ils ont vécu l&apos;expérience{" "}
          <Highlight>Horizon Mobility</Highlight>.
        </SectionTitle>

        <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col rounded-[28px] border border-border bg-white p-8 shadow-card"
            >
              <Quote
                className="mb-6 size-10 text-muted-foreground/40"
                strokeWidth={1}
              />
              <p className="mb-8 flex-1 text-sm leading-relaxed text-secondary-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={cn(
                "size-2 rounded-full transition-colors",
                dot === 0 ? "w-6 bg-accent" : "bg-border"
              )}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
