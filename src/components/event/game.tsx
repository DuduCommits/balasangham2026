import { useReveal } from "@/hooks/use-reveal";
import { Grain, DotRow, CurveDivider } from "./decor";

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

        <div className="mt-12 w-full max-w-4xl mx-auto rounded-3xl overflow-hidden ring-poster bg-cream">
          <iframe
            src="https://p.interacty.me/bfb0db2fbae646a2"
            title="Puzzle Game"
            width="100%"
            height="600"
            className="w-full border-0"
            allowFullScreen
          />
        </div>
      </div>
      
      <CurveDivider color="var(--sun)" />
    </section>
  );
}
