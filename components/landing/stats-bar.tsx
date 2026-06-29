"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Award, Globe2, Smile, Target } from "lucide-react"

import {
  Container,
  Eyebrow,
  Highlight,
  Section,
  SectionTitle,
} from "@/components/landing/container"
import { cn } from "@/lib/utils"

const stats = [
  {
    icon: Target,
    value: "+2500",
    label: "Projets réalisés avec succès",
  },
  {
    icon: Globe2,
    value: "+15",
    label: "Pays de destination dans le monde",
  },
  {
    icon: Smile,
    value: "98%",
    label: "Taux de satisfaction de nos clients",
  },
  {
    icon: Award,
    value: "7+",
    label: "Années d'expérience à vos côtés",
  },
]

const MOSAIC_COLS = 4
const MOSAIC_ROWS = 5
const MOSAIC_IMAGE =
  "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1470&auto=format&fit=crop"

function MosaicImageGrid({
  cols,
  rows,
  src,
  alt,
  className,
}: {
  cols: number
  rows: number
  src: string
  alt: string
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()
  const tiles = Array.from({ length: cols * rows }, (_, index) => ({
    col: index % cols,
    row: Math.floor(index / cols),
    index,
  }))

  return (
    <div
      className={cn("grid gap-2 sm:gap-2.5", className)}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      role="img"
      aria-label={alt}
    >
      {tiles.map(({ col, row, index }) => (
        <div
          key={`${col}-${row}`}
          className="group relative aspect-square overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:z-10 hover:scale-105 hover:rotate-2 sm:rounded-[1.125rem]"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: `${cols * 100}% ${rows * 100}%`,
              backgroundPosition: `${cols > 1 ? (col / (cols - 1)) * 100 : 0}% ${rows > 1 ? (row / (rows - 1)) * 100 : 0}%`,
              backgroundRepeat: "no-repeat",
            }}
            initial={{ filter: "grayscale(1)" }}
            whileInView={{ filter: "grayscale(0)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              filter: prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 0.6,
                    delay: index * 0.04,
                    ease: "easeOut",
                  },
            }}
          />
        </div>
      ))}
    </div>
  )
}

export function StatsBar() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MosaicImageGrid
            cols={MOSAIC_COLS}
            rows={MOSAIC_ROWS}
            src={MOSAIC_IMAGE}
            alt="Vue aérienne d'îles tropicales entourées d'eau turquoise"
            className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Eyebrow>Nos résultats</Eyebrow>
              <SectionTitle>
                Une expertise reconnue, des résultats{" "}
                <Highlight>concrets</Highlight>.
              </SectionTitle>
              <p className="text-base leading-relaxed text-secondary-foreground">
                Depuis plus de 7 ans, Horizon Mobility accompagne étudiants,
                voyageurs et candidats à l&apos;immigration avec rigueur et
                transparence. Nos chiffres reflètent la confiance que nos
                clients nous accordent, partout dans le monde.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="flex flex-col gap-3 rounded-[22px] border border-border bg-white p-4 sm:gap-4 sm:p-5"
                >
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-border text-primary sm:size-12">
                    <stat.icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-secondary-foreground sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
