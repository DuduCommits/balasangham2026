import { MapPin, CalendarDays, Navigation, Clock } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Grain, Star, DotRow } from "./decor";

export const MAPS_URL = "https://maps.app.goo.gl/rUMkccbTZhMd46Kx5?g_st=aw";

export function Location() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section
      id="sthalam"
      className="relative overflow-hidden py-16 sm:py-24"
      style={{
        backgroundImage:
          "linear-gradient(150deg, var(--festival) 0%, var(--festival-deep) 60%, var(--mango) 100%)",
      }}
    >
      <Grain />
      <span
        aria-hidden
        className="spin-slow absolute -left-20 bottom-10 block h-56 w-56 rounded-full border-[12px] border-dotted border-cream/30"
      />

      <div
        ref={reveal.ref}
        className={`${reveal.className} relative mx-auto grid max-w-6xl items-stretch gap-8 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]`}
      >
        <div className="relative rounded-[2rem] bg-cream p-8 ring-poster sm:p-10">
          <DotRow />
          <h2 className="type-display-tight mt-4 text-[clamp(2rem,8vw,3.6rem)] text-berry text-poster-shadow">
            കോട്ടയം അങ്ങാടി, കണ്ണൂർ
          </h2>
          <p className="mt-4 max-w-md text-lg leading-[1.9] text-ink/80">
            സമ്മേളന വേദി കണ്ണൂർ കോട്ടയം അങ്ങാടിയിലാണ്.
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-sun/70 p-4">
              <dt className="flex items-center gap-2 font-ui text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink/55">
                <CalendarDays className="h-4 w-4 text-berry" aria-hidden />
                Date
              </dt>
              <dd className="type-display mt-1 text-xl text-ink">2026 സെപ്റ്റംബർ 6</dd>
            </div>
            <div className="rounded-2xl bg-sun/70 p-4">
              <dt className="flex items-center gap-2 font-ui text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink/55">
                <Clock className="h-4 w-4 text-grape" aria-hidden />
                Time
              </dt>
              <dd className="type-display mt-1 text-[1.1rem] leading-tight text-ink">രജിസ്ട്രേഷൻ രാവിലെ 9.00 മണിക്ക്</dd>
            </div>
            <div className="rounded-2xl bg-sun/70 p-4 sm:col-span-2">
              <dt className="flex items-center gap-2 font-ui text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink/55">
                <MapPin className="h-4 w-4 text-sky" aria-hidden />
                Venue
              </dt>
              <dd className="type-display mt-1 text-[1.15rem] text-ink">കോട്ടയം അങ്ങാടി, കണ്ണൂർ</dd>
            </div>
          </dl>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="വഴികാട്ടി — കോട്ടയം അങ്ങാടി, കണ്ണൂർ ഗൂഗിൾ മാപ്പിൽ തുറക്കും (പുതിയ ടാബിൽ)"
            className="mt-8 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-berry px-7 py-4 font-display text-lg font-bold text-berry-foreground ring-poster transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ink focus-visible:ring-4 focus-visible:ring-berry/30 sm:inline-flex sm:w-auto"
          >
            <Navigation className="h-5 w-5" aria-hidden />
            വഴികാട്ടി
          </a>
        </div>

        {/* Stylized map illustration */}
        <div className="relative min-h-72 overflow-hidden rounded-[2rem] bg-cream ring-poster">
          <span
            aria-hidden
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(var(--leaf) 1px, transparent 1px), linear-gradient(90deg, var(--leaf) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <svg
            aria-hidden
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M-20 210 C 90 180, 150 250, 260 200 S 380 150, 430 190"
              fill="none"
              stroke="var(--mango)"
              strokeWidth="14"
              opacity="0.35"
              strokeLinecap="round"
            />
            <path
              d="M-20 120 C 80 90, 190 150, 300 90 S 400 60, 430 80"
              fill="none"
              stroke="var(--sky)"
              strokeWidth="9"
              opacity="0.3"
              strokeLinecap="round"
            />
            <path
              d="M120 -20 C 140 80, 100 170, 160 320"
              fill="none"
              stroke="var(--leaf)"
              strokeWidth="8"
              opacity="0.28"
              strokeLinecap="round"
            />
            <circle cx="330" cy="240" r="28" fill="var(--leaf)" opacity="0.2" />
            <circle cx="60" cy="60" r="22" fill="var(--grape)" opacity="0.18" />
          </svg>

          <div className="relative grid h-full place-items-center p-8 text-center">
            <div>
              <span className="float-fast mx-auto grid h-16 w-16 place-items-center rounded-full bg-berry text-berry-foreground ring-poster">
                <MapPin className="h-8 w-8" aria-hidden />
              </span>
              <span
                aria-hidden
                className="mx-auto mt-2 block h-3 w-10 rounded-full bg-ink/15 blur-[2px]"
              />
              <p className="type-display mt-5 text-2xl text-ink">കോട്ടയം അങ്ങാടി, കണ്ണൂർ</p>
              <p className="mt-1 text-ink/70">2026 സെപ്റ്റംബർ 6</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="കോട്ടയം അങ്ങാടി, കണ്ണൂർ ഗൂഗിൾ മാപ്പിൽ കാണുക (പുതിയ ടാബിൽ)"
                className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-sky/15 px-5 py-3 font-ui text-sm font-bold text-ink ring-poster transition-transform hover:-translate-y-0.5 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-berry focus-visible:ring-4 focus-visible:ring-sky/40"
              >
                <Star className="h-4 w-4 text-mango" aria-hidden />
                ഗൂഗിൾ മാപ്പിൽ കാണുക
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
