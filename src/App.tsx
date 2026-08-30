import { SiteNav } from "@/components/event/site-nav";
import { Hero } from "@/components/event/hero";
import { Countdown } from "@/components/event/countdown";
import { Intro } from "@/components/event/intro";
import { CoreMessage } from "@/components/event/core-message";
import { Details } from "@/components/event/details";
import { Programs } from "@/components/event/programs";
import { Peace } from "@/components/event/peace";
import { Gallery } from "@/components/event/gallery";
import { Game } from "@/components/event/game";
import { Location } from "@/components/event/location";
import { FinalCta, SiteFooter } from "@/components/event/closing";
import { MobileCta } from "@/components/event/mobile-cta";

export function App() {
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
        <Game />
        <Gallery />
        <Location />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  );
}
