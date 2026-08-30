import heroChildren from "@/assets/hero-children.webp";
import logoMark from "@/assets/balasangham-logo.webp";
import { useScrollOffset, usePointerTilt } from "@/hooks/use-parallax";
import {
  Bunting,
  Confetti,
  Grain,
  Star,
  Spiral,
  Flower,
  PaperPlane,
  CurveDivider,
  DotRow,
} from "./decor";

export function Hero() {
  const scroll = useScrollOffset();
  const tilt = usePointerTilt();

  return (
    <section
      id="top"
      className="relative isolate -mt-[68px] flex min-h-[100svh] flex-col overflow-hidden pb-10 pt-[68px] sm:pb-24 sm:pt-28"
      style={{
        backgroundImage:
          "radial-gradient(115% 85% at 18% 4%, var(--sun) 0%, var(--festival) 46%, var(--festival-deep) 100%)",
      }}
    >
      {/* Layer 2 — decorative shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span
          className="absolute -left-28 top-24 block h-80 w-80 rounded-full bg-mango/25 blur-[2px]"
          style={{
            transform: `translate3d(${tilt.x * 14}px, ${scroll * -0.06 + tilt.y * 10}px, 0)`,
          }}
        />
        <span
          className="absolute -right-24 top-10 block h-72 w-72 rounded-[46%_54%_38%_62%] bg-berry/15"
          style={{ transform: `translate3d(${tilt.x * -18}px, ${scroll * -0.03}px, 0)` }}
        />
        <span className="spin-slow absolute right-8 top-40 block h-40 w-40 rounded-full border-[10px] border-dashed border-grape/20" />
        <span className="float-slow absolute bottom-40 left-8 block h-20 w-20 rotate-12 rounded-3xl bg-sky/25" />
        <Spiral className="float-fast absolute left-[6%] top-[42%] h-16 w-16 text-berry/40" />
        <Spiral className="drift-slow absolute right-[10%] bottom-[30%] h-20 w-20 text-grape/30" />
        <Flower className="float-slow absolute left-[42%] top-[14%] h-9 w-9 text-berry/60" />
        <Flower className="float-fast absolute right-[26%] top-[58%] h-7 w-7 text-grape/60" />
        <Star className="float-fast absolute left-[18%] top-[18%] h-8 w-8 text-berry/70" />
        <Star className="float-slow absolute right-[16%] top-[24%] h-6 w-6 text-sky/70" />
        <PaperPlane className="drift-slow absolute right-[8%] top-[36%] h-10 w-10 text-cream" />
      </div>

      {/* Layer 3 — festival flags */}
      <Bunting className="top-16 sm:top-20" />
      <Grain />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-5 pt-16 sm:px-6 sm:pt-20 lg:grid lg:items-center lg:gap-6 lg:pt-24 lg:grid-cols-[1.08fr_0.92fr]">
        {/* Layer 4 — typography */}
        <div className="relative z-20 text-center lg:text-left">
          <img
            src={logoMark}
            alt="ബാലസംഘം ചിഹ്നം — സമാധാനത്തിന്റെ പ്രാവും കുട്ടികളും"
            width={320}
            height={320}
            decoding="async"
            className="pop-in mx-auto block h-20 w-20 object-contain drop-shadow-[0_10px_18px_rgba(60,30,0,0.18)] sm:h-24 sm:w-24 lg:mx-0"
          />
          <p
            className="rise-in mt-4 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-cream/70 px-5 py-1.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-ink/70 backdrop-blur-sm sm:text-sm"
            style={{ animationDelay: "0.05s" }}
          >
            <DotRow />
            2026
          </p>

          <h1 className="mt-5 sm:mt-6">
            <span className="sr-only">ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം</span>
            <span
              aria-hidden
              className="rise-in type-display-tight block text-[clamp(2.5rem,12.6vw,6.5rem)] text-berry text-poster-shadow"
              style={{ animationDelay: "0.12s" }}
            >
              ബാലസംഘം
            </span>
            <span
              aria-hidden
              className="rise-in type-display-tight relative z-10 block text-[clamp(1.65rem,7vw,3.1rem)] text-grape lg:ml-[0.35em]"
              style={{ animationDelay: "0.22s" }}
            >
              പിണറായി ഏരിയ
            </span>
            <span
              aria-hidden
              className="rise-in type-display-tight block text-[clamp(2.25rem,10.9vw,5.4rem)] text-grape text-poster-shadow"
              style={{ animationDelay: "0.3s" }}
            >
              സമ്മേളനം
            </span>
          </h1>

          <div
            className="rise-in mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-stretch sm:justify-center lg:justify-start"
            style={{ animationDelay: "0.42s" }}
          >
            <span className="-rotate-1 rounded-2xl bg-berry px-5 py-3 text-center ring-poster">
              <span className="block font-ui text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-berry-foreground/70">
                Date
              </span>
              <span className="type-display block whitespace-nowrap text-[clamp(1.35rem,6vw,1.9rem)] text-berry-foreground">
                2026 സെപ്റ്റംബർ 6
              </span>
            </span>
            <span className="rotate-1 rounded-2xl bg-cream px-5 py-3 text-center ring-poster">
              <span className="block font-ui text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink/50">
                Venue
              </span>
              <span className="type-display block text-balance text-[clamp(1.1rem,4.6vw,1.6rem)] leading-[1.5] text-sky lg:whitespace-nowrap">
                കോട്ടയം അങ്ങാടി, കണ്ണൂർ
              </span>
            </span>
          </div>

          <p
            className="rise-in mx-auto mt-6 max-w-lg text-balance text-lg leading-[1.9] text-ink/80 sm:text-xl lg:mx-0"
            style={{ animationDelay: "0.5s" }}
          >
            കുട്ടികളുടെ സൗഹൃദത്തിന്റെയും സ്നേഹത്തിന്റെയും ആഘോഷത്തിലേക്ക് സ്വാഗതം
          </p>

          <div
            className="rise-in mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            style={{ animationDelay: "0.58s" }}
          >
            <a
              href="#aamukham"
              className="flex min-h-[52px] items-center justify-center rounded-2xl bg-grape px-7 text-center font-display text-lg font-bold text-accent-foreground ring-poster transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              സ്വാഗതം
            </a>
            <a
              href="#paripadikal"
              className="flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-ink/15 bg-cream/70 px-7 text-center font-display text-lg font-bold text-ink backdrop-blur-sm transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              പരിപാടികൾ
            </a>
          </div>
        </div>

        {/* Layer 5 — children illustration, bleeding to the screen edges on mobile */}
        <div className="relative z-10 -mx-5 mt-2 sm:mx-0 lg:-mb-32">
          <span
            aria-hidden
            className="absolute left-1/2 top-[46%] -z-10 block h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[48%_52%_46%_54%] bg-cream/55 blur-[1px]"
            style={{
              transform: `translate(-50%,-50%) translate3d(${tilt.x * -10}px, ${tilt.y * -8}px, 0)`,
            }}
          />
          <span
            aria-hidden
            className="dotgrid absolute right-2 bottom-6 -z-10 block h-32 w-32 text-berry/30 sm:-right-2"
          />
          <img
            src={heroChildren}
            alt="ആഹ്ലാദത്തോടെ കൈകൾ ഉയർത്തി ചാടുന്ന കുട്ടികൾ"
            width={1280}
            height={1024}
            fetchPriority="high"
            decoding="async"
            className="pop-in relative mx-auto block w-full max-w-[34rem] drop-shadow-[0_28px_40px_rgba(60,30,0,0.22)]"
            style={{
              animationDelay: "0.3s",
              transform: `translate3d(${tilt.x * 8}px, ${scroll * -0.04 + tilt.y * 6}px, 0)`,
            }}
          />
        </div>
      </div>

      {/* Layer 6 — foreground confetti + curve into next section */}
      <Confetti opacity={0.75} />
      <CurveDivider color="var(--sun)" />
    </section>
  );
}
