import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Container,
  Highlight,
  Section,
  SectionTitle,
} from "@/components/landing/container"

const destinations = [
  { name: "Canada", flag: "🇨🇦", gradient: "from-red-100 to-red-50" },
  { name: "France", flag: "🇫🇷", gradient: "from-blue-100 to-red-50" },
  { name: "Royaume-Uni", flag: "🇬🇧", gradient: "from-blue-100 to-blue-50" },
  { name: "États-Unis", flag: "🇺🇸", gradient: "from-blue-100 to-red-50" },
  { name: "Turquie", flag: "🇹🇷", gradient: "from-red-100 to-orange-50" },
]

export function DestinationsSection() {
  return (
    <Section id="destinations" className="bg-section-alt pt-0">
      <Container className="flex flex-col items-center gap-10 lg:gap-12">
        <SectionTitle className="max-w-2xl text-center">
          Explorez de nouvelles <Highlight>opportunités</Highlight>.
        </SectionTitle>

        <div className="grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group overflow-hidden rounded-[28px] border border-border bg-white shadow-card transition-transform hover:-translate-y-1"
            >
              <div
                className={`relative aspect-[4/5] bg-gradient-to-br ${destination.gradient}`}
              >
                <span className="absolute top-4 left-4 flex size-9 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                  {destination.flag}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-primary">
                  {destination.name}
                </p>
              </div>
            </article>
          ))}
        </div>

        <Button variant="outline" size="lg" className="bg-white shadow-card">
          Voir toutes les destinations
          <ArrowRight className="size-4" />
        </Button>
      </Container>
    </Section>
  )
}
