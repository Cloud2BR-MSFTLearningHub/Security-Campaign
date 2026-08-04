const assert = require("node:assert/strict");
const catalog = require("../docs/assets/js/campaign-data.js");

async function validate() {
  const links = Object.entries(catalog.repositories);
  assert.equal(links.length, 8);

  const failures = [];
  for (const [id, url] of links) {
    try {
      const response = await fetch(url, { redirect: "follow" });
      if (!response.ok) failures.push(`${id}: HTTP ${response.status}`);
    } catch (error) {
      failures.push(`${id}: ${error.message}`);
    }
  }

  assert.deepEqual(failures, [], `Published source links failed:\n${failures.join("\n")}`);
  console.log(`Validated ${links.length} published implementation links.`);
}

validate().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});