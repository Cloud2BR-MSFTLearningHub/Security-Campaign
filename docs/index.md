# Security Campaign

Use these decision maps to turn a customer environment into the security conversations worth having next. Start with what they operate, follow the route, and open the specialist implementation hub only when the route applies.

<div class="route-grid" markdown>
<a class="route-card route-foundation" href="identity-access/"><span>01</span><strong>Identity and access</strong><small>Users, admins, guests, apps, and agents</small><b>Start here →</b></a>
<a class="route-card route-endpoint" href="endpoint-map/"><span>02</span><strong>Endpoints and devices</strong><small>Corporate devices, BYOD, shared devices</small><b>Open map →</b></a>
<a class="route-card route-cloud" href="cloud-workload-map/"><span>03</span><strong>Cloud workloads</strong><small>Compute, containers, data, storage, APIs, network</small><b>Open map →</b></a>
<a class="route-card route-data" href="data-ai-map/"><span>04</span><strong>Data and AI</strong><small>Microsoft 365, SaaS, data platforms, agents</small><b>Open map →</b></a>
<a class="route-card route-operations" href="security-operations-map/"><span>05</span><strong>Security operations</strong><small>Signals, investigations, response, automation</small><b>Open map →</b></a>
</div>

## Security decision map

<div class="markmap-frame" markdown>
```markmap
---
markmap:
    initialExpandLevel: 2
---
# Security decision map
## Identity and access
- Question: Who needs access to business services or data?
    - Employees, guests, administrators, applications, or agents
    - [Open the identity map](identity-access/)
- Is phishing-resistant MFA enforced for administrators and high-risk users?
    - No: establish authentication methods and Conditional Access before advanced security services
    - Yes: verify passwordless coverage, exclusions, and risky-sign-in controls
- Can administrators obtain permanent broad roles?
    - Yes: use just-in-time elevation, approvals, access reviews, and emergency access accounts
- Do applications or agents act on behalf of the business?
    - Yes: inventory workload identities, reduce permissions, rotate credentials, and define agent boundaries
- Recommendation
    - [Microsoft Entra](https://cloud2br-msftlearninghub.github.io/Entra-Overview/): MFA, Conditional Access, identity governance, PIM, workload identities
    - [Microsoft Agent 365](https://cloud2br-msftlearninghub.github.io/Agent365-Overview/): use only after agent identities, permissions, data boundaries, and owners are defined
## Devices and endpoint protection
- Question: Do corporate, personal, shared, or unmanaged devices access company data?
    - [Open the endpoint map](endpoint-map/)
- Are corporate devices enrolled and compliant?
    - No: establish device inventory, Intune enrollment, encryption, update rings, and antivirus baselines
- Do personal devices need corporate data access?
    - Yes: apply app protection, conditional access, and selective wipe rather than full device control
- Can unmanaged devices access regulated or sensitive data?
    - Yes: require a compliant device, restrict sessions, apply app protection, or block the access path
- Are malware, ransomware, or suspicious-device alerts investigated?
    - No: assign response ownership and establish endpoint containment procedures
- Recommendation
    - [Microsoft Intune](https://cloud2br-msftlearninghub.github.io/Intune-Overview/): enrollment, compliance, configuration, update, and app-protection policies
    - [Microsoft Defender](https://cloud2br-msftlearninghub.github.io/Defender-Setup-Overview/): endpoint detection, vulnerability management, investigation, and containment
    - [Microsoft Entra](https://cloud2br-msftlearninghub.github.io/Entra-Overview/): require compliant or trusted devices for sensitive access
## Cloud workloads and applications
- Question: Are servers, containers, databases, storage, applications, APIs, or network services in scope?
    - [Open the cloud workload map](cloud-workload-map/)
- Are virtual machines, servers, or hybrid compute operated?
    - Yes: assess patches, vulnerabilities, endpoint protection, privileged access, and exposure
- Are containers or Kubernetes operated?
    - Yes: scan images, review cluster posture and RBAC, and enable runtime protection
- Do databases or storage hold critical or regulated data?
    - Yes: assess public access, encryption, backups, classification, and suspicious access
- Are applications or APIs internet-facing?
    - Yes: verify authentication, managed identities, secret storage, dependencies, rate limiting, and logs
- Recommendation
    - [Microsoft Defender](https://cloud2br-msftlearninghub.github.io/Defender-Setup-Overview/): Defender for Cloud, Servers, Containers, Storage, and databases as the workload requires
    - [Microsoft Entra](https://cloud2br-msftlearninghub.github.io/Entra-Overview/): workload identities, least privilege, and application access control
    - [Microsoft Sentinel](https://cloud2br-msftlearninghub.github.io/Sentinel-Setup-Overview/): collect and correlate cloud, network, and application security signals
## Data, compliance, and AI
- Question: Does the environment hold sensitive data or use copilots and agents?
    - Microsoft 365, SaaS, endpoints, databases, storage, copilots, or agents
    - [Open the data and AI map](data-ai-map/)
- Can the customer name the data with the highest business or regulatory risk?
    - No: run a data-owner workshop and create a data taxonomy before enforcing controls
- Are sensitivity labels and DLP policies tested before enforcement?
    - No: begin in report-only mode, refine for business impact, then enforce
- Can sensitive data leave through endpoints, SaaS, email, or cloud storage?
    - Yes: extend classification, DLP, Conditional Access, and monitoring across the full data path
- Will an agent or copilot access internal data or connected tools?
    - Yes: define data boundaries, least-privilege identity, approvals, auditing, versioning, and rollback
- Recommendation
    - [Microsoft Purview](https://cloud2br-msftlearninghub.github.io/Purview-Setup-Overview/): discover, classify, label, protect, retain, and audit sensitive data
    - [Microsoft Agent 365](https://cloud2br-msftlearninghub.github.io/Agent365-Overview/): govern enterprise agents after identity and data controls are in place
    - [Microsoft Entra](https://cloud2br-msftlearninghub.github.io/Entra-Overview/): agent and application identities with least privilege
    - [Microsoft Defender](https://cloud2br-msftlearninghub.github.io/Defender-Setup-Overview/): protect endpoint, cloud, and SaaS paths carrying sensitive data
## Detection, response, and security operations
- Question: Does the customer need to detect, investigate, contain, or recover from threats?
    - Identity, endpoint, cloud, network, data, and SaaS signals
    - [Open the security operations map](security-operations-map/)
- Which scenarios create the highest business disruption?
    - Ransomware, data theft, credential compromise, privileged abuse, fraud, or service outage
- Are the required logs collected from identity, endpoints, cloud, network, data, and SaaS?
    - No: onboard the highest-impact sources first and validate retention, cost, and ownership
- Who owns an alert after it is created?
    - Ownership unclear: define severity, escalation, on-call coverage, evidence requirements, and containment authority
- Are analysts repeatedly performing the same investigation or reporting work?
    - Yes: automate stable, well-owned playbooks after alert and data quality are proven
- Recommendation
    - [Microsoft Sentinel](https://cloud2br-msftlearninghub.github.io/Sentinel-Setup-Overview/): centralize signals, detect threats, investigate incidents, and automate playbooks
    - [Microsoft Defender](https://cloud2br-msftlearninghub.github.io/Defender-Setup-Overview/): provide endpoint, identity, cloud, and SaaS detection and response signals
    - [Microsoft Security Copilot](https://cloud2br-msftlearninghub.github.io/Security-Copilot-Overview/): accelerate mature analyst investigations, triage, hunting, and reporting; do not use it as a substitute for missing telemetry or ownership
## Recommended rollout order
- 1. Establish [Microsoft Entra](https://cloud2br-msftlearninghub.github.io/Entra-Overview/) identity, MFA, Conditional Access, privileged access, and workload-identity foundations
- 2. Apply [Microsoft Intune](https://cloud2br-msftlearninghub.github.io/Intune-Overview/) and [Microsoft Defender](https://cloud2br-msftlearninghub.github.io/Defender-Setup-Overview/) to protect devices and workloads in scope
- 3. Apply [Microsoft Purview](https://cloud2br-msftlearninghub.github.io/Purview-Setup-Overview/) to classify and protect the data that matters most
- 4. Use [Microsoft Sentinel](https://cloud2br-msftlearninghub.github.io/Sentinel-Setup-Overview/) when signals require centralized detection, investigation, and response
- 5. Introduce [Microsoft Security Copilot](https://cloud2br-msftlearninghub.github.io/Security-Copilot-Overview/) and [Microsoft Agent 365](https://cloud2br-msftlearninghub.github.io/Agent365-Overview/) after ownership, identity, data boundaries, and telemetry are operating reliably
```
</div>
<script defer src="https://cdn.jsdelivr.net/npm/markmap-autoloader@0.17"></script>

