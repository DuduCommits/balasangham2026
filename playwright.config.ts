import { defineConfig, devices } from "@playwright/test";
import { existsSync } from "node:fs";

const PORT = 8080;
// Use the system Chromium when the bundled Playwright build is missing shared
// libraries in this sandbox; falls back to Playwright's default otherwise.
const SYSTEM_CHROMIUM = "/bin/chromium";
const systemChromium = existsSync(SYSTEM_CHROMIUM) ? SYSTEM_CHROMIUM : void 0;

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 45_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "off",
    launchOptions: {
      executablePath: systemChromium,
    },
  },
  projects: [
    {
      name: "mobile",
      use: { ...devices["Pixel 5"], viewport: { width: 390, height: 844 }, isMobile: true },
    },
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1280, height: 900 } },
    },
  ],
  webServer: {
    command: "npm run dev",
    url: `http://localhost:${PORT}`,
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
