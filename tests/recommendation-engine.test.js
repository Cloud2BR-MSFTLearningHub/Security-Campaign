const assert = require("node:assert/strict");
const catalog = require("../docs/assets/js/campaign-data.js");
const engine = require("../docs/assets/js/recommendation-engine.js");

function assess(overrides) {
  return engine.evaluate({
    m365: "e5", identity: "cloud", identityBaseline: "yes", cloudEstate: "none",
    compute: "none", containers: "none", dataServices: "none", storage: "none",
    appsApis: "none", network: "none", saas: "none", devices: "none", soc: "none",
    data: "low", ai: "none", ...overrides
  }, catalog);
}

const foundation = assess({});
assert.deepEqual(foundation.map((item) => item.id), ["licensing", "entra", "sentinel"]);
assert.equal(foundation.find((item) => item.id === "entra").status, "established");

const cloudSoc = assess({ cloudEstate: "multi", devices: "unmanaged", soc: "other" });
assert.ok(cloudSoc.some((item) => item.id === "defender"));
assert.ok(cloudSoc.some((item) => item.id === "intune"));
assert.equal(cloudSoc.find((item) => item.id === "sentinel").status, "recommended");

const computeServices = assess({ compute: "yes" });
assert.ok(computeServices.some((item) => item.id === "defender"));
assert.ok(computeServices.some((item) => item.id === "sentinel"));
assert.ok(!computeServices.some((item) => item.id === "purview"));

const compliance = assess({ data: "required" });
assert.equal(compliance.find((item) => item.id === "purview").status, "recommended");

const ai = assess({ soc: "sentinel", data: "required", ai: "both" });
assert.equal(ai.find((item) => item.id === "securityCopilot").status, "established");
assert.equal(ai.find((item) => item.id === "agent365").status, "recommended");

const unknown = assess({ identity: "unknown", identityBaseline: "unknown", cloudEstate: "unknown", devices: "unknown", soc: "unknown", data: "unknown" });
assert.ok(unknown.filter((item) => item.status === "discovery").length >= 5);

console.log(`Validated ${catalog.recommendations.length} recommendations across 6 scenarios.`);