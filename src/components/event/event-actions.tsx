import { useEffect, useRef, useState } from "react";
import { CalendarDays, CalendarPlus, Download, MapPin, Navigation, Share2 } from "lucide-react";
import {
  EVENT_DATE_ML,
  EVENT_LOCATION,
  EVENT_SHARE_TEXT,
  EVENT_TITLE,
  GOOGLE_CALENDAR_URL,
  MAPS_URL,
  downloadIcs,
} from "@/lib/event-info";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ShareBar } from "./share";

const BTN =
  "inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 font-display text-base font-bold leading-[1.5] ring-poster transition-transform duration-200 motion-safe:hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ink sm:w-auto sm:min-w-[13rem] will-change-transform";

export function EventActions() {
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [note, setNote] = useState("");
  const noteTimer = useRef<number | null>(null);

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
    return () => {
      if (noteTimer.current) window.clearTimeout(noteTimer.current);
    };
  }, []);

  const flash = (message: string) => {
    setNote(message);
    if (noteTimer.current) window.clearTimeout(noteTimer.current);
    noteTimer.current = window.setTimeout(() => setNote(""), 3000);
  };

  const handleCalendarConfirm = () => {
    setCalendarOpen(false);
    try {
      downloadIcs();
      flash("കലണ്ടർ ഫയൽ ഡൗൺലോഡ് ചെയ്തു");
    } catch {
      try {
        window.open(GOOGLE_CALENDAR_URL, "_blank", "noopener,noreferrer");
      } catch {
        flash("കലണ്ടറിൽ ചേർക്കാൻ കഴിഞ്ഞില്ല");
      }
    }
  };

  const handleShare = async () => {
    if (canNativeShare) {
      try {
        await navigator.share({
          title: EVENT_TITLE,
          text: EVENT_SHARE_TEXT,
          url: window.location.href,
        });
        flash("പങ്കിട്ടതിന് നന്ദി!");
        return;
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          flash("പങ്കിടൽ റദ്ദാക്കി — എപ്പോൾ വേണമെങ്കിലും വീണ്ടും ശ്രമിക്കാം");
          return;
        }
      }
    }
    setShowFallback((v) => !v);
  };

  return (
    <div className="mt-12">
      <div className="mx-auto flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
        <button
          type="button"
          onClick={() => setCalendarOpen(true)}
          aria-haspopup="dialog"
          aria-label={`Add to Calendar — ${EVENT_TITLE}, 2026 സെപ്റ്റംബർ 6`}
          className={`${BTN} bg-berry text-berry-foreground`}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" alt="" className="h-5 w-5 shrink-0" aria-hidden />
          Add to Calendar
        </button>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`വഴികാട്ടി — ${EVENT_LOCATION} ഗൂഗിൾ മാപ്പിൽ തുറക്കും (പുതിയ ടാബിൽ)`}
          className={`${BTN} bg-sky text-accent-foreground`}
        >
          <Navigation className="h-5 w-5 shrink-0" aria-hidden />
          വഴികാട്ടി
        </a>

        <button
          type="button"
          onClick={handleShare}
          aria-expanded={canNativeShare ? undefined : showFallback}
          aria-label={`പങ്കിടുക — ${EVENT_TITLE}`}
          className={`${BTN} bg-ink text-cream`}
        >
          <Share2 className="h-5 w-5 shrink-0" aria-hidden />
          പങ്കിടുക
        </button>
      </div>

      <p className="mt-3 text-center font-ui text-xs text-ink/60">
        <a
          href={GOOGLE_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center px-2 underline decoration-berry/50 underline-offset-4 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry"
        >
          Google Calendar
        </a>
      </p>

      {showFallback ? (
        <div className="mx-auto mt-4 w-full max-w-2xl rounded-[1.75rem] bg-ink/95 p-4 ring-poster">
          <ShareBar />
        </div>
      ) : null}

      <p
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="mt-2 min-h-[1.25rem] text-center font-ui text-xs text-ink/70"
      >
        {note}
      </p>

      <Dialog open={calendarOpen} onOpenChange={setCalendarOpen}>
        <DialogContent className="max-w-sm rounded-[1.75rem] bg-cream text-ink ring-poster">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-bold leading-[1.5]">
              പരിപാടിയുടെ വിശദാംശങ്ങൾ
            </DialogTitle>
            <DialogDescription className="font-body text-sm leading-[1.7] text-ink/70">
              കലണ്ടറിൽ ചേർക്കുന്നതിന് മുൻപ് ഒന്ന് പരിശോധിക്കൂ
            </DialogDescription>
          </DialogHeader>
          <dl className="mt-2 space-y-3">
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-berry" aria-hidden />
              <div>
                <dt className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
                  പരിപാടി
                </dt>
                <dd className="font-body text-base font-bold leading-[1.6]">{EVENT_TITLE}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CalendarPlus className="mt-1 h-5 w-5 shrink-0 text-berry" aria-hidden />
              <div>
                <dt className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
                  തീയതി
                </dt>
                <dd className="font-body text-base font-bold leading-[1.6]">
                  {EVENT_DATE_ML}{" "}
                  <span className="font-ui text-sm font-normal text-ink/60">(എല്ലായിടത്തും)</span>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-berry" aria-hidden />
              <div>
                <dt className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
                  സ്ഥലം
                </dt>
                <dd className="font-body text-base font-bold leading-[1.6]">{EVENT_LOCATION}</dd>
              </div>
            </div>
          </dl>
          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => setCalendarOpen(false)}
              className="inline-flex min-h-11 items-center justify-center rounded-2xl px-5 py-2.5 font-display text-sm font-bold text-ink ring-poster transition hover:bg-ink/5 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              റദ്ദാക്കുക
            </button>
            <button
              type="button"
              onClick={handleCalendarConfirm}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-berry px-5 py-2.5 font-display text-sm font-bold text-berry-foreground transition motion-safe:hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <Download className="h-4 w-4 shrink-0" aria-hidden />
              ഡൗൺലോഡ് ചെയ്യുക
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
