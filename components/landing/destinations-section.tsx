import { ArrowRight } from "lucide-react";

import {
  Container,
  Highlight,
  Section,
  SectionTitle,
} from "@/components/landing/container";
import { DestinationsRows } from "@/components/landing/destinations-rows";
import { Button } from "@/components/ui/button";

export function DestinationsSection() {
  return (
    <Section id="destinations" className="bg-section-alt pt-0">
      <Container className="flex flex-col items-center gap-10 lg:gap-12">
        <SectionTitle className="max-w-2xl text-center">
          Explorez de nouvelles <Highlight>opportunités</Highlight>.
        </SectionTitle>
      </Container>

      <DestinationsRows />

      <Container className="mt-8 flex justify-center lg:mt-10">
        <Button variant="outline" size="lg" className="bg-white shadow-card">
          Voir toutes les destinations
          <ArrowRight className="size-4" />
        </Button>
      </Container>
    </Section>
  );
}
