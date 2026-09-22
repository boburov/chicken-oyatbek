import { motion } from "framer-motion";
import { ImpactCard } from "../components/ui/ImpactCard";
import { RevealGroup } from "../components/ui/Reveal";
import { EXPORT_COUNTRIES } from "../data/content";
import { IMPACTS } from "../data/results";
import { fadeUp } from "../lib/motion";

const START = 2.1;

/** Where the day-old chicks are exported: six flags in a compact 3 × 2 grid. */
function ExportCard() {
  return (
    <motion.section
      variants={fadeUp}
      aria-label="Eksport geografiyasi"
      className="glass flex min-w-0 flex-col gap-2 rounded-[1.25rem] px-3.5 py-3"
    >
      <h3 className="text-[0.625rem] font-extrabold tracking-[0.14em] text-accent uppercase">Eksport geografiyasi</h3>
      <ul className="grid min-h-0 flex-1 grid-cols-3 content-center gap-x-2 gap-y-2">
        {EXPORT_COUNTRIES.map((country) => (
          <li key={country.name} className="flex min-w-0 flex-col items-center gap-1 text-center">
            <img
              src={country.flag}
              alt={`${country.name} bayrog‘i`}
              width={40}
              height={30}
              decoding="async"
              className="aspect-[4/3] w-8 rounded-[4px] object-cover shadow-sm ring-1 ring-navy/10"
            />
            <span className="max-w-full truncate text-[0.5625rem] leading-tight font-bold text-navy/85">{country.name}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

/** "Erishiladigan natijalar": four indicators, each today → after the project, then export flags. */
export function PosterResults() {
  return (
    <RevealGroup eager interval={0.08} timing={{ notBefore: START }} aria-labelledby="poster-results">
      <motion.h2
        variants={fadeUp}
        id="poster-results"
        className="flex items-center gap-2.5 text-[0.9375rem] font-extrabold tracking-[0.08em] text-navy uppercase"
      >
        <span aria-hidden className="bg-grad h-[0.1875rem] w-6 rounded-full" />
        Erishiladigan natijalar
      </motion.h2>

      <div className="mt-2 grid h-[9rem] grid-cols-[repeat(4,minmax(0,1fr))_minmax(0,0.8fr)] items-stretch gap-2.5">
        {IMPACTS.map((impact) => (
          <ImpactCard key={impact.label} {...impact} poster startAfter={START + 0.3} />
        ))}
        <ExportCard />
      </div>
    </RevealGroup>
  );
}
