# Security Operations Map

**Why this matters:** Even if identity is strong, endpoints are managed, workloads are protected, and data is classified, attackers still get in. They exploit vulnerabilities, compromise credentials through phishing, or find misconfigurations. The question is not *if* you'll have a security incident, but *when* and how fast you'll detect and respond. A Security Operations Center (SOC) that can detect threats in minutes instead of weeks makes the difference between a contained incident and a major breach.

**What this covers:** Collecting security signals (logs, alerts, events) from across the environment, detecting threats (finding abnormal or malicious activity), investigating incidents (understanding the scope and impact), and automating response (containing threats before damage spreads).

**The security risk:** If you cannot see what's happening in your environment, you cannot defend it. A sophisticated attacker can operate for 200+ days undetected before the organization notices data was stolen. Without automated response, incident handling takes hours or days (disable account, isolate device, reset passwords). With automation, response can happen in minutes.

<div class="map-flow" markdown>
<div class="map-step"><strong>Which signals exist?</strong><span>Identity, endpoints, cloud, network, data, SaaS</span></div>
<div class="map-arrow">→</div>
<div class="map-step"><strong>Who investigates and responds?</strong><span>SOC, IT ops, cloud team, or managed service provider</span></div>
<div class="map-arrow">→</div>
<div class="map-step map-target"><strong>Microsoft Sentinel</strong><span>Collect, correlate, detect, investigate, automate</span></div>
</div>

**What the map shows:** Starting from security signals available in your environment (identity logs, endpoint alerts, cloud activity, network traffic), the map routes through response ownership (who investigates and takes action?). Both paths converge on Microsoft Sentinel, which ingests signals, detects threats, and automates response.

## Signal-to-operation map

