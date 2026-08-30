import { useReveal } from "@/hooks/use-reveal";
import { Grain, DotRow, CurveDivider } from "./decor";
import { Gamepad2 } from "lucide-react";

export function Game() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section
      id="game"
      className="relative overflow-hidden py-16 sm:py-24"
      style={{
        backgroundImage:
          "linear-gradient(180deg, var(--cream) 0%, var(--mango) 100%)",
      }}
    >
      <Grain />

      <div
        ref={reveal.ref}
        className={`${reveal.className} relative mx-auto max-w-5xl px-5 sm:px-6`}
      >
        <div className="flex flex-col items-center text-center">
          <DotRow />
          <h2 className="type-display mt-3 text-[clamp(2rem,7.5vw,3.8rem)] text-berry text-poster-shadow">
            കളികൾ
          </h2>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink/75">
            ചിത്രം ചേർത്ത് വയ്ക്കാം
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://interacty.me/projects/bfb0db2fbae646a2"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-berry px-10 py-5 font-bold text-cream ring-poster transition-transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
            <Gamepad2 className="h-6 w-6 relative z-10" />
            <span className="relative z-10 text-xl tracking-wide uppercase">Play Game</span>
          </a>
        </div>
      </div>
      
      <CurveDivider color="var(--sun)" />
    </section>
  );
}
