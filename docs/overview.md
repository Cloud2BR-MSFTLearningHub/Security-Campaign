# Methodology

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

Security Campaign is a set of condition-led decision maps. It is designed for
joint conversations between business stakeholders, architects, security teams,
and administrators.

## Why it matters

Product-by-product planning can hide dependencies. Identity, licensing, ownership,
and operating readiness should be understood before advanced controls or AI
capabilities are introduced. The map makes those dependencies visible while
keeping each specialist setup hub authoritative for implementation detail.

## How the maps work

Each map begins with a customer condition: a service, data type, device group,
identity, or operating need. It then links that condition to a security element
worth examining and names the evidence and owners needed to decide scope.

The maps are intentionally not a product selector. A product should be discussed
only when the corresponding customer condition and operating ownership exist.

## Campaign sequence

1. Discover and validate licensing, goals, owners, and evidence.
2. Establish identity and access foundations.
3. Protect cloud workloads, endpoints, applications, and data.
4. Detect, investigate, and respond through governed security operations.
5. Govern access, data, devices, exceptions, and assurance evidence.
6. Optimize mature workflows with Security Copilot and Agent 365.

Not every customer needs every route. Identity and ownership normally precede
controls; controls and telemetry precede broad automation and AI use cases.

## Privacy and boundaries

The maps do not authenticate to a Microsoft tenant, call Microsoft Graph, or
store customer information. Capture customer notes only in the approved project
or engagement system.

!!! warning
 A recommendation is not evidence of configuration, entitlement, compliance,
 or product availability. Validate all production decisions with tenant evidence,
 commercial agreements, regional requirements, and official Microsoft guidance.

## Get started

1. Identify the customer services, users, data, and operational needs in scope.
2. Open the matching decision map and work through its decision points.
3. Assign evidence and ownership for the relevant security element.
4. Open the linked specialist hub for implementation details.
5. Record assumptions, approvals, exclusions, and the first pilot scope.

## Business example

> A hybrid organization with unmanaged devices, Azure and AWS workloads, a
> third-party SIEM, and a new enterprise-agent program receives Entra and licensing
> foundations first. Defender, Intune, Purview, and Sentinel form the control and
> operations layers. Agent 365 follows only after its identity and data-governance
> dependencies are visible in the roadmap.
