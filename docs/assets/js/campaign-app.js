(function () {
  "use strict";

  const app = document.getElementById("security-campaign-app");
  if (!app || !window.SecurityCampaignData || !window.SecurityCampaignEngine) return;

  const catalog = window.SecurityCampaignData;
  const engine = window.SecurityCampaignEngine;
  const defaults = Object.fromEntries(catalog.questions.map((question) => [question.id, question.options[0][0]]));
  const state = { answers: { ...defaults }, activeView: "summary", audience: "executive" };

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
  }

  function icon(name) {
    const icons = {
      compass: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15 9-2 4-4 2 2-4 4-2Z"/></svg>',
      reset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
      print: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/></svg>',
      download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5"/><path d="M5 21h14"/></svg>'
    };
    return icons[name] || "";
  }

  function answerLabel(question, value) {
    return question.options.find((option) => option[0] === value)?.[1] || value;
  }

  function renderQuestions() {
    return catalog.questions.map((question, index) => `
      <fieldset class="campaign-question">
        <legend><span>${String(index + 1).padStart(2, "0")}</span>${escapeHtml(question.label)}</legend>
        <p>${escapeHtml(question.help)}</p>
        <div class="campaign-options">
          ${question.options.map(([value, label]) => `
            <label class="campaign-option">
              <input type="radio" name="${question.id}" value="${value}" ${state.answers[question.id] === value ? "checked" : ""}>
              <span>${escapeHtml(label)}</span>
            </label>`).join("")}
        </div>
      </fieldset>`).join("");
  }

  function statusLabel(status) {
    return ({ recommended: "Recommended", discovery: "Discovery needed", prerequisite: "Prerequisite gap", established: "Established / optimize" })[status];
  }

  function resultCard(item, detail) {
    return `<article class="result-card status-${item.status}">
      <div class="result-card-head"><span class="status-pill">${statusLabel(item.status)}</span><span>Phase ${item.phase}</span></div>
      <h3>${escapeHtml(item.product)}</h3>
      <p class="result-track">${escapeHtml(item.track)} · ${escapeHtml(item.phaseName)}</p>
      <p>${escapeHtml(item.reason)}</p>
      ${detail ? `<dl><dt>Next action</dt><dd>${escapeHtml(item.action)}</dd>${item.missing.length ? `<dt>Missing prerequisite</dt><dd>${item.missing.map(escapeHtml).join(", ")}</dd>` : ""}</dl>` : ""}
      <a href="${item.source}">Open implementation hub <span aria-hidden="true">→</span></a>
    </article>`;
  }

  function renderSummary(results, summary) {
    const attention = (summary.byStatus.recommended || 0) + (summary.byStatus.discovery || 0) + (summary.byStatus.prerequisite || 0);
    return `<section class="result-view result-summary">
      <div class="metric-grid">
        <article><strong>${results.length}</strong><span>Applicable hubs</span></article>
        <article><strong>${attention}</strong><span>Actions to plan</span></article>
        <article><strong>${summary.tracks.length}</strong><span>Campaign tracks</span></article>
        <article><strong>${summary.byStatus.discovery || 0}</strong><span>Unknowns to resolve</span></article>
      </div>
      <div class="campaign-brief"><p class="eyebrow">Executive brief</p><h2>Secure the foundations, then layer controls and automation.</h2><p>The roadmap sequences identity and licensing before workload, endpoint, data, operations, and AI capabilities. Items marked discovery needed should become evidence-gathering tasks before scope or cost is committed.</p></div>
      <div class="priority-grid">${results.filter((item) => item.status !== "established").slice(0, 4).map((item) => resultCard(item, state.audience === "technical")).join("")}</div>
    </section>`;
  }

  function renderMatrix(results) {
    return `<section class="result-view"><div class="result-table-wrap"><table class="result-table"><thead><tr><th>Hub</th><th>Track</th><th>Status</th><th>Phase</th><th>Action</th></tr></thead><tbody>${results.map((item) => `<tr><td><a href="${item.source}">${escapeHtml(item.product)}</a></td><td>${escapeHtml(item.track)}</td><td><span class="status-pill status-${item.status}">${statusLabel(item.status)}</span></td><td>${item.phase}</td><td>${escapeHtml(item.action)}</td></tr>`).join("")}</tbody></table></div></section>`;
  }

  function renderTracks(results) {
    const tracks = [...new Set(results.map((item) => item.track))];
    return `<section class="result-view track-grid">${tracks.map((track) => `<article class="track-card"><p class="eyebrow">Campaign track</p><h3>${escapeHtml(track)}</h3>${results.filter((item) => item.track === track).map((item) => `<div class="track-step"><span>${item.phase}</span><div><strong>${escapeHtml(item.product)}</strong><small>${statusLabel(item.status)}</small></div></div>`).join("")}</article>`).join("")}</section>`;
  }

  function renderTalkTracks(results) {
    const statusById = new Map(results.map((item) => [item.id, item]));
    const products = catalog.recommendations.filter((item) => item.conversation);
    return `<section class="result-view talk-tracks"><div class="talk-tracks-intro"><p class="eyebrow">Customer conversation guide</p><h2>Start with business risk, then agree evidence and ownership.</h2><p>Use these questions to shape a discovery meeting. The assessment status shows the current context; every product remains available so you can guide a wider security conversation.</p></div>${products.map((item) => {
      const assessed = statusById.get(item.id);
      const context = assessed ? `<span class="status-pill status-${assessed.status}">${statusLabel(assessed.status)}</span>` : "<span class=\"status-pill status-later\">Not in current assessment</span>";
      return `<article class="talk-track-card"><header><div><p class="eyebrow">${escapeHtml(item.track)}</p><h3>${escapeHtml(item.product)}</h3></div>${context}</header><div class="talk-track-outcome"><strong>Value to explore</strong><p>${escapeHtml(item.conversation.outcome)}</p></div><div class="talk-track-body"><section><h4>Ask the customer</h4><ol>${item.conversation.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}</ol></section><aside><h4>Bring to the discussion</h4><p>${escapeHtml(item.conversation.evidence)}</p><h4>Invite</h4><p>${escapeHtml(item.conversation.participants)}</p></aside></div><a href="${item.source}">Open implementation hub <span aria-hidden="true">→</span></a></article>`;
    }).join("")}</section>`;
  }

  function renderRoadmap(results) {
    return `<section class="result-view roadmap">${Object.entries(engine.phaseNames).map(([phase, name]) => {
      const items = results.filter((item) => item.phase === Number(phase));
      return `<article class="roadmap-phase ${items.length ? "" : "phase-empty"}"><div class="phase-marker"><span>${phase}</span></div><div class="phase-content"><p class="eyebrow">Phase ${phase}</p><h3>${escapeHtml(name)}</h3>${items.length ? items.map((item) => resultCard(item, true)).join("") : "<p>No current recommendation in this phase.</p>"}</div></article>`;
    }).join("")}</section>`;
  }

  function renderResults() {
    const results = engine.evaluate(state.answers, catalog);
    const summary = engine.summarize(results);
    const views = { summary: renderSummary, matrix: renderMatrix, tracks: renderTracks, talkTracks: renderTalkTracks, roadmap: renderRoadmap };
    document.getElementById("campaign-results-content").innerHTML = views[state.activeView](results, summary);
    document.querySelectorAll("[data-view]").forEach((button) => button.setAttribute("aria-selected", button.dataset.view === state.activeView));
    document.querySelectorAll("[data-audience]").forEach((button) => button.setAttribute("aria-pressed", button.dataset.audience === state.audience));
    const confirmed = Object.values(state.answers).filter((answer) => answer !== "unknown").length;
    document.getElementById("campaign-completion").textContent = `${confirmed} of ${catalog.questions.length} conditions confirmed`;
    document.getElementById("campaign-progress-fill").style.width = `${(confirmed / catalog.questions.length) * 100}%`;
  }

  function exportPayload() {
    const results = engine.evaluate(state.answers, catalog);
    return { generatedAt: new Date().toISOString(), catalogVersion: catalog.version, advisoryOnly: true, answers: Object.fromEntries(catalog.questions.map((question) => [question.label, answerLabel(question, state.answers[question.id])])), recommendations: results.map(({ id, product, track, phase, phaseName, status, reason, action, source, missing, conversation }) => ({ id, product, track, phase, phaseName, status, reason, action, missing, source, conversation })) };
  }

  function download(name, content, type) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([content], { type }));
    link.download = name;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function exportMarkdown() {
    const payload = exportPayload();
    const lines = ["# Security Campaign Assessment", "", `Generated: ${payload.generatedAt}`, `Catalog: ${payload.catalogVersion}`, "", "> Advisory planning output. Validate against official Microsoft documentation.", "", "## Conditions", "", ...Object.entries(payload.answers).map(([key, value]) => `- **${key}:** ${value}`), "", "## Roadmap", ""];
    payload.recommendations.forEach((item) => {
      lines.push(`### Phase ${item.phase}: ${item.product}`, "", `- **Status:** ${statusLabel(item.status)}`, `- **Track:** ${item.track}`, `- **Why:** ${item.reason}`, `- **Next action:** ${item.action}`, `- **Guide:** ${item.source}`);
      if (item.conversation) lines.push("", "#### Customer conversation", "", `**Value to explore:** ${item.conversation.outcome}`, "", "**Ask the customer:**", ...item.conversation.questions.map((question) => `- ${question}`), "", `**Bring to the discussion:** ${item.conversation.evidence}`, "", `**Invite:** ${item.conversation.participants}`);
      lines.push("");
    });
    download("security-campaign-assessment.md", lines.join("\n"), "text/markdown");
  }

  app.innerHTML = `<section class="campaign-intro"><div><p class="eyebrow">Microsoft cloud security decision map</p><h2>From current conditions to a defensible campaign.</h2><p>Choose the closest answers. Unknowns stay visible as discovery work, while the roadmap orders prerequisites and links to the specialist setup hubs.</p></div><div class="campaign-version"><span>Rule catalog</span><strong>v${catalog.version}</strong><small>Runs locally in this browser</small></div></section>
    <div class="campaign-map"><aside class="campaign-assessment"><div class="panel-heading"><div><p class="eyebrow">Current state</p><h2>Map the environment</h2></div><button class="icon-button" id="campaign-reset" title="Reset assessment" aria-label="Reset assessment">${icon("reset")}</button></div><div class="completion"><div class="completion-track"><div id="campaign-progress-fill" class="completion-fill"></div></div><p id="campaign-completion" class="completion-text"></p></div><form id="campaign-form">${renderQuestions()}</form></aside>
    <main class="campaign-results"><div class="panel-heading result-heading"><div><p class="eyebrow">Recommendation engine</p><h2>Your campaign</h2></div><div class="audience-toggle" aria-label="Result detail"><button data-audience="executive" aria-pressed="true">Executive</button><button data-audience="technical" aria-pressed="false">Technical</button></div></div>
    <div class="result-toolbar"><div class="result-tabs" role="tablist" aria-label="Result views"><button data-view="summary" aria-selected="true">Summary</button><button data-view="matrix">Matrix</button><button data-view="tracks">Tracks</button><button data-view="talkTracks">Talk tracks</button><button data-view="roadmap">Roadmap</button></div><div class="export-actions"><button id="campaign-print">${icon("print")}<span>Print</span></button><button id="campaign-markdown">${icon("download")}<span>Markdown</span></button><button id="campaign-json">${icon("download")}<span>JSON</span></button></div></div><div id="campaign-results-content"></div></main></div>`;

  document.getElementById("campaign-form").addEventListener("change", (event) => { state.answers[event.target.name] = event.target.value; renderResults(); });
  document.getElementById("campaign-reset").addEventListener("click", () => { state.answers = { ...defaults }; document.getElementById("campaign-form").reset(); catalog.questions.forEach((question) => { document.querySelector(`input[name="${question.id}"][value="${state.answers[question.id]}"]`).checked = true; }); renderResults(); });
  document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => { state.activeView = button.dataset.view; renderResults(); }));
  document.querySelectorAll("[data-audience]").forEach((button) => button.addEventListener("click", () => { state.audience = button.dataset.audience; renderResults(); }));
  document.getElementById("campaign-print").addEventListener("click", () => window.print());
  document.getElementById("campaign-markdown").addEventListener("click", exportMarkdown);
  document.getElementById("campaign-json").addEventListener("click", () => download("security-campaign-assessment.json", JSON.stringify(exportPayload(), null, 2), "application/json"));
  renderResults();
})();