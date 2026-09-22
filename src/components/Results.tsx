import { sectionIndex } from "../data/content";
import { IMPACTS } from "../data/results";
import { ImpactCard } from "./ui/ImpactCard";
import { OutputTiles } from "./ui/OutputTiles";
import { RevealGroup } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

/** The yearly chick output and exports, then the indicators, each today (“Hozir”) → after the project (“Loyihadan keyin”). */
export function Results() {
  return (
    <section id="natijalar" aria-labelledby="natijalar-title" className="wrap scroll-mt-20 pt-16 lg:pt-24">
      <SectionHeading id="natijalar-title" index={sectionIndex("natijalar")} title="Erishiladigan natijalar" />

      <RevealGroup interval={0.1} className="grid gap-3 sm:gap-4 lg:grid-cols-2">
        <div className="lg:col-span-2">
          <OutputTiles />
        </div>
        {IMPACTS.map((impact) => (
          <ImpactCard key={impact.label} {...impact} />
        ))}
      </RevealGroup>
    </section>
  );
}
