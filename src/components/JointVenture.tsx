import { motion } from "framer-motion";
import { Bird } from "lucide-react";
import { COMPANY_NAME, PARENT_STOCK, PARTNER_NAME, sectionIndex } from "../data/content";
import { fadeUp } from "../lib/motion";
import { cn } from "../lib/cn";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { JointFlow } from "./ui/JointFlow";
import { RevealGroup } from "./ui/Reveal";

/**
 * 60 / 40 ownership split plus the official profile of the joint enterprise.
 * `standalone` is the roomier layout used when the block fills a slide of its own.
 */
export function JointVenture({ standalone = false }: { standalone?: boolean }) {
  return (
    <RevealGroup
      interval={0.12}
      className={cn(
        "grid gap-6",
        standalone
          ? "grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] gap-6"
          : "lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)] lg:gap-7",
      )}
    >
      <motion.div
        variants={fadeUp}
        className={cn(
          "flex flex-col justify-center",
          standalone ? "rounded-[1.75rem] border-[1.5px] border-dashed border-navy/35 p-12" : "lg:pr-2",
        )}
      >
        {!standalone && (
          <div className="flex items-baseline gap-3">
            <span aria-hidden className="text-xs font-extrabold tracking-[0.2em] text-accent">
              {sectionIndex("hamkor")}
            </span>
            <h3 className="text-base font-extrabold tracking-[0.12em] text-navy uppercase sm:text-lg">
              Xitoy bilan qo‘shma korxona
            </h3>
          </div>
        )}

        <JointFlow large className={standalone ? "mt-2" : "mt-5"} />
      </motion.div>

      <motion.article
        variants={fadeUp}
        className={cn("glass flex flex-col rounded-3xl", standalone ? "p-10" : "p-6 sm:p-7")}
      >
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "bg-grad flex shrink-0 items-center justify-center rounded-2xl text-white",
              standalone ? "size-16" : "size-14",
            )}
          >
            <Bird aria-hidden className={standalone ? "size-8" : "size-7"} strokeWidth={1.6} />
          </div>
          <div className="min-w-0">
            <h3
              className={cn(
                "leading-tight font-extrabold tracking-[0.06em] text-navy uppercase",
                standalone ? "text-xl" : "text-base",
              )}
            >
              {COMPANY_NAME}
            </h3>
            <p className="mt-1.5 text-[0.6875rem] font-bold tracking-[0.2em] text-muted uppercase">
              Xususiy korxona
            </p>
          </div>
        </div>

        {standalone && (
          <dl className="mt-8 mb-10 border-t border-navy/10 pt-6">
            <dt className="text-xs font-bold tracking-[0.14em] text-navy uppercase">Loyiha hamkori</dt>
            <dd className="mt-2 text-base leading-relaxed font-semibold text-ink">“{PARTNER_NAME}”</dd>
          </dl>
        )}

        <dl
          className={cn(
            "flex items-end justify-between gap-4 border-t border-navy/10",
            standalone ? "mt-auto pt-7" : "mt-6 pt-5",
          )}
        >
          <dt className="pb-1 text-xs font-bold tracking-[0.14em] text-navy uppercase">OTA-ONA AVLODI</dt>
          <dd className="text-right">
            <AnimatedCounter
              value={PARENT_STOCK.value}
              className={cn(
                "text-grad leading-none font-extrabold tracking-[-0.04em]",
                standalone ? "text-7xl" : "text-5xl",
              )}
            />
            <span
              className={cn(
                "mt-1.5 block font-bold tracking-[0.16em] text-navy uppercase",
                standalone ? "text-xs" : "text-[0.6875rem]",
              )}
            >
              {PARENT_STOCK.unit}
            </span>
          </dd>
        </dl>
      </motion.article>
    </RevealGroup>
  );
}
