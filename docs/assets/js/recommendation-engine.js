(function (root, factory) {
  const engine = factory();
  if (typeof module === "object" && module.exports) module.exports = engine;
  root.SecurityCampaignEngine = engine;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const phaseNames = {
    1: "Discover and validate",
    2: "Establish foundations",
    3: "Protect the environment",
    4: "Detect and respond",
    5: "Govern and assure",
    6: "Optimize with AI"
  };

  function matches(answers, conditions) {
    return !conditions || Object.entries(conditions).every(([key, values]) => values.includes(answers[key]));
  }

  function evaluate(answers, catalog) {
    const applicable = catalog.recommendations.filter((item) => matches(answers, item.when));
    const applicableIds = new Set(applicable.map((item) => item.id));

    return applicable.map((item) => {
      const missing = item.requires.filter((id) => !applicableIds.has(id));
      let status = "recommended";
      if (matches(answers, item.discovery) && item.discovery) status = "discovery";
      else if (missing.length) status = "prerequisite";
      else if (matches(answers, item.ready) && item.ready) status = "established";

      return { ...item, status, missing, phaseName: phaseNames[item.phase] };
    }).sort((left, right) => left.phase - right.phase || left.product.localeCompare(right.product));
  }

  function summarize(results) {
    const byStatus = results.reduce((summary, item) => {
      summary[item.status] = (summary[item.status] || 0) + 1;
      return summary;
    }, {});
    const tracks = [...new Set(results.map((item) => item.track))];
    return { total: results.length, byStatus, tracks };
  }

  return { evaluate, summarize, phaseNames };
});