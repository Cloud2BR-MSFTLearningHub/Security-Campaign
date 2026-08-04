(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) module.exports = data;
  root.SecurityCampaignData = data;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const questions = [
    { id: "m365", group: "Foundation", label: "Microsoft 365 licensing", help: "Select the closest current licensing position.", options: [["unknown", "Unknown"], ["none", "No E5 or E7"], ["e5", "Microsoft 365 E5"], ["e7", "Microsoft 365 E7"]] },
    { id: "identity", group: "Foundation", label: "Identity environment", help: "How are workforce identities currently managed?", options: [["unknown", "Unknown"], ["cloud", "Cloud-only Entra ID"], ["hybrid", "Hybrid Active Directory and Entra ID"], ["other", "Another identity provider"]] },
    { id: "identityBaseline", group: "Foundation", label: "Identity security baseline", help: "Is MFA, Conditional Access, and privileged access governance established?", options: [["unknown", "Unknown"], ["no", "Not established"], ["partial", "Partially established"], ["yes", "Established"]] },
    { id: "cloudEstate", group: "Protect", label: "Cloud workload estate", help: "Which estate requires workload protection?", options: [["none", "No cloud workloads"], ["azure", "Azure"], ["multi", "Azure plus AWS or GCP"], ["unknown", "Unknown"]] },
    { id: "devices", group: "Protect", label: "Device management", help: "Are corporate or BYOD endpoints in scope?", options: [["none", "No endpoints in scope"], ["unmanaged", "Mostly unmanaged"], ["partial", "Partially managed"], ["managed", "Managed and compliant"], ["unknown", "Unknown"]] },
    { id: "soc", group: "Detect", label: "Security operations", help: "What is the current SIEM and SOC position?", options: [["none", "No formal SOC or SIEM"], ["other", "SOC using another SIEM"], ["sentinel", "Microsoft Sentinel in use"], ["mature", "Sentinel with automation"], ["unknown", "Unknown"]] },
    { id: "data", group: "Govern", label: "Data and compliance", help: "How important are classification, DLP, audit, retention, or regulatory controls?", options: [["low", "Limited current scope"], ["required", "Required"], ["mature", "Controls already mature"], ["unknown", "Unknown"]] },
    { id: "ai", group: "Optimize", label: "AI adoption", help: "Which AI capabilities are planned or active?", options: [["none", "No current AI program"], ["security", "AI for the security team"], ["agents", "Enterprise agents"], ["both", "Security AI and enterprise agents"], ["unknown", "Unknown"]] }
  ];

  const repositories = {
    licensing: "https://cloud2br-msftlearninghub.github.io/M365-E5-E7-Overview/foundation/license-overview-and-service-plan/",
    entra: "https://cloud2br-msftlearninghub.github.io/Entra-Overview/implementation/tenant-setup-and-baseline/",
    defender: "https://cloud2br-msftlearninghub.github.io/Defender-Setup-Overview/00-overview/",
    intune: "https://cloud2br-msftlearninghub.github.io/Intune-Overview/implementation/compliance-and-conditional-access/",
    purview: "https://cloud2br-msftlearninghub.github.io/Purview-Setup-Overview/overview/",
    sentinel: "https://cloud2br-msftlearninghub.github.io/Sentinel-Setup-Overview/00-overview/",
    securityCopilot: "https://cloud2br-msftlearninghub.github.io/Security-Copilot-Overview/foundation/licensing-and-capacity-models/",
    agent365: "https://cloud2br-msftlearninghub.github.io/Agent365-Overview/operations/deployment-checklist/"
  };

  const recommendations = [
    { id: "licensing", product: "Microsoft 365 E5/E7", track: "Foundation", phase: 1, source: repositories.licensing, when: { m365: ["unknown", "none", "e5", "e7"] }, discovery: { m365: ["unknown"] }, ready: { m365: ["e5", "e7"] }, reason: "Validate service entitlements before designing controls or assigning rollout owners.", action: "Confirm current service plans and map required capabilities to E5, E7, or add-ons.", requires: [] },
    { id: "entra", product: "Microsoft Entra", track: "Identity", phase: 2, source: repositories.entra, when: { identity: ["unknown", "cloud", "hybrid", "other"], identityBaseline: ["unknown", "no", "partial", "yes"] }, discovery: { identity: ["unknown"], identityBaseline: ["unknown"] }, ready: { identityBaseline: ["yes"] }, reason: "Identity, authentication, and privileged access are prerequisites for every later campaign.", action: "Establish the tenant identity baseline, Conditional Access, MFA, and privileged access model.", requires: [] },
    { id: "defender", product: "Microsoft Defender", track: "Cloud workloads", phase: 3, source: repositories.defender, when: { cloudEstate: ["azure", "multi", "unknown"] }, discovery: { cloudEstate: ["unknown"] }, reason: "Cloud workloads need posture management and workload threat protection.", action: "Inventory subscriptions and workloads, select Defender plans, and pilot at limited scope.", requires: ["entra"] },
    { id: "intune", product: "Microsoft Intune", track: "Endpoint", phase: 3, source: repositories.intune, when: { devices: ["unmanaged", "partial", "managed", "unknown"] }, discovery: { devices: ["unknown"] }, ready: { devices: ["managed"] }, reason: "Managed device and application signals enable consistent access enforcement.", action: "Define enrollment, compliance, configuration, and app-protection rollout rings.", requires: ["entra"] },
    { id: "purview", product: "Microsoft Purview", track: "Data and compliance", phase: 3, source: repositories.purview, when: { data: ["required", "mature", "unknown"] }, discovery: { data: ["unknown"] }, ready: { data: ["mature"] }, reason: "Sensitive information requires discovery, classification, protection, and compliance controls.", action: "Identify priority data, regulations, owners, and a pilot classification and DLP scope.", requires: ["licensing", "entra"] },
    { id: "sentinel", product: "Microsoft Sentinel", track: "Security operations", phase: 4, source: repositories.sentinel, when: { soc: ["none", "other", "sentinel", "mature", "unknown"] }, discovery: { soc: ["unknown"] }, ready: { soc: ["sentinel", "mature"] }, reason: "Central detection, investigation, and response need an intentional SIEM operating model.", action: "Prioritize data sources, workspace architecture, analytics, incident ownership, and automation.", requires: ["entra"] },
    { id: "securityCopilot", product: "Microsoft Security Copilot", track: "Security AI", phase: 6, source: repositories.securityCopilot, when: { ai: ["security", "both"] }, ready: { soc: ["sentinel", "mature"] }, reason: "Security Copilot can accelerate analysts when governed data sources and response workflows exist.", action: "Validate roles, data sources, SCU capacity, plugin governance, and measurable analyst use cases.", requires: ["entra", "sentinel"] },
    { id: "agent365", product: "Microsoft Agent 365", track: "AI governance", phase: 6, source: repositories.agent365, when: { ai: ["agents", "both"] }, reason: "Enterprise agents require identity, inventory, lifecycle, data boundaries, and security governance.", action: "Define the agent control plane, registry, owners, approval lifecycle, telemetry, and data controls.", requires: ["licensing", "entra", "purview"] }
  ];

  return { version: "1.0.0", questions, recommendations, repositories };
});