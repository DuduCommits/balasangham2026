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
    caption: "വേദിയിലെ വിസ്മയം",
    w: 900,
    h: 1200,
    span: "sm:col-span-3 sm:row-span-2",
    tilt: "-1.2deg",
  },
  {
    src: g2,
    alt: "ഒരുമിച്ച് വലിയ ചുവർചിത്രം വരയ്ക്കുന്ന കുട്ടികൾ",
    caption: "നിറങ്ങളുടെ ലോകം",
    w: 1200,
    h: 900,
    span: "sm:col-span-3",
    tilt: "1deg",
  },
  {
    src: g3,
    alt: "കൊടികളുമായി ആഹ്ലാദ പ്രകടനത്തിൽ പങ്കെടുക്കുന്ന കുട്ടികൾ",
    caption: "ഒരുമയുടെ കൊടികൾ",
    w: 1000,
    h: 1000,
    span: "sm:col-span-3",
    tilt: "-0.8deg",
  },
  {
    src: g4,
    alt: "മരത്തണലിൽ ഒരുമിച്ച് പുസ്തകം വായിക്കുന്ന കുട്ടികൾ",
    caption: "വായനയുടെ തണൽ",
    w: 900,
    h: 1100,
    span: "sm:col-span-2",
    tilt: "1.4deg",
  },
  {
    src: g5,
    alt: "അലങ്കരിച്ച വേദിയിൽ ഗാനമാലപിക്കുന്ന കുട്ടികൾ",
    caption: "പാട്ടിന്റെ താളം",
    w: 1200,
    h: 800,
    span: "sm:col-span-2",
    tilt: "-1deg",
  },
  {
    src: g6,
    alt: "നാട്ടുമുറ്റത്ത് കളിക്കുന്ന കുട്ടികൾ",
    caption: "കളിയുടെ മുറ്റം",
    w: 1000,
    h: 1200,
    span: "sm:col-span-2",
    tilt: "0.9deg",
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
            ഓർമ്മകളിലേക്ക്
          </h2>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink/75">
            കഴിഞ്ഞ സംഗമങ്ങളിലെ ചിരികളും നിറങ്ങളും
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 sm:grid-cols-6">
          {IMAGES.map((img) => (
            <li
              key={img.caption}
              className={`group relative overflow-hidden rounded-2xl bg-sun ring-poster transition-transform duration-500 hover:rotate-0 hover:-translate-y-1.5 ${img.span}`}
              style={{ transform: `rotate(${img.tilt})` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 640px) 33vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-80"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-4">
                <Star className="h-4 w-4 shrink-0 text-mango" />
                <span className="font-display text-lg font-bold text-cream">{img.caption}</span>
              </figcaption>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center font-ui text-sm text-ink/50">
          ചിത്രങ്ങൾ പിന്നീട് യഥാർത്ഥ സമ്മേളന ചിത്രങ്ങൾ കൊണ്ട് മാറ്റാവുന്നതാണ്
        </p>
      </div>
    </section>
  );
}
