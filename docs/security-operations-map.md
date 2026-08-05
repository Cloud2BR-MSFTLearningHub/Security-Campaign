# Security Operations Map

Use this map when the customer needs to collect signals, investigate incidents, automate response, or improve the daily work of a security operations team.

<div class="map-flow" markdown>
<div class="map-step"><strong>Which signals matter?</strong><span>Identity, endpoints, cloud, network, data, SaaS</span></div>
<div class="map-arrow">→</div>
<div class="map-step"><strong>Who responds?</strong><span>SOC, IT operations, cloud, network, partner</span></div>
<div class="map-arrow">→</div>
<div class="map-step map-target"><strong>Microsoft Sentinel</strong><span>Collect, detect, investigate, automate</span></div>
</div>

## Signal-to-operation map

| Customer service | Security element to examine | Start with |
| --- | --- | --- |
| Entra ID and Microsoft 365 | Authentication, identity protection, audit signals | Microsoft Sentinel Microsoft connectors and Entra incident process |
| Endpoints and servers | Endpoint alerts, device evidence, containment authority | Defender XDR integration and incident ownership |
| Azure, AWS, GCP, and hybrid workloads | Activity, posture, workload alerts, privileged actions | Cloud connectors, workspace design, and high-value analytics |
| Firewalls, VPNs, gateways, DNS, and network edge | Network visibility, retention, threat hunting, response playbooks | Sentinel network connectors and cost model |
| SaaS and third-party applications | Audit events, risky access, data events, API coverage | Sentinel connectors or a documented logging gap |
| Established SOC with repetitive work | Analyst triage, investigation, reporting, hunt workflows | [Microsoft Security Copilot](https://cloud2br-msftlearninghub.github.io/Security-Copilot-Overview/foundation/licensing-and-capacity-models/) after data and process readiness |

## Decision points

1. **Which incidents create the highest business disruption?** Start with detections and playbooks that answer those exact cases.
2. **Are identity, endpoint, cloud, network, and SaaS logs all useful at equal volume?** If no, onboard high-value sources first and model retention cost.
3. **Who owns an alert after it is created?** Define an authoritative queue, escalation rules, and service ownership before automation.
4. **Are analysts spending time on repeatable investigation or reporting tasks?** If yes, evaluate Security Copilot only after source quality, roles, and success measures are agreed.

## Bring to the discussion

- Incident backlog, response times, and top investigation types
- Current SIEM, SOC, MDR, and escalation model
- Connector inventory, data volumes, retention, and cost assumptions
- Automation candidates with approvals and rollback expectations

> **Outcome:** connect the right telemetry to accountable people and repeatable response before expanding analytics or AI.
