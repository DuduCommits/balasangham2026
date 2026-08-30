import { MapPin, CalendarDays, Navigation } from "lucide-react";
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
            Kottayam Angadi, Kannur
          </h2>
          <p className="mt-4 max-w-md text-lg leading-[1.9] text-ink/80">
            The event venue is located at Kottayam Angadi, Kannur. More details will be announced soon.
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-sun/70 p-4">
              <dt className="flex items-center gap-2 font-ui text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink/55">
                <CalendarDays className="h-4 w-4 text-berry" aria-hidden />
                Date
              </dt>
              <dd className="type-display mt-1 text-xl text-ink">September 06, 2026</dd>
            </div>
            <div className="rounded-2xl bg-sun/70 p-4">
              <dt className="flex items-center gap-2 font-ui text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink/55">
                <MapPin className="h-4 w-4 text-sky" aria-hidden />
                Venue
              </dt>
              <dd className="type-display mt-1 text-xl text-ink">Kottayam Angadi, Kannur</dd>
            </div>
          </dl>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Navigate — Open Kottayam Angadi, Kannur in Google Maps (New Tab)"
            className="mt-8 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-berry px-7 py-4 font-display text-lg font-bold text-berry-foreground ring-poster transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ink focus-visible:ring-4 focus-visible:ring-berry/30 sm:inline-flex sm:w-auto"
          >
            <Navigation className="h-5 w-5" aria-hidden />
            Navigate
          </a>
        </div>

        {/* Real Google Map */}
        <div className="relative min-h-[350px] w-full overflow-hidden rounded-[2rem] bg-cream ring-poster h-full">
          <iframe
            title="Event Location"
            src="https://maps.google.com/maps?q=Kottayam%20Angadi,%20Kannur&hl=en&z=15&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Subtle inner shadow overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-ink/10" />
        </div>
      </div>
    </section>
  );
}
