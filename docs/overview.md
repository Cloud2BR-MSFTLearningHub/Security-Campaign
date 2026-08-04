# Methodology

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-08-04

----------

<details markdown>
<summary>List of references</summary>

- [Microsoft 365 E5 and E7 Overview](https://cloud2br-msftlearninghub.github.io/M365-E5-E7-Overview/)
- [Microsoft Entra Overview](https://cloud2br-msftlearninghub.github.io/Entra-Overview/)
- [Microsoft Defender Setup Overview](https://cloud2br-msftlearninghub.github.io/Defender-Setup-Overview/)
- [Microsoft Intune Overview](https://cloud2br-msftlearninghub.github.io/Intune-Overview/)
- [Microsoft Purview Setup Overview](https://cloud2br-msftlearninghub.github.io/Purview-Setup-Overview/)
- [Microsoft Sentinel Setup Overview](https://cloud2br-msftlearninghub.github.io/Sentinel-Setup-Overview/)
- [Microsoft Security Copilot Overview](https://cloud2br-msftlearninghub.github.io/Security-Copilot-Overview/)
- [Microsoft Agent 365 Overview](https://cloud2br-msftlearninghub.github.io/Agent365-Overview/)

</details>

Security Campaign turns a small set of customer conditions into an explainable,
ordered implementation map. It is designed for joint conversations between
business stakeholders, architects, security teams, and administrators.

## Why it matters

Product-by-product planning can hide dependencies. Identity, licensing, ownership,
and operating readiness should be understood before advanced controls or AI
capabilities are introduced. The map makes those dependencies visible while
keeping each specialist setup hub authoritative for implementation detail.

## How it works

The questionnaire records explicit values, including `Unknown`. The browser-only
rule engine evaluates each product against three types of conditions:

- **Applicability** determines whether a hub belongs in the campaign.
- **Readiness** identifies a capability that exists and should be optimized.
- **Dependencies** identify prerequisite hubs that must be addressed first.

Each applicable recommendation receives one status:

| Status | Meaning |
| --- | --- |
| Recommended | The condition creates a current implementation action. |
| Discovery needed | Evidence is missing; resolve the unknown before committing scope. |
| Prerequisite gap | The capability is relevant but a required foundation is outside the current result set. |
| Established / optimize | The capability exists; validate operation and improve it. |

All result views use the same evaluated result set. The matrix is useful for
qualification, tracks group work by domain, and the roadmap orders work by phase.

## Campaign sequence

1. Discover and validate licensing, goals, owners, and evidence.
2. Establish identity and access foundations.
3. Protect cloud workloads, endpoints, applications, and data.
4. Detect, investigate, and respond through governed security operations.
5. Govern access, data, devices, exceptions, and assurance evidence.
6. Optimize mature workflows with Security Copilot and Agent 365.

Not every assessment produces an item in every phase. Empty phases are retained
in the roadmap to make the model and sequencing explicit.

## Privacy and boundaries

The assessment does not authenticate to a Microsoft tenant, call Microsoft Graph,
or store customer answers on a server. State exists only in the current browser
page. Print, Markdown, and JSON exports are generated locally.

!!! warning
 A recommendation is not evidence of configuration, entitlement, compliance,
 or product availability. Validate all production decisions with tenant evidence,
 commercial agreements, regional requirements, and official Microsoft guidance.

## Get started

1. Complete every condition using the closest available answer.
2. Review discovery items and assign evidence owners.
3. Use the matrix to agree scope and the roadmap to agree sequencing.
4. Open the linked specialist hubs for implementation details.
5. Export the result and record assumptions, approvals, and exclusions.

## Business example

> A hybrid organization with unmanaged devices, Azure and AWS workloads, a
> third-party SIEM, and a new enterprise-agent program receives Entra and licensing
> foundations first. Defender, Intune, Purview, and Sentinel form the control and
> operations layers. Agent 365 follows only after its identity and data-governance
> dependencies are visible in the roadmap.
