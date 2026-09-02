import { useState } from "react";
import { Check, Facebook, Link2, MapPin, Twitter } from "lucide-react";

import { EVENT_SHARE_TEXT as SHARE_TEXT, MAPS_URL } from "@/lib/event-info";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.931L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ShareBar() {
  const url = window.location.href;
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  const encodedText = encodeURIComponent(SHARE_TEXT);
  const encodedUrl = encodeURIComponent(url);

  const links = [
    {
      key: "wa",
      label: "WhatsApp",
      aria: "Share on WhatsApp (opens in a new tab)",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      icon: WhatsAppIcon,
      color: "bg-[#25D366] text-white",
      malayalam: false,
    },
    {
      key: "fb",
      label: "Facebook",
      aria: "Share on Facebook (opens in a new tab)",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
      color: "bg-[#1877F2] text-white",
      malayalam: false,
    },
    {
      key: "x",
      label: "X",
      aria: "Share on X (opens in a new tab)",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      icon: Twitter,
      color: "bg-[#0f1419] text-white",
      malayalam: false,
    },
  ];

  const handleCopy = async () => {
    const target = url || window.location.href;
    try {
      await navigator.clipboard.writeText(target);
      setCopied(true);
      setCopyFailed(false);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
      setCopyFailed(true);
      window.setTimeout(() => setCopyFailed(false), 2400);
    }
  };

  const btnBase =
    "flex h-12 w-full min-w-0 items-center justify-center gap-2 rounded-2xl px-3 shadow-md transition duration-200 motion-safe:hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.97] active:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun";

  return (
    <div className="mt-8">
      <p className="mb-3 text-center font-ui text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">
        Share with friends
      </p>
      <ul className="mx-auto grid w-full max-w-md grid-cols-2 gap-2.5 sm:max-w-2xl sm:grid-cols-4 sm:gap-3">
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.key} className="min-w-0">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.aria}
                className={`${btnBase} ${item.color}`}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span
                  className={`truncate text-sm font-semibold leading-[1.6] ${
                    item.malayalam ? "font-body" : "font-ui"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
        <li className="min-w-0">
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Link copied" : "Copy link"}
            className={`${btnBase} bg-cream text-ink`}
          >
            {copied ? (
              <Check className="h-5 w-5 shrink-0" aria-hidden="true" />
            ) : (
              <Link2 className="h-5 w-5 shrink-0" aria-hidden="true" />
            )}
            <span className="truncate font-ui text-sm font-semibold leading-[1.6]">
              {copied ? "Copied" : "Link"}
            </span>
          </button>
        </li>
      </ul>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share the Google Maps location (opens in a new tab)"
        className={`${btnBase} mx-auto mt-2.5 flex w-full max-w-md gap-2 bg-sky-600 text-white sm:max-w-2xl`}
      >
        <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="truncate font-ui text-sm font-semibold leading-[1.6]">Map</span>
      </a>
      <p
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={`mt-2.5 min-h-[1.25rem] text-center font-ui text-xs leading-[1.6] transition-opacity duration-200 ${
          copied || copyFailed ? "opacity-100" : "opacity-0"
        } ${copyFailed ? "text-[#ffb4a2]" : "text-cream/80"}`}
      >
        {copied
          ? "Link copied — you can paste it anywhere"
          : copyFailed
            ? "Couldn't copy — please copy the link manually"
            : ""}
      </p>
    </div>
  );
}
