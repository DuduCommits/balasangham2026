import { useEffect, useState } from "react";
import { Navigation } from "lucide-react";

/** Mobile-only sticky bottom CTA, appears after the hero and hides near the footer. */
export function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShow(y > window.innerHeight * 0.7 && y < max - 320);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-all duration-300 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <a
        href="#sthalam"
        className="flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-berry px-5 text-center font-display text-lg font-bold leading-snug text-berry-foreground ring-poster focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <Navigation className="h-5 w-5 shrink-0" aria-hidden />
        സമ്മേളനത്തിലേക്ക് സ്വാഗതം
      </a>
    </div>
  );
}
