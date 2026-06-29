import {
  Container,
  Highlight,
  Section,
  SectionTitle,
} from "@/components/landing/container";
import { DestinationsRows } from "@/components/landing/destinations-rows";

export function DestinationsSection() {
  return (
    <Section id="destinations" className="bg-section-alt pt-0">
      <Container className="flex flex-col items-center gap-10 lg:gap-12">
        <SectionTitle className="max-w-2xl text-center">
          Explorez de nouvelles <Highlight>opportunités</Highlight>.
        </SectionTitle>
      </Container>

      <DestinationsRows />
    </Section>
  );
}
