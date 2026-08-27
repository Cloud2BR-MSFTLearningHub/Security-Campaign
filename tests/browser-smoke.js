const assert = require("node:assert/strict");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const baseUrl = "http://127.0.0.1:8000/Security-Campaign/";
    const errors = [];
    page.on("response", (response) => {
      const optionalReleaseLookup = response.url().endsWith("/Security-Campaign/releases/latest");
      if (response.status() >= 400 && !optionalReleaseLookup) errors.push(`${response.status()} ${response.url()}`);
    });
    page.on("pageerror", (error) => errors.push(error.message));

    await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
    await page.locator(".route-grid").waitFor();
    assert.equal(await page.locator(".route-card").count(), 5);
    assert.equal(await page.locator(".decision-tree .tree-node").count(), 5);
    await page.locator("#security-campaign-app").waitFor();
    await page.locator("#campaign-form input[type=radio]").nth(2).check();
    assert.match(await page.locator("#campaign-question-context").innerText(), /Question 1 of \d+/);
    assert.equal(await page.locator(".campaign-question.is-active").count(), 1);
    await page.locator("[data-question-step=next]").click();
    assert.match(await page.locator("#campaign-question-context").innerText(), /Question 2 of \d+/);

    const maps = [
      ["identity-access/", "Identity and Access Map", "Microsoft Entra"],
      ["endpoint-map/", "Endpoint and Device Map", "Microsoft Intune"],
      ["cloud-workload-map/", "Cloud Workload Map", "Defender for Cloud"],
      ["data-ai-map/", "Data and AI Map", "Microsoft Purview"],
      ["security-operations-map/", "Security Operations Map", "Microsoft Sentinel"]
    ];

    for (const [path, heading, product] of maps) {
      await page.goto(new URL(path, baseUrl).toString(), { waitUntil: "domcontentloaded" });
      assert.ok((await page.locator("h1").textContent()).startsWith(heading));
      assert.equal(await page.locator(".map-flow .map-step").count(), 3);
      assert.ok(await page.getByText(product, { exact: false }).count() >= 1);
    }

    await page.locator("header a.md-logo").click();
    await page.locator(".route-grid").waitFor();
    assert.equal(new URL(page.url()).pathname, "/Security-Campaign/");
    assert.deepEqual(errors, []);

    console.log("Validated decision-map landing page, all focused maps, and root brand navigation.");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});