# Data and AI Map

Use this map when the customer handles sensitive information in Microsoft 365, cloud storage, databases, SaaS, analytics platforms, copilots, or enterprise agents.

<div class="map-flow" markdown>
<div class="map-step"><strong>Where is the data?</strong><span>Microsoft 365, endpoints, SaaS, databases, storage</span></div>
<div class="map-arrow">→</div>
<div class="map-step"><strong>What is sensitive?</strong><span>Privacy, financial, health, IP, regulated data</span></div>
<div class="map-arrow">→</div>
<div class="map-step map-target"><strong>Microsoft Purview</strong><span>Discover, classify, protect, retain, investigate</span></div>
</div>

## Follow the route

| What the customer has | Security element to examine | Start with |
| --- | --- | --- |
| Microsoft 365 collaboration and documents | Sensitivity labels, DLP, audit, eDiscovery, retention | [Microsoft Purview](https://cloud2br-msftlearninghub.github.io/Purview-Setup-Overview/overview/) |
| Cloud databases, analytics, or data platforms | Data discovery, ownership, classification, access risk | Purview data governance and relevant Defender data plans |
| Storage accounts, file shares, or object storage | Sensitive-data exposure, public sharing, malware, retention | Purview plus Defender for Storage |
| SaaS applications handling company data | Data discovery, access governance, DLP, auditability | Purview and Entra application access controls |
| Copilot, agents, or AI tools | Data boundaries, access permissions, agent lifecycle, monitoring | Purview and Entra before enabling broad AI access |

## Decision points

1. **Can the customer name the data that creates the most business or regulatory risk?** If no, begin with a data-owner workshop and a small discovery scope.
2. **Are sensitivity labels and DLP policies tested before enforcement?** If no, use simulation and an exception process before blocking activity.
3. **Does sensitive data leave Microsoft 365 through endpoints, SaaS, or cloud storage?** If yes, map the entire data path and its controls.
4. **Will an agent access internal data or act through connected tools?** If yes, establish identity, classification, approval, and monitoring rules before production.

## Bring to the discussion

- Sensitive-data taxonomy and data-owner list
- Regulatory and contractual obligations
- Existing labels, DLP policies, audit logs, and retention rules
- Data-flow diagrams for priority processes and planned agents

> **Outcome:** protect the most important data first with controls that have named owners, tested exceptions, and evidence of operation.
