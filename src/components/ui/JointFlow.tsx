import { useId } from "react";
import { motion, type Variants } from "framer-motion";
import cnFlag from "../../assets/flags/cn.svg";
import uzFlag from "../../assets/flags/uz.svg";
import { JOINT_VENTURE } from "../../data/content";
import { EASE_OUT, fadeUp } from "../../lib/motion";
import { cn } from "../../lib/cn";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: EASE_OUT } },
};

const grow: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1.1, ease: EASE_OUT, delay: 0.3 } },
};

type Side = { share: number; label: string; flag: string; flagAlt: string; tone: "blue" | "violet" };

function SideChip({ share, label, flag, flagAlt, tone, large }: Side & { large?: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn("glass flex items-center rounded-2xl", large ? "gap-3 px-4 py-3" : "gap-2.5 px-3 py-2")}
    >
      <img
        src={flag}
        alt={flagAlt}
        width={36}
        height={27}
        decoding="async"
        className={cn("shrink-0 rounded-[4px] object-cover shadow-sm ring-1 ring-navy/10", large ? "h-8 w-11" : "h-6 w-8")}
      />
      <span className="min-w-0">
        <span
          className={cn(
            "block leading-none font-extrabold tracking-tight",
            large ? "text-3xl" : "text-[1.375rem]",
            tone === "blue" ? "text-accent" : "text-violet",
          )}
        >
          {share}%
        </span>
        <span className={cn("mt-1 block leading-tight font-bold text-muted", large ? "text-xs" : "text-[0.625rem]")}>
          {label}
        </span>
      </span>
    </motion.div>
  );
}

/**
 * Ownership as a diagram: the Uzbek and Chinese sides, each with its share,
 * flow down into the joint enterprise, whose bar shows the same 60 / 40 split.
 */
export function JointFlow({ large = false, className }: { large?: boolean; className?: string }) {
  const { uzbekistan, china } = JOINT_VENTURE;
  const uid = useId().replace(/[^a-zA-Z0-9-]/g, "");
  const blueId = `jv-blue-${uid}`;
  const violetId = `jv-violet-${uid}`;

  return (
    <div
      aria-label={`Qo‘shma korxona: ${uzbekistan.share} foiz ${uzbekistan.label}, ${china.share} foiz ${china.label}`}
      className={cn("flex flex-col", className)}
    >
      <div className="grid grid-cols-2 gap-3">
        <SideChip {...uzbekistan} flag={uzFlag} flagAlt="O‘zbekiston bayrog‘i" tone="blue" large={large} />
        <SideChip {...china} flag={cnFlag} flagAlt="Xitoy bayrog‘i" tone="violet" large={large} />
      </div>

      {/* converging arrows */}
      <svg aria-hidden viewBox="0 0 200 40" preserveAspectRatio="none" className={cn("w-full", large ? "h-12" : "h-9")} fill="none">
        <defs>
          <linearGradient id={blueId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="var(--color-accent)" />
            <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id={violetId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="var(--color-violet)" />
            <stop offset="1" stopColor="var(--color-violet)" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <motion.path variants={draw} d="M50 0 V12 Q50 20 60 20 H92 Q100 20 100 28 V38" stroke={`url(#${blueId})`} strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <motion.path variants={draw} d="M150 0 V12 Q150 20 140 20 H108 Q100 20 100 28 V38" stroke={`url(#${violetId})`} strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>

      <motion.div variants={fadeUp} className={cn("relative rounded-2xl bg-grad text-white shadow-glow", large ? "p-5" : "px-4 py-3")}>
        {/* arrowhead where the two flows meet */}
        <span aria-hidden className="absolute -top-2 left-1/2 -translate-x-1/2 border-x-[7px] border-t-[9px] border-x-transparent border-t-violet" />
        <p className={cn("font-extrabold tracking-[0.1em] uppercase", large ? "text-sm" : "text-[0.6875rem]")}>
          Xitoy bilan qo‘shma korxona
        </p>
        <div className={cn("flex gap-1 overflow-hidden rounded-full bg-white/20", large ? "mt-3 h-3" : "mt-2 h-2.5")}>
          <motion.span variants={grow} style={{ flexGrow: uzbekistan.share }} className="origin-left basis-0 rounded-full bg-white" />
          <motion.span variants={grow} style={{ flexGrow: china.share }} className="origin-left basis-0 rounded-full bg-violet-soft" />
        </div>
        <p className={cn("mt-1.5 flex justify-between font-bold text-white/85", large ? "text-xs" : "text-[0.625rem]")}>
          <span>{uzbekistan.share}% · O‘zbekiston</span>
          <span>{china.share}% · Xitoy</span>
        </p>
      </motion.div>
    </div>
  );
}