## Start with the customer environment

<div class="decision-tree" markdown>
<div class="tree-node"><strong>Who or what needs access?</strong><a href="identity-access/">Users, admins, apps, or agents → Identity and access</a></div>
<div class="tree-node"><strong>Are endpoints accessing company data?</strong><a href="endpoint-map/">Corporate, personal, or shared devices → Endpoints and devices</a></div>
<div class="tree-node"><strong>Are cloud services in scope?</strong><a href="cloud-workload-map/">Compute, containers, databases, storage, APIs, or network → Cloud workloads</a></div>
<div class="tree-node"><strong>Is sensitive data or AI involved?</strong><a href="data-ai-map/">Microsoft 365, SaaS, data platforms, copilots, or agents → Data and AI</a></div>
<div class="tree-node"><strong>Does the customer need detection or response?</strong><a href="security-operations-map/">Identity, endpoint, cloud, network, or SaaS signals → Security operations</a></div>
</div>

## Use the maps in a customer conversation

1. Ask which services, data, and users are in scope.
2. Open the matching map and work through its decision points.
3. Capture named owners, evidence, and the first viable implementation scope.
4. Use the linked specialist hub for product-specific design and deployment guidance.

!!! info
    These maps support discovery and planning. They are not a tenant scan, compliance assessment, or licensing commitment. Confirm production decisions with customer evidence and Microsoft guidance.
