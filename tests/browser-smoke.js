const assert = require("node:assert/strict");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [];
    page.on("response", (response) => {
      const optionalReleaseLookup = response.url().endsWith("/Security-Campaign/releases/latest");
      if (response.status() >= 400 && !optionalReleaseLookup) errors.push(`${response.status()} ${response.url()}`);
    });
    page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("http://127.0.0.1:8000/", { waitUntil: "domcontentloaded" });
  await page.locator(".campaign-map").waitFor();
  assert.equal(await page.locator(".campaign-question").count(), 15);
  assert.equal(await page.locator(".question-group").count(), 6);
  await page.check('input[name="m365"][value="e5"]');
  await page.check('input[name="identity"][value="hybrid"]');
  await page.check('input[name="identityBaseline"][value="partial"]');
  await page.check('input[name="cloudEstate"][value="multi"]');
  await page.check('input[name="devices"][value="unmanaged"]');
  await page.check('input[name="soc"][value="sentinel"]');
  await page.check('input[name="data"][value="required"]');
  await page.check('input[name="ai"][value="both"]');

  assert.equal(await page.locator(".result-card").count(), 4);
  assert.equal(await page.locator(".metric-grid article").first().locator("strong").textContent(), "8");

  await page.click('[data-view="roadmap"]');
  await page.click('[data-audience="technical"]');
  assert.equal(await page.locator(".roadmap-phase").count(), 6);
  assert.ok(await page.getByText("Next action", { exact: true }).count() >= 1);

  await page.click('[data-view="talkTracks"]');
  assert.equal(await page.locator(".talk-track-card").count(), 7);
  assert.ok(await page.getByText("Ask the customer", { exact: true }).count() >= 7);
  assert.ok(await page.getByText("Microsoft Security Copilot", { exact: true }).count() >= 1);

  const markdownDownload = page.waitForEvent("download");
  await page.click("#campaign-markdown");
  assert.equal((await markdownDownload).suggestedFilename(), "security-campaign-assessment.md");

  const jsonDownload = page.waitForEvent("download");
  await page.click("#campaign-json");
  assert.equal((await jsonDownload).suggestedFilename(), "security-campaign-assessment.json");

  await page.locator("header a.md-logo").click();
  await page.locator(".campaign-map").waitFor();
  assert.equal(new URL(page.url()).pathname, "/Security-Campaign/");
  assert.deepEqual(errors, []);

    console.log("Validated assessment interaction, all result views, exports, and root brand navigation.");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});