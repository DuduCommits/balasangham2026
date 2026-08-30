import introChildren from "@/assets/intro-children.webp";
import { useReveal } from "@/hooks/use-reveal";
import { usePointerTilt } from "@/hooks/use-parallax";
import { Star, Spiral, Flower, Grain, DotRow } from "./decor";

const FRAGMENTS = [
  { text: "സൗഹൃദം", className: "-left-2 top-6 -rotate-6 text-berry" },
  { text: "ഒരുമ", className: "right-0 top-16 rotate-6 text-grape" },
  { text: "സർഗാത്മകത", className: "left-2 bottom-10 -rotate-3 text-sky" },
  { text: "സ്വപ്നങ്ങൾ", className: "right-2 bottom-24 rotate-3 text-leaf" },
];

export function Intro() {
  const reveal = useReveal<HTMLDivElement>();
  const tilt = usePointerTilt();

  return (
    <section id="aamukham" className="relative overflow-hidden bg-cream py-16 sm:py-24">
      <Grain />
      <span
        aria-hidden
        className="absolute -left-32 top-10 block h-72 w-72 rounded-full bg-sun/70"
      />
      <span aria-hidden className="dotgrid absolute right-6 top-10 block h-40 w-40 text-mango/40" />

      <div
        ref={reveal.ref}
        className={`${reveal.className} relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8`}
      >
        <div className="relative">
          <DotRow />
          <h2 className="mt-4">
            <span className="type-display-tight block text-[clamp(2.4rem,9vw,4.6rem)] text-berry text-poster-shadow">
              സ്നേഹപൂർവ്വം
            </span>
            <span className="type-display-tight block text-[clamp(2.4rem,9vw,4.6rem)] text-grape lg:ml-[0.4em]">
              സ്വാഗതം
            </span>
          </h2>
          <span aria-hidden className="mt-4 block h-2.5 w-32 rounded-full bg-mango" />

          <div className="mt-7 max-w-xl space-y-5 text-lg leading-[1.95] text-ink/80 sm:text-xl">
            <p className="border-l-4 border-berry/50 pl-5 font-medium text-ink">
              ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം കുട്ടികളുടെ സൗഹൃദവും സർഗാത്മകതയും ഒരുമയും ആഘോഷിക്കുന്ന
              ഒരു സംഗമമാണ്.
            </p>
            <p>
              പാട്ടും കളിയും കലയും ചിരിയും നിറഞ്ഞ ഒരു ദിവസം. ഓരോ കുട്ടിയുടെയും സ്വപ്നങ്ങൾക്ക് ഇടം
              നൽകുന്ന വേദി.
            </p>
            <p>നാടിന്റെ നാളെയെ സ്വപ്നം കാണുന്ന കൂട്ടുകാർക്കൊപ്പം നിങ്ങളും ചേരൂ.</p>
          </div>
        </div>

        <div className="relative">
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 block h-[86%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[52%_48%_44%_56%] bg-festival"
            style={{ transform: `translate(-50%,-50%) rotate(${tilt.x * 3}deg)` }}
          />
          <span
            aria-hidden
            className="spin-slow absolute -right-6 top-2 -z-10 block h-32 w-32 rounded-full border-8 border-dashed border-berry/25"
          />
          <Spiral className="float-slow absolute -left-3 bottom-8 h-14 w-14 text-grape/50" />
          <Flower className="float-fast absolute right-6 top-2 h-8 w-8 text-berry/70" />
          <Star className="float-slow absolute left-8 top-0 h-7 w-7 text-mango" />

          {FRAGMENTS.map((f) => (
            <span
              key={f.text}
              aria-hidden
              className={`absolute z-10 rounded-full bg-cream/90 px-3.5 py-1.5 font-display text-sm font-bold shadow-sm backdrop-blur-sm sm:text-base ${f.className}`}
            >
              {f.text}
            </span>
          ))}

          <img
            src={introChildren}
            alt="കൈകോർത്ത് ചിരിച്ചു ചാടുന്ന മൂന്ന് കുട്ടികൾ"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="float-slow mx-auto w-full max-w-lg drop-shadow-[0_24px_36px_rgba(60,30,0,0.18)]"
            style={{ transform: `translate3d(${tilt.x * 6}px, ${tilt.y * 5}px, 0)` }}
          />
        </div>
      </div>
    </section>
  );
}
