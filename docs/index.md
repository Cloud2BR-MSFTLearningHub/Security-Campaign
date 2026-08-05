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

```mermaid
flowchart TD
    Start([Start]) --> Q1{Who or what\nneeds access?}

    Q1 -->|Users, admins,\nguests or apps| Q2{Are identities\nmanaged in\nEntra ID?}
    Q2 -->|Yes| Q3{Is MFA\nenforced?}
    Q3 -->|No| ID1[Identity and access:\nStart with MFA and\nConditional Access]
    Q3 -->|Yes| Q4{Are admin roles\npermanent?}
    Q4 -->|Yes| ID2[Identity and access:\nPrivileged Identity\nManagement]
    Q4 -->|No| Q5{Do apps or\nagents need\nidentity?}
    Q5 -->|Yes| ID3[Identity and access:\nWorkload identities\nand agent governance]
    Q2 -->|No, legacy or\nhybrid| ID4[Identity and access:\nHybrid identity\nand attack surface]

    Q1 -->|Endpoints or\ndevices| Q6{Are corporate\ndevices enrolled?}
    Q6 -->|No| EP1[Endpoints:\nIntune enrollment\nand compliance]
    Q6 -->|Yes| Q7{Do personal\ndevices access\ncompany data?}
    Q7 -->|Yes| EP2[Endpoints:\nBYOD app\nprotection policies]
    Q7 -->|No| Q8{Are endpoint\nalerts investigated?}
    Q8 -->|No| EP3[Endpoints:\nDefender for Endpoint\ncoverage and SOC]

    Q1 -->|Cloud services\nor workloads| Q9{What services\nare running?}
    Q9 -->|VMs or\nhybrid servers| CL1[Cloud workloads:\nDefender for\nServers]
    Q9 -->|Containers or\nKubernetes| CL2[Cloud workloads:\nDefender for\nContainers]
    Q9 -->|Databases or\nstorage| CL3[Cloud workloads:\nDefender for\nDatabases and Storage]
    Q9 -->|APIs or\ninternet-facing apps| CL4[Cloud workloads:\nAPI security and\nworkload identities]
    Q9 -->|Multi-cloud\nor hybrid| CL5[Cloud workloads:\nDefender for Cloud\nmulti-cloud posture]

    Q1 -->|Sensitive data\nor AI agents| Q10{Can the customer\nname the sensitive\ndata they hold?}
    Q10 -->|No| DA1[Data and AI:\nData taxonomy\nworkshop first]
    Q10 -->|Yes| Q11{Are DLP policies\nenforced?}
    Q11 -->|No| DA2[Data and AI:\nPurview sensitivity\nlabels and DLP]
    Q11 -->|Yes| Q12{Will agents or\ncopilots access\ninternal data?}
    Q12 -->|Yes| DA3[Data and AI:\nAgent governance\nand audit logging]

    Q1 -->|Detection or\nresponse gap| Q13{Are logs from\nidentity, endpoints,\nand cloud collected?}
    Q13 -->|No or gaps| SO1[Security operations:\nSentinel log sources\nand coverage gaps]
    Q13 -->|Yes| Q14{Is alert ownership\nclear and tested?}
    Q14 -->|No| SO2[Security operations:\nEscalation paths\nand playbooks]
    Q14 -->|Yes| Q15{Are analysts\nhandling manual\nrepetitive tasks?}
    Q15 -->|Yes| SO3[Security operations:\nSecurity Copilot\nand automation]

    style Start fill:#003366,color:#fff,stroke:#003366
    style ID1 fill:#eaf2fa,stroke:#004a99
    style ID2 fill:#eaf2fa,stroke:#004a99
    style ID3 fill:#eaf2fa,stroke:#004a99
    style ID4 fill:#eaf2fa,stroke:#004a99
    style EP1 fill:#e8f3e8,stroke:#4c6f28
    style EP2 fill:#e8f3e8,stroke:#4c6f28
    style EP3 fill:#e8f3e8,stroke:#4c6f28
    style CL1 fill:#f0ebf8,stroke:#7454a4
    style CL2 fill:#f0ebf8,stroke:#7454a4
    style CL3 fill:#f0ebf8,stroke:#7454a4
    style CL4 fill:#f0ebf8,stroke:#7454a4
    style CL5 fill:#f0ebf8,stroke:#7454a4
    style DA1 fill:#fdf3e3,stroke:#a25d00
    style DA2 fill:#fdf3e3,stroke:#a25d00
    style DA3 fill:#fdf3e3,stroke:#a25d00
    style SO1 fill:#fceef0,stroke:#a13f55
    style SO2 fill:#fceef0,stroke:#a13f55
    style SO3 fill:#fceef0,stroke:#a13f55
```

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
