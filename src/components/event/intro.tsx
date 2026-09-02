import introChildren from "@/assets/intro-children.webp";
import { useReveal } from "@/hooks/use-reveal";
import { usePointerTilt } from "@/hooks/use-parallax";
import { Star, Spiral, Flower, Grain, DotRow } from "./decor";
import balasanghamOfficialFlag from "@/assets/balasangham-official-flag.png";

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
            <span className="type-display-tight block text-[clamp(2.6rem,10vw,5.2rem)] text-berry text-poster-shadow">
              സ്വാഗതം
            </span>
          </h2>
          <span aria-hidden className="mt-4 block h-2.5 w-32 rounded-full bg-mango" />

          <div className="mt-7 max-w-xl space-y-5 text-lg leading-[1.95] text-ink/80 sm:text-[1.15rem]">
            <p className="border-l-4 border-berry/50 pl-5 font-medium text-ink">
              കുട്ടികളുടെ സൗഹൃദവും സർഗാത്മകതയും ഒരുമയും ആഘോഷിക്കുന്ന വേദി
            </p>
            <p>
              പാട്ടും കളിയും കലയും ചിരിയും നിറഞ്ഞൊരു മനോഹര ദിനം. ഓരോ കുട്ടിയുടെയും സ്വപ്നങ്ങൾക്കും ചിന്തകൾക്കും സർഗാത്മകതയ്ക്കും ഇടം നൽകുന്ന, സൗഹൃദത്തിന്റെയും കൂട്ടായ്മയുടെയും ആഘോഷമാണ് ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം.
            </p>
            <p>
              നാടിന്റെ നാളെയെ സ്വപ്നം കാണുന്ന കൂട്ടുകാർ ഒരുമിക്കുന്ന ഈ വേദിയിൽ, പുതിയ ആശയങ്ങളും പുതിയ സൗഹൃദങ്ങളും പുതിയ സ്വപ്നങ്ങളും പിറക്കട്ടെ.
            </p>
            <p className="font-medium text-berry">
              നമുക്കൊരുമിച്ച് സ്വപ്നം കാണാം…
              <br />
              നമുക്കൊരുമിച്ച് മുന്നേറാം…
              <br />
              നാടിന്റെ നാളെയെ സ്വപ്നം കാണുന്ന കൂട്ടുകാർക്കൊപ്പം നിങ്ങളും ചേരൂ..
            </p>
          </div>

          <div className="mt-12 max-w-xl rounded-2xl border-2 border-dashed border-berry/30 bg-white/50 p-6 text-center shadow-sm backdrop-blur-md sm:p-8">
            <p className="font-ui text-xs font-bold uppercase tracking-widest text-berry sm:text-sm">
              മുദ്രാവാക്യം
            </p>
            <p className="mt-3 font-display text-lg font-bold italic leading-relaxed text-ink/90 sm:text-xl">
              പഠിച്ചു ഞങ്ങൾ നല്ലവരാകും,<br />
              ജയിച്ചു ഞങ്ങൾ മുന്നേറും,<br />
              പടുത്തുയർത്തും ഭാരത മണ്ണിൽ,<br />
              സമത്വ സുന്ദരനവലോകം.
            </p>
            <img src={balasanghamOfficialFlag} alt="" aria-hidden className="mx-auto mt-6 h-28 w-auto drop-shadow-md object-contain sm:h-32" />
          </div>
        </div>

        <div className="relative">
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 block h-[86%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[52%_48%_44%_56%] bg-festival"
            style={{ transform: `rotate(${tilt.x * 3}deg)` }}
          />
          <span
            aria-hidden
            className="spin-slow absolute -right-6 top-2 -z-10 block h-32 w-32 rounded-full border-8 border-dashed border-berry/25"
          />
          <Spiral className="float-slow absolute -left-3 bottom-8 h-14 w-14 text-grape/50" />
          <Flower className="float-fast absolute right-6 top-2 h-8 w-8 text-berry/70" />
          <Star className="float-slow absolute left-8 top-0 h-7 w-7 text-mango" />

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
