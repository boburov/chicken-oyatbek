import broiler800 from "../assets/gallery/broiler-house-800.webp";
import broiler1400 from "../assets/gallery/broiler-house-1400.webp";
import broilerJpg from "../assets/gallery/broiler-house-1400.jpg";
import chicks800 from "../assets/gallery/chicks-800.webp";
import chicks1400 from "../assets/gallery/chicks-1400.webp";
import chicksJpg from "../assets/gallery/chicks-1400.jpg";
import facility800 from "../assets/gallery/facility-800.webp";
import facility1400 from "../assets/gallery/facility-1400.webp";
import facilityJpg from "../assets/gallery/facility-1400.jpg";
import incubatorWebp from "../assets/gallery/incubator-hall.webp";
import incubatorJpg from "../assets/gallery/incubator-hall.jpg";
import type { GalleryImage } from "../components/ui/ImageCard";

/** The four photographs shared by the scrolling page and the poster. */
export const GALLERY: GalleryImage[] = [
  {
    src: broilerJpg,
    webpSrcSet: `${broiler800} 800w, ${broiler1400} 1400w`,
    alt: "Parrandachilik majmuasidagi broyler parrandaxonasi: oziqlantirish va sug‘orish liniyalari orasida oq tovuqlar",
    label: "Parrandachilik majmuasi",
  },
  {
    src: facilityJpg,
    webpSrcSet: `${facility800} 800w, ${facility1400} 1400w`,
    alt: "Zamonaviy parrandaxona ichida boqilayotgan tovuqlar",
    label: "Zamonaviy parrandaxona",
  },
  {
    src: incubatorJpg,
    webpSrcSet: `${incubatorWebp} 550w`,
    alt: "Inkubatsiya sexi: ikki tomonida inkubator shkaflari joylashgan yorug‘ yo‘lak",
    label: "Inkubatsiya sexi",
  },
  {
    src: chicksJpg,
    webpSrcSet: `${chicks800} 800w, ${chicks1400} 1400w`,
    alt: "Inkubatordan chiqqan bir kunlik jo‘jalar",
    label: "Bir kunlik jo‘jalar",
  },
];
