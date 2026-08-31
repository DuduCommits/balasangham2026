import { Users, Heart, Palette, BookOpen, MessageCircle } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useScrollOffset } from "@/hooks/use-parallax";
import { Wings, PaperPlane, Star, Grain, CurveDivider } from "./decor";

const THEMES = [
  {
    icon: Users,
    title: "സംഘാടനം",
    text: "കുട്ടികൾ ഒരുമിച്ച് പങ്കെടുക്കുന്ന കൂട്ടായ്മ",
    surface: "bg-berry text-berry-foreground",
    tilt: "-1.4deg",
  },
  {
    icon: Heart,
    title: "സൗഹൃദം",
    text: "കൈകോർത്ത് വളരുന്ന കൂട്ടുകാർ",
    surface: "bg-grape text-accent-foreground",
    tilt: "1.2deg",
  },
  {
    icon: Palette,
    title: "സർഗാത്മകത",
    text: "പാട്ടും ചിത്രവും കഥയും",
    surface: "bg-sky text-accent-foreground",
    tilt: "-0.8deg",
  },
  {
    icon: BookOpen,
    title: "പഠനം",
    text: "അറിവിന്റെ പുതിയ വഴികൾ",
    surface: "bg-leaf text-accent-foreground",
    tilt: "1.6deg",
  },
  {
    icon: MessageCircle,
    title: "സന്ദേശം",
    text: "സമാധാനവും സ്നേഹവും",
    surface: "bg-mango text-ink",
    tilt: "-1deg",
  },
];

export function CoreMessage() {
  const reveal = useReveal<HTMLDivElement>();
  const scroll = useScrollOffset();

  return (
    <section
      id="aashayam"
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

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {THEMES.map(({ icon: Icon, ...t }) => (
            <li
              key={t.title}
              className={`${t.surface} group relative overflow-hidden rounded-[1.75rem] p-7 ring-poster transition-all duration-300 hover:rotate-0 hover:-translate-y-2`}
              style={{ transform: `rotate(${t.tilt})` }}
            >
              <span aria-hidden className="dotgrid absolute inset-0 opacity-10" />
              <span
                aria-hidden
                className="absolute -right-8 -top-8 block h-28 w-28 rounded-full bg-cream/15 transition-transform duration-500 group-hover:scale-125"
              />
              <div className="relative">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-cream/20 backdrop-blur-sm">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="type-display text-2xl sm:text-[1.6rem]">{t.title}</h3>
                <p className="mt-2 text-base leading-relaxed opacity-85">{t.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <CurveDivider color="var(--sky)" />
    </section>
  );
}
