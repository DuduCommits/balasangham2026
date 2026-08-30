import peaceDove from "@/assets/peace-dove.webp";
import { useReveal } from "@/hooks/use-reveal";
import { usePointerTilt } from "@/hooks/use-parallax";
import { Dove, Grain, CurveDivider } from "./decor";

export function Peace() {
  const reveal = useReveal<HTMLDivElement>();
  const tilt = usePointerTilt();

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(180deg, var(--sky) 0%, color-mix(in oklab, var(--sky) 55%, var(--cream)) 62%, var(--cream) 100%)",
      }}
    >
      <Grain />
      {/* soft clouds */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="absolute left-[8%] top-14 block h-24 w-56 rounded-full bg-cream/45 blur-md" />
        <span className="absolute right-[12%] top-28 block h-16 w-40 rounded-full bg-cream/35 blur-md" />
        <span className="absolute left-[38%] top-6 block h-14 w-36 rounded-full bg-cream/30 blur-md" />
        <Dove className="float-slow absolute right-[16%] top-16 h-14 w-20 text-cream" />
        <Dove className="float-fast absolute left-[14%] top-40 h-9 w-14 text-cream/80" />
      </div>

      {/* community skyline silhouette */}
      <svg
        aria-hidden
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-ink/15 sm:h-36"
      >
        <path
          fill="currentColor"
          d="M0 160V96h60V64h40v32h50V40h46v56h54V70h44v26h60V52h50v44h58V74h52v22h56V44h48v52h60V72h50v24h56V50h52v46h60V80h48v16h60V60h50v36h60v64z"
        />
      </svg>

      <div
        ref={reveal.ref}
        className={`${reveal.className} relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]`}
      >
        <div className="order-2 lg:order-1">
          <h2>
            <span className="type-display-tight block text-[clamp(2.1rem,8.4vw,4.4rem)] text-cream text-poster-shadow">
              സമാധാനത്തിനും
            </span>
            <span className="type-display-tight block text-[clamp(2.1rem,8.4vw,4.4rem)] text-ink">
              സൗഹൃദത്തിനും
            </span>
            <span className="type-display-tight block text-[clamp(2.1rem,8.4vw,4.4rem)] text-berry text-sticker">
              ഒരുമിച്ച്
            </span>
          </h2>

          <div className="mt-7 max-w-xl space-y-4 text-lg leading-[1.95] text-ink/80 sm:text-xl">
            <p className="font-medium text-ink">
              യുദ്ധത്തിന്റെ നിഴലുകൾക്കിടയിലും കുട്ടികൾ സ്വപ്നം കാണുന്നത് സമാധാനമാണ്. ആ സ്വപ്നത്തിന്
              കൂട്ടായി നിൽക്കാം.
            </p>
            <p>
              ഒലിവിന്റെ ചില്ലയും വെളുത്ത പ്രാവും ഓർമ്മിപ്പിക്കുന്നത് ഒന്നുമാത്രം — സ്നേഹമാണ് നമ്മുടെ
              ഭാഷ.
            </p>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 block h-[94%] w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/60"
          />
          <img
            src={peaceDove}
            alt="ഒലിവ് ചില്ലയുമായി പറക്കുന്ന വെളുത്ത പ്രാവും കൈകോർത്തു നിൽക്കുന്ന രണ്ട് കുട്ടികളും"
            width={1280}
            height={1280}
            loading="lazy"
            decoding="async"
            className="mx-auto w-full max-w-lg rounded-[50%] shadow-[0_30px_60px_-30px_rgba(20,30,60,0.55)]"
            style={{ transform: `translate3d(${tilt.x * -6}px, ${tilt.y * -5}px, 0)` }}
          />
        </div>
      </div>

      <CurveDivider color="var(--festival)" />
    </section>
  );
}
