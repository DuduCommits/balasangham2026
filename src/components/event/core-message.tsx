import { useReveal } from "@/hooks/use-reveal";
import { useScrollOffset } from "@/hooks/use-parallax";
import { Wings, PaperPlane, Star, Grain, CurveDivider } from "./decor";

const PILLARS = [
  { title: "സൗഹൃദം", text: "കൈകോർത്ത് വളരുന്ന കൂട്ടുകാർ" },
  { title: "സമത്വം", text: "എല്ലാ കുട്ടികൾക്കും ഒരേ ഇടം" },
  { title: "സമാധാനം", text: "സ്നേഹത്തിന്റെ ഭാഷ മാത്രം" },
  { title: "സർഗാത്മകത", text: "പാട്ടും ചിത്രവും കഥയും" },
  { title: "പഠനം", text: "അറിവിന്റെ പുതിയ വഴികൾ" },
  { title: "സ്വപ്നങ്ങൾ", text: "ചിറകുവിരിക്കുന്ന നാളെ" },
];

export function CoreMessage() {
  const reveal = useReveal<HTMLDivElement>();
  const scroll = useScrollOffset();

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(160deg, var(--festival) 0%, var(--festival-deep) 55%, var(--mango) 100%)",
      }}
    >
      <Grain />
      <Wings className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[150%] max-w-none -translate-x-1/2 -translate-y-1/2 text-cream/50" />
      <PaperPlane className="drift-slow pointer-events-none absolute right-[12%] top-16 h-12 w-12 text-cream" />
      <Star className="float-slow pointer-events-none absolute left-[8%] bottom-16 h-10 w-10 text-berry/60" />

      <div
        ref={reveal.ref}
        className={`${reveal.className} relative mx-auto max-w-6xl px-5 sm:px-6`}
      >
        <h2 className="relative" style={{ transform: `translateY(${scroll * -0.012}px)` }}>
          <span className="type-display-tight block text-[clamp(2.1rem,10vw,7rem)] text-berry text-poster-shadow">
            കുട്ടികളുടെ
          </span>
          <span className="type-display-tight block text-[clamp(1.9rem,9vw,6.4rem)] text-berry-foreground text-sticker sm:ml-[0.3em]">
            സ്വപ്നങ്ങൾക്ക്
          </span>
          <span className="type-display-tight block text-[clamp(2.1rem,10vw,7rem)] text-grape text-poster-shadow sm:ml-[0.9em]">
            ചിറകേകാം
          </span>
        </h2>

        <ul className="mt-16 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <li
              key={p.title}
              className="group border-l-[5px] border-berry/60 pl-5 transition-all duration-300 hover:border-grape hover:pl-6"
            >
              <h3 className="type-display text-2xl text-berry sm:text-[1.7rem]">{p.title}</h3>
              <p className="mt-1 text-lg leading-relaxed text-ink/75">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <CurveDivider color="var(--sky)" />
    </section>
  );
}
