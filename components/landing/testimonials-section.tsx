"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Quote } from "lucide-react";
import { useMemo } from "react";

import {
  Container,
  Highlight,
  Section,
  SectionTitle,
} from "@/components/landing/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Grâce à Horizon Mobility, j'ai pu obtenir mon visa étudiant pour le Canada sans stress. L'équipe a été incroyable !",
    name: "Fatoumata Diallo",
    role: "Étudiante au Canada",
    image: "/team/aissata.jpg",
    alt: "Fatoumata Diallo, étudiante au Canada",
    initials: "FD",
  },
  {
    quote:
      "Un accompagnement professionnel de A à Z. Mon visa touristique pour la France a été approuvé en un temps record.",
    name: "Mohamed Camara",
    role: "Voyageur",
    image: "/team/ousmane.jpg",
    alt: "Mohamed Camara, voyageur",
    initials: "MC",
  },
  {
    quote:
      "Je recommande Horizon Mobility les yeux fermés. Transparence, écoute et efficacité sont au rendez-vous.",
    name: "Sophie K.",
    role: "Touriste",
    image: "/team/mariam.jpg",
    alt: "Sophie K., touriste",
    initials: "SK",
  },
  {
    quote:
      "Mon dossier d'immigration pour le Royaume-Uni a été traité avec une précision remarquable. Je me suis senti accompagné à chaque instant.",
    name: "Ibrahim S.",
    role: "Candidat à l'immigration",
    image: "/team/yassine.jpg",
    alt: "Ibrahim S., candidat à l'immigration",
    initials: "IS",
  },
  {
    quote:
      "Horizon Mobility m'a aidée à préparer mon séjour en Belgique avec des conseils clairs et une disponibilité constante.",
    name: "Aminata B.",
    role: "Étudiante en Belgique",
    image: "/team/aissata.jpg",
    alt: "Aminata B., étudiante en Belgique",
    initials: "AB",
  },
  {
    quote:
      "Service rapide, équipe à l'écoute et résultat obtenu du premier coup pour mon visa touristique en Espagne.",
    name: "Jean-Pierre M.",
    role: "Voyageur",
    image: "/team/ousmane.jpg",
    alt: "Jean-Pierre M., voyageur",
    initials: "JM",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="flex h-full flex-col rounded-[28px] border border-border bg-white p-6 sm:p-8">
      <Quote
        className="mb-6 size-10 text-muted-foreground/40"
        strokeWidth={1}
      />
      <p className="mb-8 flex-1 text-sm leading-relaxed text-secondary-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarImage src={testimonial.image} alt={testimonial.alt} />
          <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
            {testimonial.initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-primary">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const autoScrollPlugin = useMemo(
    () =>
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    [],
  );

  return (
    <Section className="bg-background pt-0">
      <Container className="flex flex-col items-center gap-10 lg:gap-12">
        <SectionTitle className="max-w-3xl text-center">
          Ils ont vécu l&apos;expérience <Highlight>Horizon Mobility</Highlight>
          .
        </SectionTitle>

        <Carousel
          plugins={[autoScrollPlugin]}
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: "auto",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </Section>
  );
}
