export const EVENT_TITLE = "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം";
export const EVENT_DATE_ML = "2026 സെപ്റ്റംബർ 6";
export const EVENT_LOCATION = "കോട്ടയം അങ്ങാടി, കണ്ണൂർ";
export const EVENT_DESCRIPTION = `${EVENT_TITLE} — ${EVENT_DATE_ML}.`;
export const EVENT_SHARE_TEXT = `${EVENT_TITLE} — ${EVENT_DATE_ML}, ${EVENT_LOCATION}.`;
export const MAPS_URL = "https://maps.app.goo.gl/rUMkccbTZhMd46Kx5?g_st=aw";

/** All-day event: 2026-09-06 (DTEND is exclusive). */
const START = "20260906";
const END = "20260907";

export const GOOGLE_CALENDAR_URL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  EVENT_TITLE,
)}&dates=${START}/${END}&details=${encodeURIComponent(
  EVENT_DESCRIPTION,
)}&location=${encodeURIComponent(EVENT_LOCATION)}`;

function foldLine(line: string) {
  // RFC 5545: fold at 75 octets, never inside a UTF-8 code point.
  const encoder = new TextEncoder();
  if (encoder.encode(line).length <= 73) return line;
  const out: string[] = [];
  let current = "";
  let bytes = 0;
  for (const char of line) {
    const size = encoder.encode(char).length;
    if (bytes + size > 73) {
      out.push(current);
      current = "";
      bytes = 0;
    }
    current += char;
    bytes += size;
  }
  if (current) out.push(current);
  return out.join("\r\n ");
}

function escapeIcs(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

export function buildIcs() {
  const stamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Balasangham Pinarayi Area//Sammelanam 2026//ML",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:balasangham-pinarayi-sammelanam-2026@${START}`,
    `DTSTAMP:${stamp}`,
    // Floating DATE values: the event stays on 2026-09-06 in every timezone.
    `DTSTART;VALUE=DATE:${START}`,
    `DTEND;VALUE=DATE:${END}`,
    `SUMMARY:${escapeIcs(EVENT_TITLE)}`,
    `LOCATION:${escapeIcs(EVENT_LOCATION)}`,
    `DESCRIPTION:${escapeIcs(EVENT_DESCRIPTION)}`,
    "TRANSP:TRANSPARENT",
    // Outlook needs this hint to treat a DATE-valued event as all-day.
    "X-MICROSOFT-CDO-ALLDAYEVENT:TRUE",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.map(foldLine).join("\r\n") + "\r\n";
}

export function downloadIcs() {
  const blob = new Blob([buildIcs()], { type: "text/calendar;charset=utf-8" });
  const href = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = href;
  a.download = "balasangham-sammelanam-2026.ics";
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(href), 4000);
}
