# Cloud Workload Map

Use this map for Azure, AWS, GCP, hybrid servers, containers, databases, storage, applications, APIs, and cloud network controls.

<div class="map-flow" markdown>
<div class="map-step"><strong>Which service exists?</strong><span>Compute, containers, data, storage, apps, network</span></div>
<div class="map-arrow">→</div>
<div class="map-step"><strong>Who owns remediation?</strong><span>Platform, application, data, network, or DevOps teams</span></div>
<div class="map-arrow">→</div>
<div class="map-step map-target"><strong>Defender for Cloud</strong><span>Posture, workload protection, exposure management</span></div>
</div>

## Service-to-security map

| Customer service | Security elements to examine | Recommended first conversation |
| --- | --- | --- |
| Virtual machines, Azure Arc servers, hybrid compute | Posture, vulnerability, endpoint protection, privileged access | Microsoft Defender for Servers and Microsoft Defender for Endpoint |
| Kubernetes, containers, container registries | Cluster posture, image hygiene, runtime protection, DevOps handoff | Microsoft Defender for Containers |
| SQL, Cosmos DB, analytics, data warehouses | Data exposure, vulnerability, suspicious access, ownership | Defender plans for databases plus Purview for data classification |
| Storage accounts, object stores, file shares, backups | Public access, sensitive data, malware, lifecycle and recovery | Defender for Storage plus Microsoft Purview |
| Web apps, Functions, APIs, serverless workloads | Internet exposure, secrets, identity, runtime signals | Defender for Cloud and Entra workload identities |
| Firewalls, VPNs, gateways, load balancers | Network telemetry, configuration drift, response ownership | Microsoft Sentinel connectors and Defender for Cloud posture |

## Decision points

1. **Does the customer run compute or servers?** Review Defender for Servers, Defender for Endpoint, and the server ownership model.
2. **Does the customer run containers or Kubernetes?** Review Defender for Containers and the CI/CD-to-runtime ownership boundary.
3. **Does the customer store business or regulated data in cloud services?** Pair the workload discussion with Purview classification and data protection.
4. **Are applications or APIs internet-facing?** Inventory exposed services, secrets, service principals, logging, and remediation paths.
5. **Is the estate multi-cloud or hybrid?** Decide which subscriptions, accounts, projects, and Arc-connected servers are in the first onboarding wave.

## Bring to the discussion

- Subscription, account, project, and resource inventory
- Architecture diagrams and workload criticality
- Current vulnerability, posture, and exposure findings
- Service owners and remediation service-level expectations
- Existing logging destinations and retention requirements

> **Outcome:** choose the workloads and Defender plans that address material exposure, then assign remediation ownership before onboarding.
