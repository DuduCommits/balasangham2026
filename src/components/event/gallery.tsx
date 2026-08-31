import g1 from "@/assets/gallery-1.webp";
import g2 from "@/assets/gallery-2.webp";
import g3 from "@/assets/gallery-3.webp";
import g4 from "@/assets/gallery-4.webp";
import g5 from "@/assets/gallery-5.webp";
import g6 from "@/assets/gallery-6.webp";
import { useReveal } from "@/hooks/use-reveal";
import { Grain, DotRow, Star } from "./decor";

/** Swap these entries to change the gallery images. */
const IMAGES = [
  {
    src: g1,
    alt: "വേദിയിൽ കലാപരിപാടി അവതരിപ്പിക്കുന്ന കുട്ടികൾ",
    caption: "കൊടികൾ",
    w: 900,
    h: 1200,
  },
  {
    src: g2,
    alt: "ഒരുമിച്ച് വലിയ ചുവർചിത്രം വരയ്ക്കുന്ന കുട്ടികൾ",
    caption: "നിറങ്ങൾ",
    w: 1200,
    h: 900,
  },
  {
    src: g3,
    alt: "കൊടികളുമായി ആഹ്ലാദ പ്രകടനത്തിൽ പങ്കെടുക്കുന്ന കുട്ടികൾ",
    caption: "നാടിന്റെ താളം",
    w: 1000,
    h: 1000,
  },
  {
    src: g4,
    alt: "മരത്തണലിൽ ഒരുമിച്ച് പുസ്തകം വായിക്കുന്ന കുട്ടികൾ",
    caption: "കളിയുടെ മുറ്റം",
    w: 900,
    h: 1100,
  },
  {
    src: g5,
    alt: "അലങ്കരിച്ച വേദിയിൽ ഗാനമാലപിക്കുന്ന കുട്ടികൾ",
    caption: "പാട്ടിന്റെ താളം",
    w: 1200,
    h: 800,
  },
  {
    src: g6,
    alt: "നാട്ടുമുറ്റത്ത് കളിക്കുന്ന കുട്ടികൾ",
    caption: "കൂട്ടുകാർ",
    w: 1000,
    h: 1200,
  },
];

export function Gallery() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section id="ormakal" className="relative overflow-hidden bg-cream py-16 sm:py-24">
      <Grain />
      <span aria-hidden className="dotgrid absolute right-8 top-12 block h-36 w-36 text-berry/20" />

      <div
        ref={reveal.ref}
        className={`${reveal.className} relative mx-auto max-w-6xl px-5 sm:px-6`}
      >
        <div className="flex flex-col items-center text-center">
          <DotRow />
          <h2 className="type-display mt-3 text-[clamp(2rem,7.5vw,3.8rem)] text-berry text-poster-shadow">
            ഗാലറി
          </h2>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink/75">
            ബാലസംഘത്തിന്റെ ഓർമ്മച്ചിത്രങ്ങൾ
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {IMAGES.map((img) => (
            <li
              key={img.caption}
              className="group relative overflow-hidden rounded-2xl bg-sun ring-poster transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
              </div>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-4">
                <Star className="h-4 w-4 shrink-0 text-mango" />
                <span className="font-display text-lg font-bold text-cream">{img.caption}</span>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
