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

<div class="diagram-frame" markdown>
```mermaid
%%{init: {'flowchart': {'nodeSpacing': 32, 'rankSpacing': 65, 'curve': 'basis'}, 'themeVariables': {'fontSize': '15px'}}}%%
flowchart LR
    Start(["Start:\nwhat's in scope?"]):::start --> ID{Identity\nand access}:::idNode
    Start --> EP{Endpoints\nand devices}:::epNode
    Start --> CL{Cloud\nworkloads}:::clNode
    Start --> DA{Data\nand AI}:::daNode
    Start --> SO{Security\noperations}:::soNode

    ID --> ID_Q1{MFA enforced\nfor admins?}:::idNode
    ID_Q1 -->|No| ID_R1[["Start with Conditional\nAccess + MFA"]]:::idNode
    ID_Q1 -->|Yes| ID_Q2{Standing admin\nroles?}:::idNode
    ID_Q2 -->|Yes| ID_R2[["Move to PIM\njust-in-time access"]]:::idNode
    ID_Q2 -->|No| ID_R3[["Govern app and\nagent identities"]]:::idNode

    EP --> EP_Q1{Devices\nenrolled?}:::epNode
    EP_Q1 -->|No| EP_R1[["Start with Intune\nenrollment"]]:::epNode
    EP_Q1 -->|Yes| EP_Q2{BYOD accessing\ndata?}:::epNode
    EP_Q2 -->|Yes| EP_R2[["Apply BYOD app\nprotection"]]:::epNode
    EP_Q2 -->|No| EP_R3[["Expand Defender for\nEndpoint coverage"]]:::epNode

    CL --> CL_Q1{What services\nrun?}:::clNode
    CL_Q1 -->|VMs / servers| CL_R1[["Defender for\nServers"]]:::clNode
    CL_Q1 -->|Containers| CL_R2[["Defender for\nContainers"]]:::clNode
    CL_Q1 -->|Databases / storage| CL_R3[["Defender for Databases\n+ Storage"]]:::clNode
    CL_Q1 -->|Internet-facing APIs| CL_R4[["API security +\nworkload identities"]]:::clNode

    DA --> DA_Q1{Sensitive data\nnamed?}:::daNode
    DA_Q1 -->|No| DA_R1[["Run data taxonomy\nworkshop"]]:::daNode
    DA_Q1 -->|Yes| DA_Q2{DLP\nenforced?}:::daNode
    DA_Q2 -->|No| DA_R2[["Apply Purview labels\n+ DLP"]]:::daNode
    DA_Q2 -->|Yes| DA_R3[["Set agent governance\n+ audit logging"]]:::daNode

    SO --> SO_Q1{Logs collected\ncentrally?}:::soNode
    SO_Q1 -->|No| SO_R1[["Close gaps with\nSentinel"]]:::soNode
    SO_Q1 -->|Yes| SO_Q2{Alert ownership\nclear?}:::soNode
    SO_Q2 -->|No| SO_R2[["Define escalation\n+ playbooks"]]:::soNode
    SO_Q2 -->|Yes| SO_R3[["Introduce Security\nCopilot"]]:::soNode

    classDef start fill:#003366,color:#fff,stroke:#003366,stroke-width:1px;
    classDef idNode fill:#eaf2fa,stroke:#006f84,color:#0b3550;
    classDef epNode fill:#eef4e7,stroke:#4c6f28,color:#233611;
    classDef clNode fill:#f1ecf8,stroke:#7454a4,color:#33234a;
    classDef daNode fill:#fdf1e2,stroke:#a25d00,color:#4a2c00;
    classDef soNode fill:#fbeaee,stroke:#a13f55,color:#4a1926;
```
</div>

<div class="diagram-legend" markdown>
<a class="legend-chip legend-identity" href="identity-access/"><span></span>Identity and access</a>
<a class="legend-chip legend-endpoint" href="endpoint-map/"><span></span>Endpoints and devices</a>
<a class="legend-chip legend-cloud" href="cloud-workload-map/"><span></span>Cloud workloads</a>
<a class="legend-chip legend-data" href="data-ai-map/"><span></span>Data and AI</a>
<a class="legend-chip legend-operations" href="security-operations-map/"><span></span>Security operations</a>
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
