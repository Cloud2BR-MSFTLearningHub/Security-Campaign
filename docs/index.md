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

Use this mind map to spot the biggest gap in each area, then open the matching map for a detailed conversation. Click a branch title to jump straight to its map, and drag or scroll to explore.

<div class="markmap-frame" markdown>
```markmap
# Security decision map
## Start with the customer environment
### Who or what needs access?
#### People, guests, administrators, applications, or agents
##### [Identity and access](identity-access/)
###### Is phishing-resistant MFA enforced for high-risk users and administrators?
####### No: establish Entra authentication methods and Conditional Access
####### Yes: verify passwordless adoption and coverage
###### Can administrators obtain permanent broad roles?
####### Yes: move standing access to just-in-time PIM elevation
####### No: review privileged roles and emergency access regularly
###### Do applications, services, or agents act for the business?
####### Yes: inventory workload identities, permissions, secrets, and agent boundaries
### Are endpoints accessing company data?
#### Corporate devices, BYOD, shared devices, or unmanaged devices
##### [Endpoints and devices](endpoint-map/)
###### Are all corporate devices enrolled and compliant?
####### No: start with Intune enrollment, encryption, updates, and antivirus baselines
####### Yes: resolve recurring compliance failures before adding stricter access rules
###### Do personal devices need corporate data access?
####### Yes: apply Intune app protection and Conditional Access
###### Can unmanaged or non-compliant devices access sensitive data?
####### Yes: require a compliant device, apply app protection, or block the access path
###### Are endpoint alerts investigated and remediated?
####### No: define alert ownership and expand Defender for Endpoint coverage
### Are cloud services in scope?
#### Compute, containers, databases, storage, applications, APIs, or network services
##### [Cloud workloads](cloud-workload-map/)
###### Does the customer run virtual machines, servers, or hybrid compute?
####### Yes: assess patches, vulnerabilities, endpoint protection, and privileged access
####### Start with Defender for Servers
###### Does the customer run containers or Kubernetes?
####### Yes: scan images, review cluster posture, and enable runtime protection
####### Start with Defender for Containers
###### Does cloud storage or a database hold critical or regulated data?
####### Yes: review public access, encryption, data classification, backups, and suspicious access
####### Start with Defender for Storage or database protection
###### Are applications or APIs internet-facing?
####### Yes: review authentication, secrets, dependencies, rate limiting, and logging
### Is sensitive data or AI involved?
#### Microsoft 365, SaaS, databases, storage, endpoints, copilots, or agents
##### [Data and AI](data-ai-map/)
###### Can the customer name the data with the highest business or regulatory risk?
####### No: run a data-owner workshop and create a data taxonomy
####### Yes: map data types, locations, owners, access, retention, and obligations
###### Are sensitivity labels and DLP tested before enforcement?
####### No: begin in report-only mode, review impact, then enforce refined policies
###### Does sensitive data leave Microsoft 365 through endpoints, SaaS, or cloud storage?
####### Yes: extend DLP and Conditional Access across the full data path
###### Will an agent or copilot access internal data or connected tools?
####### Yes: define data boundaries, workload identity, approvals, audit logs, and rollback
### Does the customer need detection or response?
#### Identity, endpoint, cloud, network, data, or SaaS signals
##### [Security operations](security-operations-map/)
###### Which incident types create the highest business disruption?
####### Prioritize ransomware, data theft, credential compromise, privileged abuse, or outage scenarios
###### Are identity, endpoint, cloud, network, and SaaS logs collected?
####### No: close the highest-impact logging gaps first with Sentinel connectors
###### Who owns an alert after it is created?
####### Ownership unclear: define severity, escalation paths, on-call cover, and containment authority
###### Are analysts spending time on repetitive investigation or reporting?
####### Yes: automate stable playbooks and evaluate Security Copilot after data and alert quality are sound
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
