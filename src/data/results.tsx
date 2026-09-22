import { Drumstick, Egg, TrendingUp, UsersRound, type LucideIcon } from "lucide-react";

export type Impact = {
  Icon: LucideIcon;
  label: string;
  note?: string;
  /** Today's figure, shown as plain text. */
  before: { value: string; unit: string };
  /** The figure once the project runs; counted up on screen. */
  after: { value: number; decimals?: number; unit: string };
};

/** "Erishiladigan natijalar": each indicator today → after the project. */
export const IMPACTS: Impact[] = [
  {
    Icon: Drumstick,
    label: "Tovuq go‘shti",
    before: { value: "10", unit: "ming tonna" },
    after: { value: 60, unit: "ming tonna" },
  },
  {
    Icon: Egg,
    label: "Tuxum",
    note: "yillik",
    before: { value: "90", unit: "mln dona" },
    after: { value: 418, unit: "mln dona" },
  },
  {
    Icon: TrendingUp,
    label: "Aylanma",
    note: "o‘rtacha yillik",
    before: { value: "300", unit: "mlrd so‘m" },
    after: { value: 1.4, decimals: 1, unit: "trln so‘m" },
  },
  {
    Icon: UsersRound,
    label: "Ish o‘rinlari",
    before: { value: "305", unit: "nafar" },
    after: { value: 705, unit: "nafar" },
  },
];
