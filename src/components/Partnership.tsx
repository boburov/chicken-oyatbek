import { motion } from "framer-motion";
import { PARTNER_NAME } from "../data/content";
import { fadeUp } from "../lib/motion";
import { RevealGroup } from "./ui/Reveal";

/** Centre column of the slide: who the project partner is. Ownership is shown in the joint-venture diagram. */
export function Partnership() {
  return (
    <RevealGroup interval={0.14} timing={{ notBefore: 1.25 }} className="flex h-full items-center">
      <motion.article variants={fadeUp} className="glass w-full rounded-3xl px-6 py-7 text-center">
        <h3 className="text-lg font-extrabold tracking-[0.14em] text-navy uppercase">Loyiha hamkori</h3>
        <span aria-hidden className="bg-grad mx-auto mt-3 block h-[3px] w-10 rounded-full" />
        <p className="mt-4 text-[0.9375rem] leading-relaxed font-semibold text-balance text-ink">
          “{PARTNER_NAME}”
          <span className="mt-1 block text-xs font-bold tracking-[0.16em] text-muted uppercase">kompaniyasi</span>
        </p>
      </motion.article>
    </RevealGroup>
  );
}
