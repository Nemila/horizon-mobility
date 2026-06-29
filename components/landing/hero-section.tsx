import { ArrowRight, Calendar, Users } from "lucide-react";
import Image from "next/image";

import { Container, Highlight } from "@/components/landing/container";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const clientAvatars = [
  {
    src: "/avatars/client-1.jpg",
    alt: "Cliente Horizon Mobility",
    fallback: "A",
  },
  {
    src: "/avatars/client-2.jpg",
    alt: "Client Horizon Mobility",
    fallback: "M",
  },
  {
    src: "/avatars/client-3.jpg",
    alt: "Cliente Horizon Mobility",
    fallback: "S",
  },
  {
    src: "/avatars/client-4.jpg",
    alt: "Client Horizon Mobility",
    fallback: "F",
  },
];

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="bg-background py-10 lg:flex lg:min-h-[calc(100svh-6rem)] lg:items-center lg:py-6"
    >
      <Container className="w-full">
        <div className="grid items-center gap-8 lg:grid-cols-[40fr_60fr] lg:gap-10">
          <div className="flex flex-col gap-4 lg:gap-5">
            <h1 className="font-heading font-medium text-4xl leading-[1.1] text-primary md:text-5xl lg:text-6xl">
              Etudes, Tourisme, Immigration : Nous vous accompagnons{" "}
              <Highlight>a chaque etape.</Highlight>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-secondary-foreground lg:text-[0.9375rem]">
              Horizon Mobility accompagne les étudiants, voyageurs et candidats
              à l&apos;immigration dans chaque étape de leur parcours, avec une
              expertise reconnue et un suivi personnalisé.
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-secondary-foreground lg:text-[0.9375rem]">
              De la préparation du dossier à l&apos;obtention du visa, notre
              équipe met son expérience internationale au service de vos
              ambitions.
            </p>
            <div className="pt-1 flex gap-2">
              <Button>
                Decouvrir nos Services <ArrowRight />{" "}
              </Button>
              <Button
                variant="primary-outline"
                className="border-border bg-white shadow-card hover:bg-white"
              >
                <Calendar />
                Prendre rendez-vous
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-4/5 w-full max-w-lg lg:mx-0 lg:aspect-auto lg:h-[min(680px,calc(100svh-8rem))] lg:max-w-none">
              <Image
                src="/traveler.png"
                alt="Voyageur Horizon Mobility avec passport devant Paris"
                fill
                priority
                className="object-contain object-center"
              />
            </div>

            <div className="absolute right-0 bottom-4 left-4 rounded-[1.25rem] border border-border bg-white p-4 shadow-card sm:right-4 sm:left-auto sm:max-w-xs">
              <div className="mb-2 flex size-9 items-center justify-center rounded-full border border-border text-primary">
                <Users className="size-4" strokeWidth={1.5} />
              </div>
              <p className="mb-3 text-sm leading-snug text-secondary-foreground">
                Des milliers de clients accompagnés avec succès à travers le
                monde.
              </p>
              <div className="flex items-center gap-3">
                <AvatarGroup>
                  {clientAvatars.map((client) => (
                    <Avatar key={client.src} size="lg">
                      <AvatarImage src={client.src} alt={client.alt} />
                      <AvatarFallback>{client.fallback}</AvatarFallback>
                    </Avatar>
                  ))}
                </AvatarGroup>
                <span className="text-sm font-semibold text-primary">
                  +2.5k
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
