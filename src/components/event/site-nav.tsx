import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight, Instagram, Facebook } from "lucide-react";

import logoMark from "@/assets/balasangham-logo.webp";

const LINKS = [
  { href: "#aamukham", label: "ആമുഖം" },
  { href: "#sammelanam", label: "സമ്മേളനം" },
  { href: "#paripadikal", label: "പരിപാടികൾ" },
  { href: "#game", label: "കളികൾ" },
  { href: "#ormakal", label: "ഓർമ്മകൾ" },
  { href: "#sthalam", label: "സ്ഥലം" },
];

const IDS = LINKS.map((l) => l.href.slice(1));

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const compute = () => {
      const line = window.innerHeight * 0.32;
      let current: string | null = null;
      for (const id of IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= line && rect.bottom > line) current = id;
      }
      // Near the very bottom, keep the last section highlighted.
      if (!current && window.scrollY + window.innerHeight >= document.body.scrollHeight - 4) {
        current = IDS[IDS.length - 1] ?? null;
      }
      setActive(current);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return active;
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const active = useActiveSection();
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keyboard: Escape closes, Tab is trapped inside the open sheet.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        e.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !open || !sheetRef.current) return;
      const focusables = Array.from(
        sheetRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ).filter((el) => el.offsetParent !== null);
      const items = toggleRef.current ? [toggleRef.current, ...focusables] : focusables;
      if (items.length === 0) return;
      const first = items[0]!;
      const last = items[items.length - 1]!;
      const activeEl = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (activeEl === first || !items.includes(activeEl as HTMLElement))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Move focus into the sheet when it opens.
  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      sheetRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    }, 60);
    return () => window.clearTimeout(t);
  }, [open]);

  // Smooth scroll + move focus to the target section for screen-reader/keyboard users.
  const goTo = useCallback((href: string) => {
    const el = document.getElementById(href.slice(1));
    if (!el) return false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: Math.max(top, 0), behavior: reduce ? "auto" : "smooth" });
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
    if (history.replaceState) history.replaceState(null, "", href);
    return true;
  }, []);

  const handleClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (goTo(href)) e.preventDefault();
    setOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-2 z-50 mx-3 mt-2 rounded-2xl border border-ink/[0.05] shadow-[0_8px_28px_-22px_var(--ink)] transition-all duration-300 sm:top-3 sm:mx-5 sm:mt-3 sm:rounded-3xl lg:mx-8 ${
          solid || open ? "bg-[oklch(0.89_0.07_94/0.9)]" : "bg-[oklch(0.91_0.07_95/0.82)]"
        }`}
      >
        <nav
          aria-label="പ്രധാന നാവിഗേഷൻ"
          className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:px-6 sm:py-3"
        >
          <a
            href="#top"
            onClick={handleClick("#top")}
            className="group flex min-w-0 items-center gap-2.5 rounded-2xl py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-berry"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-cream shadow-sm transition-transform duration-300 group-hover:-rotate-6">
              <img loading="lazy" decoding="async"
                src={logoMark}
                alt=""
                aria-hidden
                width={44}
                height={44}
                className="h-10 w-10 object-contain"
              />
            </span>
            <span className="type-display truncate text-lg text-berry sm:text-xl">ബാലസംഘം</span>
          </a>

          <ul className="ml-auto hidden items-center gap-6 md:flex">
            {LINKS.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={handleClick(l.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`group relative flex min-h-11 items-center font-body text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-berry ${
                      isActive ? "text-berry" : "text-ink/80 hover:text-berry"
                    }`}
                  >
                    {l.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 bottom-2 h-[3px] origin-left rounded-full bg-berry transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#aamukham"
                onClick={handleClick("#aamukham")}
                className="rounded-full bg-berry px-5 py-2.5 font-display text-base font-bold text-berry-foreground shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                സ്വാഗതം
              </a>
            </li>
            <li className="flex items-center gap-2 pl-2">
              <a
                href="https://www.instagram.com/balasangham_pinarayi/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-berry text-cream shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1CA9ncygHb/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-berry text-cream shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.threads.net/@balasangham_pinarayi"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-berry text-cream shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry"
                aria-label="Threads"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
            </li>
          </ul>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "മെനു അടയ്ക്കുക" : "മെനു തുറക്കുക"}
            className="ml-auto grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-berry text-berry-foreground shadow-md transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile full-screen sheet (outside the shaded header so `fixed` spans the viewport) */}
      <div
        id="mobile-menu"
        ref={sheetRef}
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="മെനു"
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-[oklch(0.91_0.07_95/0.96)] transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <span
          aria-hidden
          className="dotgrid pointer-events-none absolute inset-x-0 top-4 h-28 text-berry/15"
        />
        <ul className="relative flex flex-col gap-1.5 px-5 pt-5 pb-[calc(2rem+env(safe-area-inset-bottom))]">
          {LINKS.map((l, i) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={handleClick(l.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex min-h-[56px] items-center justify-between rounded-2xl px-5 font-display text-2xl font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry active:bg-festival ${
                    isActive
                      ? "bg-festival text-berry ring-2 ring-berry/40"
                      : "bg-cream/70 text-ink"
                  } ${open ? "rise-in" : ""}`}
                  style={{ animationDelay: `${0.04 * i + 0.04}s` }}
                >
                  {l.label}
                  <ArrowRight className="h-5 w-5 shrink-0 text-berry" aria-hidden />
                </a>
              </li>
            );
          })}
          <li className="pt-3">
            <a
              href="#aamukham"
              onClick={handleClick("#aamukham")}
              className="flex min-h-[60px] items-center justify-center rounded-2xl bg-berry px-5 text-center font-display text-xl font-bold leading-snug text-berry-foreground ring-poster focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              സമ്മേളനത്തിലേക്ക് സ്വാഗതം
            </a>
          </li>
          <li className="pt-4 pb-2 flex justify-center gap-4">
            <a
              href="https://www.instagram.com/balasangham_pinarayi/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-12 w-12 place-items-center rounded-full bg-berry text-cream shadow-md transition-transform active:scale-95"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/share/1CA9ncygHb/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-12 w-12 place-items-center rounded-full bg-berry text-cream shadow-md transition-transform active:scale-95"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.threads.net/@balasangham_pinarayi"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-12 w-12 place-items-center rounded-full bg-berry text-cream shadow-md transition-transform active:scale-95"
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
          </li>
          <li className="pt-4 text-center font-ui text-sm text-ink/60">
            2026 സെപ്റ്റംബർ 6 · കോട്ടയം അങ്ങാടി, കണ്ണൂർ
          </li>
        </ul>
      </div>
    </>
  );
}
