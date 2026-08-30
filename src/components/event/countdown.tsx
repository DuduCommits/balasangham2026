import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Confetti, Grain, Star, CurveDivider } from "./decor";

// Counts down to the start of the event day (IST); no official start time is published.
const TARGET = new Date("2026-09-06T00:00:00+05:30").getTime();

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function remaining(): Parts {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const LABELS: Array<{ key: keyof Parts; label: string; color: string; tilt: string }> = [
  { key: "days", label: "ദിവസം", color: "bg-berry text-berry-foreground", tilt: "-1.6deg" },
  { key: "hours", label: "മണിക്കൂർ", color: "bg-grape text-accent-foreground", tilt: "1.4deg" },
  { key: "minutes", label: "മിനിറ്റ്", color: "bg-sky text-accent-foreground", tilt: "-1.2deg" },
  { key: "seconds", label: "സെക്കന്റ്", color: "bg-mango text-ink", tilt: "1.8deg" },
];

export function Countdown() {
  const [parts, setParts] = useState<Parts | null>(null);
  const reveal = useReveal<HTMLDivElement>();

  useEffect(() => {
    const next = remaining();
    setParts(next);
    if (TARGET - Date.now() <= 0) return;
    const id = setInterval(() => {
      const value = remaining();
      setParts(value);
      if (TARGET - Date.now() <= 0) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const isOver =
    parts !== null &&
    parts.days === 0 &&
    parts.hours === 0 &&
    parts.minutes === 0 &&
    parts.seconds === 0 &&
    TARGET - Date.now() <= 0;

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24"
      style={{
        backgroundImage:
          "linear-gradient(168deg, var(--sun) 0%, var(--festival) 40%, var(--festival-deep) 100%)",
      }}
    >
      <Confetti opacity={0.35} />
      <Grain />
      <span
        aria-hidden
        className="spin-slow absolute -left-20 top-10 block h-56 w-56 rounded-full border-[12px] border-dotted border-berry/20"
      />
      <span
        aria-hidden
        className="float-slow absolute right-6 bottom-10 block h-24 w-24 rounded-[40%_60%_55%_45%] bg-grape/20"
      />

      <div
        ref={reveal.ref}
        className={`${reveal.className} relative mx-auto max-w-6xl px-5 sm:px-6`}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <Star className="float-fast h-8 w-8 text-berry" />
          <h2 className="type-display text-[clamp(1.9rem,7vw,3.6rem)] text-berry text-poster-shadow">
            {isOver ? "സമ്മേളനം സമാപിച്ചു" : "സമ്മേളനത്തിന് ഇനി"}
          </h2>
        </div>

        {isOver ? (
          <div className="mx-auto mt-8 max-w-2xl rounded-[2rem] bg-cream px-6 py-10 text-center ring-poster sm:px-10">
            <p className="type-display text-[clamp(1.4rem,5.4vw,2.4rem)] leading-[1.5] text-grape">
              ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം സന്തോഷത്തോടെ സമാപിച്ചു
            </p>
            <p className="mt-4 text-lg leading-[1.9] text-ink/75">
              2026 സെപ്റ്റംബർ 6 · കോട്ടയം അങ്ങാടി, കണ്ണൂർ — പങ്കെടുത്ത എല്ലാവർക്കും നന്ദി.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {LABELS.map((item) => (
              <div
                key={item.key}
                className={`${item.color} relative overflow-hidden rounded-[1.75rem] px-5 py-7 text-center ring-poster transition-transform duration-300 hover:rotate-0 hover:-translate-y-1.5 sm:py-9`}
                style={{ transform: `rotate(${item.tilt})` }}
              >
                <span
                  aria-hidden
                  className="dotgrid pointer-events-none absolute inset-0 opacity-15"
                />
                <div
                  key={parts ? parts[item.key] : "idle"}
                  className="tick-up relative font-ui text-[clamp(2.8rem,11vw,4.6rem)] font-extrabold leading-none tabular-nums"
                >
                  {parts ? String(parts[item.key]).padStart(2, "0") : "--"}
                </div>
                <div className="relative mt-3 font-display text-lg font-bold opacity-90 sm:text-xl">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <CurveDivider color="var(--cream)" />
    </section>
  );
}
