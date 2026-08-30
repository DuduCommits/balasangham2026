import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/event/site-nav";
import { Hero } from "@/components/event/hero";
import { Countdown } from "@/components/event/countdown";
import { Intro } from "@/components/event/intro";
import { CoreMessage } from "@/components/event/core-message";
import { Details } from "@/components/event/details";
import { Programs } from "@/components/event/programs";
import { Peace } from "@/components/event/peace";
import { Gallery } from "@/components/event/gallery";
import { Location } from "@/components/event/location";
import { FinalCta, SiteFooter } from "@/components/event/closing";
import { MobileCta } from "@/components/event/mobile-cta";
import { getRequestOrigin } from "@/lib/origin.functions";

const TITLE = "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം | 2026";
const DESCRIPTION =
  "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം — 2026 സെപ്റ്റംബർ 6, കോട്ടയം അങ്ങാടി, കണ്ണൂർ. എല്ലാവർക്കും ഹൃദയം നിറഞ്ഞ സ്വാഗതം.";

export const Route = createFileRoute("/")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const image = `${origin}/og-image.jpg`;
    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESCRIPTION },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ml_IN" },
        { property: "og:url", content: origin || "/" },
        { property: "og:site_name", content: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം" },
        { property: "og:image", content: image },
        { property: "og:image:secure_url", content: image },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം — 2026 സെപ്റ്റംബർ 6, കോട്ടയം അങ്ങാടി, കണ്ണൂർ",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: TITLE },
        { name: "twitter:description", content: DESCRIPTION },
        { name: "twitter:image", content: image },
        {
          name: "twitter:image:alt",
          content: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം — 2026 സെപ്റ്റംബർ 6, കോട്ടയം അങ്ങാടി, കണ്ണൂർ",
        },
      ],
      links: [{ rel: "canonical", href: "/" }],

      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം",
            startDate: "2026-09-06",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            inLanguage: "ml",
            description: DESCRIPTION,
            location: {
              "@type": "Place",
              name: "കോട്ടയം അങ്ങാടി, കണ്ണൂർ",
              hasMap: "https://maps.app.goo.gl/rUMkccbTZhMd46Kx5?g_st=aw",
              address: {
                "@type": "PostalAddress",
                addressLocality: "കോട്ടയം അങ്ങാടി, കണ്ണൂർ",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
            },
            organizer: { "@type": "Organization", name: "ബാലസംഘം പിണറായി ഏരിയ" },
          }),
        },
      ],
    };
  },

  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteNav />
      <main>
        <Hero />
        <Countdown />
        <Intro />
        <CoreMessage />
        <Peace />
        <Details />
        <Programs />
        <Gallery />
        <Location />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  );
}
