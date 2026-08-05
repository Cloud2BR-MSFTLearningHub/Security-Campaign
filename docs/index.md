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

Use this decision map to identify which security areas apply to the customer environment, then open the matching map for a detailed conversation.

<div class="decision-lanes" markdown>
<div class="lane lane-identity">
<span class="lane-eyebrow">01 · Identity and access</span>
<p class="lane-question">Who or what needs access?</p>
<div class="lane-step"><strong>Is MFA enforced for admins?</strong><span>No → start with Conditional Access and MFA</span></div>
<div class="lane-step"><strong>Are admin roles standing?</strong><span>Yes → move to just-in-time access with PIM</span></div>
<div class="lane-step"><strong>Do apps or agents need identity?</strong><span>Yes → govern workload identities</span></div>
<a class="lane-link" href="identity-access/">Open identity map →</a>
</div>
<div class="lane lane-endpoint">
<span class="lane-eyebrow">02 · Endpoints and devices</span>
<p class="lane-question">Are endpoints accessing company data?</p>
<div class="lane-step"><strong>Are corporate devices enrolled?</strong><span>No → start with Intune enrollment and compliance</span></div>
<div class="lane-step"><strong>Do personal devices access data?</strong><span>Yes → apply BYOD app protection policies</span></div>
<div class="lane-step"><strong>Are endpoint alerts investigated?</strong><span>No → expand Defender for Endpoint and SOC coverage</span></div>
<a class="lane-link" href="endpoint-map/">Open endpoint map →</a>
</div>
<div class="lane lane-cloud">
<span class="lane-eyebrow">03 · Cloud workloads</span>
<p class="lane-question">Are cloud services in scope?</p>
<div class="lane-step"><strong>What services are running?</strong><span>VMs, containers, databases, or storage → matching Defender plan</span></div>
<div class="lane-step"><strong>Are APIs internet-facing?</strong><span>Yes → review API security and workload identities</span></div>
<div class="lane-step"><strong>Is the estate multi-cloud or hybrid?</strong><span>Yes → unify posture with Defender for Cloud</span></div>
<a class="lane-link" href="cloud-workload-map/">Open cloud map →</a>
</div>
<div class="lane lane-data">
<span class="lane-eyebrow">04 · Data and AI</span>
<p class="lane-question">Is sensitive data or AI involved?</p>
<div class="lane-step"><strong>Can the customer name sensitive data?</strong><span>No → run a data taxonomy workshop first</span></div>
<div class="lane-step"><strong>Are DLP policies enforced?</strong><span>No → apply Purview sensitivity labels and DLP</span></div>
<div class="lane-step"><strong>Will agents access internal data?</strong><span>Yes → set agent governance and audit logging</span></div>
<a class="lane-link" href="data-ai-map/">Open data and AI map →</a>
</div>
<div class="lane lane-operations">
<span class="lane-eyebrow">05 · Security operations</span>
<p class="lane-question">Does the customer need detection or response?</p>
<div class="lane-step"><strong>Are key logs collected centrally?</strong><span>No → close gaps with Sentinel log sources</span></div>
<div class="lane-step"><strong>Is alert ownership clear and tested?</strong><span>No → define escalation paths and playbooks</span></div>
<div class="lane-step"><strong>Are analysts stuck on manual tasks?</strong><span>Yes → introduce Security Copilot and automation</span></div>
<a class="lane-link" href="security-operations-map/">Open operations map →</a>
</div>
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
