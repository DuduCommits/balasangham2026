import heroChildren from "@/assets/hero-children.webp";
import { useReveal } from "@/hooks/use-reveal";
import { Confetti, Bunting, Grain, Star, Flower, DotRow } from "./decor";
import { Instagram, Facebook } from "lucide-react";
import { ShareBar } from "./share";

export function FinalCta() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section
      className="relative overflow-hidden pb-0 pt-16 sm:pt-28"
      style={{
        backgroundImage:
          "radial-gradient(120% 90% at 50% 8%, var(--sun) 0%, var(--festival) 42%, var(--festival-deep) 78%, var(--mango) 100%)",
      }}
    >
      <Bunting className="top-4" />
      <Confetti opacity={0.8} />
      <Grain />
      <Flower className="float-slow absolute left-[10%] top-28 h-10 w-10 text-berry/60" />
      <Star className="float-fast absolute right-[12%] top-32 h-9 w-9 text-grape/60" />

      <div
        ref={reveal.ref}
        className={`${reveal.className} relative mx-auto max-w-4xl px-5 text-center sm:px-6`}
      >
        <DotRow className="justify-center" />
        <h2 className="mt-5">
          <span className="type-display-tight block text-[clamp(2.4rem,11vw,5.6rem)] text-berry text-poster-shadow">
            നമ്മൾ ഒരുമിച്ച്
          </span>
          <span className="type-display-tight block text-[clamp(2.4rem,11vw,5.6rem)] text-grape text-sticker">
            ആഘോഷിക്കാം!
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-[1.95] text-ink/85 sm:text-xl">
          ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനത്തിലേക്ക് എല്ലാവർക്കും ഹൃദയം നിറഞ്ഞ സ്വാഗതം
        </p>

        <a
          href="#top"
          className="mt-10 inline-block rounded-3xl bg-berry px-10 py-5 font-display text-xl font-bold text-berry-foreground ring-poster transition-transform hover:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:text-2xl"
        >
          സമ്മേളനത്തിൽ കാണാം
        </a>
      </div>

      <img loading="lazy" decoding="async"
        src={heroChildren}
        alt=""
        aria-hidden
        width={1280}
        height={1024}
        loading="lazy"
        decoding="async"
        className="relative mx-auto mt-10 block w-full max-w-3xl translate-y-2 drop-shadow-[0_20px_30px_rgba(60,30,0,0.18)]"
      />
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-[calc(3.5rem+env(safe-area-inset-bottom))] pt-12 text-center text-cream">
      <span aria-hidden className="dotgrid absolute inset-x-0 top-0 h-24 text-cream/10" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-6">
        <p className="type-display text-[clamp(1.4rem,5.5vw,2.4rem)] text-sun">
          ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം
        </p>
        <p className="mt-3 font-ui text-lg text-cream/75">
          2026 സെപ്റ്റംബർ 6 · കോട്ടയം അങ്ങാടി, കണ്ണൂർ
        </p>
        <ShareBar />
        
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://www.instagram.com/balasangham_pinarayi/"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-berry focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://www.facebook.com/share/1CA9ncygHb/"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-berry focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://www.threads.net/@balasangham_pinarayi"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-berry focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            aria-label="Threads"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
              <path d="M14 12V13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13V11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11V12Z" />
              <path d="M10 13C10 14.1046 10.8954 15 12 15H12.5C14.433 15 16 13.433 16 11.5C16 9.567 14.433 8 12.5 8H12C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18H14.5" />
            </svg>
          </a>
        </div>
        <DotRow className="mt-6 justify-center" />
        <div className="mt-5 flex justify-center">
          <a
            href="https://linktr.ee/DhyandevRTX"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[44px] items-center gap-1 rounded-full px-3 py-1.5 font-ui text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun/70 sm:text-sm"
            aria-label="Built by Dhyan (opens in a new tab)"
          >
            <span className="text-cream/50 transition-colors group-hover:text-cream/65">
              Built by
            </span>
            <span className="text-cream/80 transition-colors group-hover:text-cream">Dhyan</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
