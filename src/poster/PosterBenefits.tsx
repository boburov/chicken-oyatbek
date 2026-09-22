import { motion } from "framer-motion";
import { BreedingFlow } from "../components/ui/BreedingFlow";
import { RevealGroup } from "../components/ui/Reveal";
import { BREED } from "../data/content";
import { fadeUp } from "../lib/motion";

const START = 1.75;

/** Full-width glass card: the breeding chain as arrows, ending in the yearly chick capacity. */
export function PosterBenefits() {
  return (
    <RevealGroup
      eager
      interval={0.12}
      timing={{ notBefore: START }}
      aria-label="Loyiha afzalligi"
      className="glass flex flex-col gap-2.5 rounded-[1.5rem] px-6 py-3.5"
    >
      <motion.h2 variants={fadeUp} className="flex items-center gap-2.5 text-xs font-extrabold tracking-[0.14em] text-navy uppercase">
        <span aria-hidden className="bg-grad h-[0.1875rem] w-6 rounded-full" />
        Loyiha afzalligi
        <span className="font-bold tracking-normal text-muted normal-case">· {BREED} zoti naslchilik zanjiri</span>
      </motion.h2>
      <BreedingFlow poster />
    </RevealGroup>
  );
}
