import { Flag, Palette, Music, HeartHandshake, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Grain, Star, CurveDivider, DotRow } from "./decor";

const PROGRAMS = [
  {
    icon: Flag,
    title: "ഉദ്ഘാടന സമ്മേളനം",
    text: "സമ്മേളനത്തിന് തുടക്കമിടുന്ന ആഹ്ലാദ നിമിഷം",
    tint: "bg-berry text-berry-foreground",
  },
  {
    icon: Palette,
    title: "കലാപരിപാടികൾ",
    text: "ചിത്രവും നൃത്തവും അഭിനയവും",
    tint: "bg-grape text-accent-foreground",
  },
  {
    icon: Music,
    title: "സാംസ്കാരിക പരിപാടികൾ",
    text: "നാടിന്റെ പാട്ടും താളവും",
    tint: "bg-sky text-accent-foreground",
  },
  {
    icon: HeartHandshake,
    title: "സൗഹൃദ സംഗമം",
    text: "പുതിയ കൂട്ടുകാരെ കാണാൻ ഒരു ഇടം",
    tint: "bg-leaf text-accent-foreground",
  },
  {
    icon: Sparkles,
    title: "സർഗാത്മക പ്രകടനങ്ങൾ",
    text: "ഓരോ കുട്ടിയുടെയും കഴിവിന് വേദി",
    tint: "bg-mango text-ink",
  },
];

export function Programs() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section
      id="paripadikal"
      className="relative overflow-hidden py-16 sm:py-24"
      style={{
        backgroundImage:
          "linear-gradient(180deg, var(--cream) 0%, var(--sun) 55%, var(--festival) 100%)",
      }}
    >
      <Grain />
      <span
        aria-hidden
        className="spin-slow absolute -right-24 top-24 block h-64 w-64 rounded-full border-[14px] border-dashed border-grape/15"
      />

      <div
        ref={reveal.ref}
        className={`${reveal.className} relative mx-auto max-w-5xl px-5 sm:px-6`}
      >
        <div className="flex flex-col items-center text-center">
          <DotRow />
          <h2 className="type-display mt-3 text-[clamp(2rem,7.5vw,3.8rem)] text-berry text-poster-shadow">
            സമ്മേളന വിശേഷങ്ങൾ
          </h2>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink/75">
            സമ്മേളന ദിവസത്തെ പ്രധാന ആകർഷണങ്ങൾ
          </p>
        </div>

        <ol className="relative mt-16">
          {/* curved timeline spine */}
          <span
            aria-hidden
            className="absolute left-6 top-2 bottom-2 w-[3px] rounded-full bg-berry/25 sm:left-1/2 sm:-translate-x-1/2"
          />
          {PROGRAMS.map(({ icon: Icon, ...p }, i) => {
            const right = i % 2 === 1;
            return (
              <li
                key={p.title}
                className={`relative pb-12 pl-20 last:pb-0 sm:w-1/2 ${
                  right
                    ? "sm:ml-auto sm:pl-16 sm:pr-0 sm:text-left"
                    : "sm:pl-0 sm:pr-16 sm:text-right"
                }`}
              >
                <span
                  className={`${p.tint} absolute top-1 grid h-14 w-14 place-items-center rounded-2xl ring-poster transition-transform duration-300 ${
                    right ? "left-0 sm:left-[-1.75rem]" : "left-0 sm:left-auto sm:right-[-1.75rem]"
                  }`}
                  style={{ transform: `rotate(${right ? 4 : -4}deg)` }}
                >
                  <Icon className="h-7 w-7" aria-hidden />
                </span>

                <div className="group">
                  <h3 className="type-display text-[clamp(1.4rem,5vw,2.1rem)] text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-lg leading-relaxed text-ink/75">{p.text}</p>
                  <span
                    aria-hidden
                    className={`mt-3 block h-[3px] w-14 rounded-full bg-berry/40 transition-all duration-300 group-hover:w-24 group-hover:bg-berry ${
                      right ? "" : "sm:ml-auto"
                    }`}
                  />
                </div>

                <Star
                  aria-hidden
                  className={`float-slow absolute top-0 hidden h-5 w-5 text-mango sm:block ${
                    right ? "right-4" : "left-4"
                  }`}
                />
              </li>
            );
          })}
        </ol>
      </div>

      <CurveDivider color="var(--cream)" />
    </section>
  );
}
