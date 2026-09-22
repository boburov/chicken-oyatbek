import { EXPORT_COUNTRIES, sectionIndex } from "../data/content";
import { ExportFlow } from "./ui/ExportFlow";
import { RevealGroup } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

/** Export destinations: the farm's region → arrow → six countries. */
export function ExportGeography() {
  return (
    <section id="eksport" aria-labelledby="eksport-title" className="wrap scroll-mt-20 pt-16 lg:pt-24">
      <SectionHeading
        id="eksport-title"
        index={sectionIndex("eksport")}
        title="Eksport geografiyasi"
        aside={`${EXPORT_COUNTRIES.length} ta davlat`}
      />
      <RevealGroup interval={0.07} className="glass rounded-[1.75rem] p-4 sm:p-6 lg:p-8">
        <ExportFlow />
      </RevealGroup>
    </section>
  );
}