| Customer capability | Common threats and gaps | Security element to examine | Recommended first conversation |
| --- | --- | --- | --- |
| **Identity and authentication signals** | Compromised password leads to account takeover, attackers use the account to access data, pivot to cloud, or modify policies. Weak MFA allows attackers to bypass authentication. | Authentication events (successful and failed sign-ins), anomalies (sign-in from unusual location or device, credential replay from impossible geographic locations), Conditional Access triggers, privileged role activation and use | Microsoft Sentinel + Microsoft Entra ID audit logs and risk events: detect and alert on sign-in anomalies, accelerate investigation of suspected account compromise |
| **Endpoint and device alerts** | Malware, ransomware, lateral movement, or data exfiltration. Attackers goal is often to gain persistence, steal data, or modify files. | Endpoint detection and response (EDR) alerts: malware, suspicious process execution, privilege escalation, network communication to known-bad IPs, data staging (bulk file moves or compression) | Sentinel + Defender for Endpoint integration: centralize alerts, correlate with other signals (did this endpoint's user just sign in from an unusual location?), and trigger automated response (isolate device) |
| **Cloud and Azure activity** | Unauthorized VM creation (attacker building crypto-mining infrastructure), resource deletion (attacker covering tracks or causing denial of service), privilege escalation (attacker modifying IAM roles), data exfiltration (attacker downloading large backups) | Azure activity logs (who created/deleted/modified resources and when?), privilege escalation patterns (assignment of Owner or Administrator roles), resource and data access patterns (bulk download, unusual export), suspicious resource types (large VM creation, VPN gateways, storage account export) | Sentinel cloud connectors: ingest Azure, AWS, GCP activity logs, detect unusual patterns (midnight resource deletion by a user who normally works 9-5 EST) |
| **Network and firewall signals** | Attackers often move laterally after compromising one host (e.g., compromise an employee laptop, pivot to the server network, steal data). Network monitoring can detect lateral movement, data exfiltration (large outbound transfer to unknown IP), and scanning (attacker probing for services). | Network flow data (NetFlow, syslog from firewalls, VPN logs), DNS queries (attacker resolving command-and-control domains), data exfiltration patterns (unusual large transfer to external IP), port scanning from internal hosts | Sentinel network connectors: ingest firewall, VPN, and DNS logs, detect anomalies (port scanning, unusual outbound data transfer, DNS tunneling) and correlate with endpoint alerts |
| **SaaS and third-party logs** | Attackers sometimes target SaaS because it's "in the cloud" and treated as lower-risk. They may compromise a SaaS account, modify permissions, or exfiltrate data. Many breaches are discovered via SaaS audit logs, not internal monitoring. | SaaS app activity (Salesforce, Slack, Atlassian, etc.): login events, data exports, permission changes (who now has access to the entire Salesforce database?), unusual access patterns (massive export of customer records) | Sentinel connectors to SaaS apps (if available) or webhook ingestion: centralize SaaS audit logs, correlate with identity and endpoint signals (did the same attacker compromise multiple SaaS accounts?) |
| **Data access and DLP signals** | Data exfiltration is often the goal of attacks. Detecting unauthorized data access or bulk export can catch attacks in progress. Conversely, excessive access logging can create alert fatigue and missed signals. | Data access events (who queried this database, who opened this sensitive file), Data Loss Prevention (DLP) blocks and exceptions, suspicious patterns (bulk download of customer records, export of database after midnight, access from new geographic location) | Sentinel + Purview audit logs + Defender signals: correlate data access with identity/network signals (did this user access customer data from a new country 2 minutes after a risky sign-in?) |
| **Established SOC analyzing alerts and hunting** | Alert fatigue: 10,000 alerts per day, but only 5 are true positives. Analysts spend time on false positives and miss real threats. Hunters find patterns manually by writing complex queries. Reporting is manual and error-prone. | Alert quality and volume (what % of alerts are actionable?), mean time to detect (MTTD) for known threats (how long before you find a compromised account?), mean time to respond (MTTR) to contained threats, analyst workload and turnover, high-value use cases (which threats matter most to the business?) | Sentinel + Security Copilot: filter noise (triage and deduplicate), accelerate investigation (Copilot explains findings and suggests next steps), and automate repeatable tasks (this looks like our standard insider-threat pattern; create an incident) |

## Decision points

### 1. Which incidents or threats create the highest business disruption?

**Why it matters:** You cannot monitor everything equally. Prioritize the signals and detections that address your highest-risk scenarios.

**Common scenarios:**
- Ransomware (disrupt production)
- Data theft (regulatory fine)
- Credential compromise (lateral movement)
- Privileged abuse (insider threat)
- Denial of service (website down)

**If no priorities are defined:**
- Ask: "If a production database went down today, what would be the business impact and recovery time?"
- "What threats keep the CISO awake at night?"
- "Have you had incidents that were especially costly or damaging?"
- Start with detections for those specific scenarios.

**If yes:**
- Map each scenario to required signals (e.g., ransomware requires endpoint alerts + network monitoring + backup auditing).
- Ensure those signals are collected.

---

### 2. Are logs from identity, endpoints, cloud, network, and SaaS all collected, or are there gaps?

**Why it matters:** An attacker may move through multiple systems (compromise account → download from endpoint → export from cloud → exfiltrate via network). If logs from any step are missing, you lose visibility.

**Common gaps:**
- "We have endpoint EDR but no network monitoring."
- "We log Azure but not AWS."
- "SaaS apps are managed by business units; we don't see their logs."

**If gaps exist:**
- Prioritize high-impact sources: identity (most attacks start here), endpoints (detect malware and lateral movement), cloud (detect unauthorized resource creation), network (detect data exfiltration).
- Plan to reduce gaps over time.

**If comprehensive:**
- Ensure retention is adequate (6-12 months minimum for forensics).
- Model retention and egress costs; they can be significant.

---

### 3. Who owns an alert after it's created? What's the decision tree?

**Why it matters:** Without clear ownership, alerts get lost or duplicated. If multiple people can respond, response is slow. If only one person can respond and they're on vacation, alerts queue up.

**Common confusion:**
- "Is this endpoint alert a true threat or a known exception?"
- "Should this trigger an incident or just add context to another investigation?"
- "If we isolate this device, will it break business-critical work?"

**If ownership is unclear:**
- Define an escalation path:
  - Analyst receives alert → assess severity and business impact.
  - High severity → immediate escalation to incident commander.
  - Medium severity → assigned to on-call engineer; investigate within 4 hours.
  - Low severity or exception → logged and closed.
  - Define who can auto-remediate (disable account) vs. who needs approval.

**If ownership is clear:**
- Document exceptions formally ("we receive X alerts per day, Y% are known exceptions, and here's why").
- Review and adjust quarterly.

---

### 4. Are analysts spending time on repeatable investigation or reporting tasks that could be automated?

**Why it matters:** Analysts are expensive and skilled. Using their time for manual data collection, formatting reports, or running the same queries is wasteful. Automation frees them for high-value work: investigating unusual anomalies, designing new detections, and improving processes.

**Common time-wasters:**
- "Every incident needs a 5-page report; we write it manually."
- "To investigate a file hash, we query 3 different tools and copy-paste results."
- "Monthly compliance reports are 40 hours of work."

**If yes:**
- Evaluate Security Copilot and Sentinel automation.
- Only automate after data quality, alert quality, and ownership are solid.
- (Automating a bad process faster is not progress.)

**If no:**
- You may be ready for Copilot now.
- Or the workload may be small enough that automation isn't the blocker.

## Bring to the discussion

**Current state inventory to gather:**

- Security incidents and trends
  - How many incidents in the past year?
  - Average detection time (minutes, hours, days)?
  - Response and resolution time?
  - Common root causes?

- Current monitoring and tools
  - What SIEM, SOC platform, or MSP?
  - Alerts per day?
  - % actionable vs. noise?

- Available logs and signals
  - Which sources feed into monitoring? (Entra ID, Defender for Endpoint, Azure activity, firewalls, VPN, SaaS apps, databases)
  - Which are missing?

- Team structure and capacity
  - How many analysts?
  - On-call 24/7 or business hours?
  - Experience level?
  - Known staffing gaps?

- Response and recovery
  - Documented playbooks for common incidents? (ransomware, credential compromise, data exfiltration)
  - How often are playbooks tested?

- Retention and compliance
  - How long are logs kept?
  - Regulatory retention requirements?
  - Annual cost?

- Automation and tooling
  - SOAR tools or Sentinel playbooks implemented?
  - If yes: What do they automate?
  - If no: What manual tasks could be automated?

**Conversation starters:**

- **Incident history:**
  - "Tell me about your most serious incident in the past 2 years."
  - "How was it detected?"
  - "How long from detection to containment?"
  - "What could have been done faster?"

- **Incident response speed:**
  - "If an attacker compromised a critical server right now, how would you detect it?"
  - "Who would you call? How long until the server is isolated?"

- **Alert volume and quality:**
  - "How many alerts does your team receive per day?"
  - "What % are false positives or known exceptions?"

- **SOC operations:**
  - "Do you have 24/7 monitoring?"
  - "If an incident happens at 2 AM on a Sunday, who responds?"

- **Incident playbooks:**
  - "Walk me through your incident response playbook for ransomware."
  - "How many manual steps? How many people are involved?"

- **AI and automation:**
  - "Are you looking at Security Copilot or other AI tools?"
  - "What problem are you trying to solve: alert fatigue, investigation speed, analyst shortage?"

**Planning the roadmap:**
- **Phase 1 (30 days):** Inventory available logs and signals. Define high-priority incident scenarios (ransomware, data theft, credential compromise). Estimate current detection and response times for each.
- **Phase 2 (60 days):** Implement Sentinel (or connect to existing SIEM). Ingest high-priority log sources (Entra, Endpoints, Cloud, Network). Create baseline analytics for top scenarios.
- **Phase 3 (90 days):** Build and test incident response playbooks. Define escalation and ownership. Implement automated containment (e.g., disable compromised account).
- **Phase 4 (ongoing):** Expand to additional log sources (SaaS, databases). Improve detection quality and reduce false positives. Evaluate Security Copilot to accelerate investigation and reduce analyst workload.

> **Outcome:** detect security threats in minutes instead of weeks, respond to contained incidents in minutes instead of hours, and keep analysts focused on high-value work instead of alert triage and manual reporting. The goal is to minimize time between attack and detection, and between detection and containment.
