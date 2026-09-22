import { motion } from "framer-motion";
import uzFlag from "../../assets/flags/uz.svg";
import { EXPORT_COUNTRIES, LOCATION } from "../../data/content";
import { fadeUp } from "../../lib/motion";
import { cn } from "../../lib/cn";
import { FlowArrow } from "./FlowArrow";

/** Where exports go: the farm's region on the left, an arrow, then the destination countries. */
export function ExportFlow({ poster = false }: { poster?: boolean }) {
  return (
    <div className={cn("flex", poster ? "items-center gap-2" : "flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-4")}>
      <motion.div
        variants={fadeUp}
        className={cn("glass flex shrink-0 items-center rounded-2xl", poster ? "max-w-[9rem] flex-col gap-1.5 px-3 py-2.5 text-center" : "gap-3 px-4 py-3")}
      >
        <img
          src={uzFlag}
          alt="O‘zbekiston bayrog‘i"
          width={36}
          height={27}
          decoding="async"
          className={cn("rounded-[4px] object-cover shadow-sm ring-1 ring-navy/10", poster ? "h-6 w-8" : "h-8 w-11")}
        />
        <span className={cn("leading-tight font-bold text-navy", poster ? "text-[0.625rem]" : "text-xs")}>
          <span className="block text-muted">Eksport</span>
          {LOCATION.region}
        </span>
      </motion.div>

      <FlowArrow direction={poster ? "right" : "responsive"} className={poster ? "[&_svg]:w-8" : "py-1 sm:py-0"} />

      <ul className={cn("grid min-w-0 flex-1", poster ? "grid-cols-2 gap-1.5" : "grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3")}>
        {EXPORT_COUNTRIES.map((country) => (
          <motion.li
            key={country.name}
            variants={fadeUp}
            className={cn(
              "glass group flex flex-col items-center rounded-xl text-center transition-[translate,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-glow",
              poster ? "flex-row gap-2 px-2.5 py-1.5 text-left" : "px-2 py-3 sm:py-4",
            )}
          >
            <img
              src={country.flag}
              alt={`${country.name} bayrog‘i`}
              width={48}
              height={36}
              loading={poster ? "eager" : "lazy"}
              decoding="async"
              className={cn(
                "aspect-[4/3] rounded-[4px] object-cover shadow-sm ring-1 ring-navy/10 transition-[scale] duration-500 ease-out-expo group-hover:scale-110",
                poster ? "w-7 shrink-0" : "w-12 sm:w-14",
              )}
            />
            <span className={cn("leading-tight font-bold text-navy/85", poster ? "text-[0.6875rem]" : "mt-1.5 text-xs")}>
              {country.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
