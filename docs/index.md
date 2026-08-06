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
## [Identity and access](identity-access/)
- MFA gap → start with Conditional Access and MFA
- Standing admin access → move to PIM just-in-time access
- Apps or agents ungoverned → set up workload identities
## [Endpoints and devices](endpoint-map/)
- Devices not enrolled → start with Intune enrollment
- BYOD accessing data → apply app protection policies
- Alerts not investigated → expand Defender for Endpoint
## [Cloud workloads](cloud-workload-map/)
- VMs or servers → Defender for Servers
- Containers or Kubernetes → Defender for Containers
- Databases or storage → Defender for Databases and Storage
- Internet-facing APIs → API security and workload identities
## [Data and AI](data-ai-map/)
- Sensitive data not classified → run a data taxonomy workshop
- DLP not enforced → apply sensitivity labels and DLP
- Agents access internal data → set agent governance and audit logging
## [Security operations](security-operations-map/)
- Logs not centralized → close gaps with Sentinel
- Alert ownership unclear → define escalation paths and playbooks
- Analysts stuck on manual tasks → introduce Security Copilot
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
