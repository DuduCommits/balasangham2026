import { useReveal } from "@/hooks/use-reveal";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { Grain, Star, Spiral, DotRow } from "./decor";
import { EventActions } from "./event-actions";

const BLOCKS = [
  {
    icon: CalendarDays,
    kicker: "Date",
    lines: ["06", "സെപ്റ്റംബർ", "2026"],
    surface: "bg-berry text-berry-foreground",
    accent: "text-sun",
    tilt: "-1.4deg",
  },
  {
    icon: MapPin,
    kicker: "Venue",
    lines: ["കോട്ടയം അങ്ങാടി,", "കണ്ണൂർ"],
    surface: "bg-sky text-accent-foreground",
    accent: "text-sun",
    tilt: "1.2deg",
  },
  {
    icon: Users,
    kicker: "Event",
    lines: ["ബാലസംഘം", "പിണറായി ഏരിയ"],
    surface: "bg-grape text-accent-foreground",
    accent: "text-mango",
    tilt: "-0.8deg",
  },
];

export function Details() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section id="sammelanam" className="relative overflow-hidden bg-festival py-16 sm:py-24">
      <Grain />
      <span aria-hidden className="dotgrid absolute left-6 top-10 block h-32 w-32 text-berry/25" />
      <Spiral className="float-slow absolute right-8 top-14 h-16 w-16 text-grape/30" />

      <div
        ref={reveal.ref}
        className={`${reveal.className} relative mx-auto max-w-6xl px-5 sm:px-6`}
      >
        <div className="flex flex-col items-center text-center">
          <DotRow />
          <h2 className="type-display mt-3 text-[clamp(2rem,7.5vw,3.8rem)] text-berry text-poster-shadow">
            സമ്മേളന വിവരങ്ങൾ
          </h2>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {BLOCKS.map(({ icon: Icon, ...b }) => (
            <article
              key={b.kicker}
              className={`${b.surface} group relative overflow-hidden rounded-[2rem] p-8 ring-poster transition-all duration-300 hover:rotate-0 hover:-translate-y-2`}
              style={{ transform: `rotate(${b.tilt})` }}
            >
              <span aria-hidden className="dotgrid absolute inset-0 opacity-10" />
              <span
                aria-hidden
                className="absolute -right-10 -top-10 block h-32 w-32 rounded-full bg-cream/15 transition-transform duration-500 group-hover:scale-125"
              />
              <div className="relative flex items-center justify-between">
                <span className="font-ui text-[0.7rem] font-bold uppercase tracking-[0.24em] opacity-70">
                  {b.kicker}
                </span>
                <Icon className="h-6 w-6 opacity-80" aria-hidden />
              </div>

              <div className="relative mt-6">
                {b.lines.map((line, i) => (
                  <span
                    key={line}
                    className={`type-display-tight block ${
                      /^[0-9]+$/.test(line)
                        ? `font-ui text-[clamp(3.4rem,13vw,5rem)] font-extrabold leading-none ${b.accent}`
                        : i === 0
                          ? "text-[clamp(1.8rem,6vw,2.5rem)]"
                          : "text-[clamp(1.5rem,5vw,2rem)] opacity-90"
                    }`}
                  >
                    {line}
                  </span>
                ))}
              </div>

              <Star
                className={`relative mt-6 h-6 w-6 ${b.accent} transition-transform duration-500 group-hover:rotate-45`}
              />
            </article>
          ))}
        </div>

        <EventActions />
      </div>
    </section>
  );
}
