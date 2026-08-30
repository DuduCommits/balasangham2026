import { expect, test, type Page } from "@playwright/test";

const EVENT_TITLE = "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം";
const EVENT_DATE = "2026 സെപ്റ്റംബർ 6";
const EVENT_LOCATION = "കോട്ടയം അങ്ങാടി, കണ്ണൂർ";
const SHARE_TEXT = `${EVENT_TITLE} — ${EVENT_DATE}, ${EVENT_LOCATION}.`;
const MAPS_URL = "https://maps.app.goo.gl/rUMkccbTZhMd46Kx5?g_st=aw";

async function gotoHome(page: Page) {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  // Wait for React hydration so click handlers are attached.
  await page.waitForFunction(() => {
    const el = document.querySelector("main") ?? document.body;
    return Object.keys(el).some((key) => key.startsWith("__reactFiber$"));
  });
}

function calendarButton(page: Page) {
  return page.getByRole("button", { name: /കലണ്ടറിൽ ചേർക്കുക/ });
}

function directionsLink(page: Page) {
  return page.getByRole("link", { name: /വഴികാട്ടി/ }).first();
}

function shareButton(page: Page) {
  return page.getByRole("button", { name: /പങ്കിടുക/ }).first();
}

test.describe("event actions", () => {
  test("കലണ്ടറിൽ ചേർക്കുക downloads a valid all-day .ics", async ({ page }) => {
    await gotoHome(page);
    const button = calendarButton(page);
    await expect(button).toBeVisible();

    const box = await button.boundingBox();
    expect(box!.height).toBeGreaterThanOrEqual(44);

    // Clicking the button opens the Event details confirmation modal first.
    await button.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText(EVENT_TITLE)).toBeVisible();
    await expect(dialog.getByText(new RegExp(EVENT_DATE))).toBeVisible();
    await expect(dialog.getByText(EVENT_LOCATION)).toBeVisible();

    const download = await Promise.all([
      page.waitForEvent("download"),
      dialog.getByRole("button", { name: "ഡൗൺലോഡ് ചെയ്യുക" }).click(),
    ]).then(([d]) => d);
    await expect(dialog).not.toBeVisible();
    expect(download.suggestedFilename()).toBe("balasangham-sammelanam-2026.ics");

    const stream = await download.createReadStream();
    const chunks: Buffer[] = [];
    for await (const chunk of stream) chunks.push(chunk as Buffer);
    const ics = Buffer.concat(chunks).toString("utf-8");

    expect(ics).toContain("BEGIN:VCALENDAR");
    expect(ics).toContain("DTSTART;VALUE=DATE:20260906");
    expect(ics).toContain("DTEND;VALUE=DATE:20260907");
    expect(ics).toContain("X-MICROSOFT-CDO-ALLDAYEVENT:TRUE");
    expect(ics.trimEnd().endsWith("END:VCALENDAR")).toBe(true);
    // Unfolded content keeps the exact official event details.
    const unfolded = ics.replace(/\r\n /g, "");
    expect(unfolded).toContain(`SUMMARY:${EVENT_TITLE}`);
    expect(unfolded).toContain("LOCATION:കോട്ടയം അങ്ങാടി\\, കണ്ണൂർ");
    // No invented time information.
    expect(ics).not.toMatch(/DTSTART:\d{8}T/);
  });

  test("വഴികാട്ടി opens the exact Google Maps URL safely", async ({ page }) => {
    await gotoHome(page);
    const link = directionsLink(page);
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", MAPS_URL);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    await expect(link).toHaveAccessibleName(new RegExp(EVENT_LOCATION));

    const box = await link.boundingBox();
    expect(box!.height).toBeGreaterThanOrEqual(44);
  });

  test("പങ്കിടുക uses the Web Share API with the official payload", async ({ page }) => {
    await page.addInitScript(() => {
      (window as unknown as { __shared?: unknown }).__shared = undefined;
      Object.defineProperty(navigator, "share", {
        configurable: true,
        value: async (data: unknown) => {
          (window as unknown as { __shared?: unknown }).__shared = data;
        },
      });
    });
    await gotoHome(page);

    const button = shareButton(page);
    await expect(button).toBeVisible();
    await button.click();

    const shared = await page.evaluate(
      () => (window as unknown as { __shared?: Record<string, string> }).__shared,
    );
    expect(shared?.title).toBe(EVENT_TITLE);
    expect(shared?.text).toBe(SHARE_TEXT);
    expect(shared?.url).toBe(page.url());

    await expect(page.getByText("പങ്കിട്ടതിന് നന്ദി!")).toBeVisible();
  });

  test("പങ്കിടുക shows a friendly message when the share sheet is cancelled", async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, "share", {
        configurable: true,
        value: async () => {
          throw new DOMException("Share canceled", "AbortError");
        },
      });
    });
    await gotoHome(page);

    await shareButton(page).click();
    await expect(page.getByText(/പങ്കിടൽ റദ്ദാക്കി/)).toBeVisible();
  });

  test("പങ്കിടുക falls back to social buttons and Copy Link confirms", async ({
    page,
    context,
  }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.addInitScript(() => {
      // Simulate a browser without the Web Share API.
      Object.defineProperty(navigator, "share", { configurable: true, value: undefined });
    });
    await gotoHome(page);

    await shareButton(page).click();

    const fallback = page.getByRole("list").filter({ hasText: "WhatsApp" }).last();
    await expect(fallback).toBeVisible();

    const whatsapp = fallback.getByRole("link", { name: /Share on WhatsApp/ });
    await expect(whatsapp).toHaveAttribute("target", "_blank");
    await expect(whatsapp).toHaveAttribute("rel", "noopener noreferrer");
    await expect(fallback.getByRole("link", { name: /Share on Facebook/ })).toBeVisible();
    await expect(fallback.getByRole("link", { name: /Share on X/ })).toBeVisible();

    const copy = fallback.getByRole("button", { name: /Copy link/ });

    await copy.click();
    await expect(page.getByText(/Link copied/).first()).toBeVisible();

    const clipboard = await page.evaluate(() => navigator.clipboard.readText());
    expect(clipboard).toBe(page.url());
  });

  test("action row has no horizontal overflow", async ({ page }) => {
    await gotoHome(page);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });
});
