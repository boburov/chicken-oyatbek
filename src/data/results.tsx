import { TrendingUp, type LucideIcon } from "lucide-react";

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
    Icon: TrendingUp,
    label: "Aylanma",
    note: "o‘rtacha yillik",
    before: { value: "70", unit: "mlrd so‘m" },
    after: { value: 750, unit: "mlrd so‘m" },
  },
];
