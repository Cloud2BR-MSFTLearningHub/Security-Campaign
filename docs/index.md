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

Use this map to spot the biggest gap in each area, then open the matching map for a detailed conversation.

<div class="flow-diagram" markdown>

<div class="flow-row flow-identity" markdown>
<div class="flow-node flow-category"><span class="flow-icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11 12 20 3M17 6l2 2M14.5 8.5l2 2"/></svg></span><strong>Identity and access</strong></div>
<div class="flow-arrow">→</div>
<div class="flow-node flow-question">What's the biggest identity gap today?</div>
<div class="flow-outcomes">
<div class="flow-outcome-row"><div class="flow-node flow-outcome">No MFA on admins → start with Conditional Access and MFA</div></div>
<div class="flow-outcome-row"><div class="flow-node flow-outcome">Standing admin access → move to PIM just-in-time access</div></div>
<div class="flow-outcome-row"><div class="flow-node flow-outcome">Apps or agents ungoverned → set up workload identities</div></div>
</div>
</div>
<a class="flow-open-link" href="identity-access/">Open identity map →</a>

<div class="flow-row flow-endpoint" markdown>
<div class="flow-node flow-category"><span class="flow-icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="10" rx="1.2"/><path d="M2 19h20"/></svg></span><strong>Endpoints and devices</strong></div>
<div class="flow-arrow">→</div>
<div class="flow-node flow-question">What's the biggest device gap today?</div>
<div class="flow-outcomes">
<div class="flow-outcome-row"><div class="flow-node flow-outcome">Devices not enrolled → start with Intune enrollment</div></div>
<div class="flow-outcome-row"><div class="flow-node flow-outcome">BYOD accessing data → apply app protection policies</div></div>
<div class="flow-outcome-row"><div class="flow-node flow-outcome">Alerts not investigated → expand Defender for Endpoint</div></div>
</div>
</div>
<a class="flow-open-link" href="endpoint-map/">Open endpoint map →</a>

<div class="flow-row flow-cloud" markdown>
<div class="flow-node flow-category"><span class="flow-icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg></span><strong>Cloud workloads</strong></div>
<div class="flow-arrow">→</div>
<div class="flow-node flow-question">Which services need protection?</div>
<div class="flow-outcomes">
<div class="flow-outcome-row"><div class="flow-node flow-outcome">VMs or servers → Defender for Servers</div></div>
<div class="flow-outcome-row"><div class="flow-node flow-outcome">Containers or Kubernetes → Defender for Containers</div></div>
<div class="flow-outcome-row"><div class="flow-node flow-outcome">Databases or storage → Defender for Databases and Storage</div></div>
<div class="flow-outcome-row"><div class="flow-node flow-outcome">Internet-facing APIs → API security and workload identities</div></div>
</div>
</div>
<a class="flow-open-link" href="cloud-workload-map/">Open cloud map →</a>

<div class="flow-row flow-data" markdown>
<div class="flow-node flow-category"><span class="flow-icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.6"/></svg></span><strong>Data and AI</strong></div>
<div class="flow-arrow">→</div>
<div class="flow-node flow-question">What's the data risk today?</div>
<div class="flow-outcomes">
<div class="flow-outcome-row"><div class="flow-node flow-outcome">Sensitive data not classified → run a data taxonomy workshop</div></div>
<div class="flow-outcome-row"><div class="flow-node flow-outcome">DLP not enforced → apply sensitivity labels and DLP</div></div>
<div class="flow-outcome-row"><div class="flow-node flow-outcome">Agents access internal data → set agent governance and audit logging</div></div>
</div>
</div>
<a class="flow-open-link" href="data-ai-map/">Open data and AI map →</a>

<div class="flow-row flow-operations" markdown>
<div class="flow-node flow-category"><span class="flow-icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></svg></span><strong>Security operations</strong></div>
<div class="flow-arrow">→</div>
<div class="flow-node flow-question">What's the detection gap?</div>
<div class="flow-outcomes">
<div class="flow-outcome-row"><div class="flow-node flow-outcome">Logs not centralized → close gaps with Sentinel</div></div>
<div class="flow-outcome-row"><div class="flow-node flow-outcome">Alert ownership unclear → define escalation paths and playbooks</div></div>
<div class="flow-outcome-row"><div class="flow-node flow-outcome">Analysts stuck on manual tasks → introduce Security Copilot</div></div>
</div>
</div>
<a class="flow-open-link" href="security-operations-map/">Open operations map →</a>

</div>

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
