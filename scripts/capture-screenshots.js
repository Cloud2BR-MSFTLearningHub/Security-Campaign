// Regenerates the README screenshots against a running `mkdocs serve` instance.
// Usage: node scripts/capture-screenshots.js
const path = require("node:path");
const { chromium } = require("playwright");

const baseUrl = process.env.CAMPAIGN_URL || "http://127.0.0.1:8000/Security-Campaign/";
const imagesDir = path.join(__dirname, "..", "images");

async function setAnswers(page) {
  await page.check('input[name="m365"][value="e5"]');
  await page.check('input[name="identity"][value="hybrid"]');
  await page.check('input[name="identityBaseline"][value="partial"]');
  await page.check('input[name="cloudEstate"][value="multi"]');
  await page.check('input[name="devices"][value="unmanaged"]');
  await page.check('input[name="soc"][value="sentinel"]');
  await page.check('input[name="data"][value="required"]');
  await page.check('input[name="ai"][value="both"]');
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    await desktop.goto(baseUrl, { waitUntil: "domcontentloaded" });
    await desktop.locator(".campaign-map").waitFor();
    await desktop.screenshot({ path: path.join(imagesDir, "decision-map-desktop.png"), fullPage: true });

    await setAnswers(desktop);
    await desktop.click('[data-view="roadmap"]');
    await desktop.click('[data-audience="technical"]');
    await desktop.waitForTimeout(200);
    await desktop.screenshot({ path: path.join(imagesDir, "decision-map-roadmap.png"), fullPage: true });
    await desktop.close();

    const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await mobile.goto(baseUrl, { waitUntil: "domcontentloaded" });
    await mobile.locator(".campaign-map").waitFor();
    await mobile.screenshot({ path: path.join(imagesDir, "decision-map-mobile.png"), fullPage: true });
    await mobile.close();

    console.log(`Captured screenshots into ${imagesDir}`);
  } finally {
    await browser.close();
  }
})();
