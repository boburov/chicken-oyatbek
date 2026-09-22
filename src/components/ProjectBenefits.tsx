import { BREED, sectionIndex } from "../data/content";
import { BreedingFlow } from "./ui/BreedingFlow";
import { RevealGroup } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

/** "Loyiha afzalligi": the breeding chain as numbered steps joined by arrows. */
export function ProjectBenefits() {
  return (
    <section id="afzallik" aria-labelledby="afzallik-title" className="wrap scroll-mt-20 pt-16 lg:pt-24">
      <SectionHeading
        id="afzallik-title"
        index={sectionIndex("afzallik")}
        title="Loyiha afzalligi"
        aside={`${BREED} zoti naslchilik zanjiri`}
      />
      <RevealGroup interval={0.12} className="glass rounded-[1.75rem] p-4 sm:p-6 lg:p-8">
        <BreedingFlow />
      </RevealGroup>
    </section>
  );
}
