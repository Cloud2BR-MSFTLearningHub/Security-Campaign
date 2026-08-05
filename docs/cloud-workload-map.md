# Cloud Workload Map

**Why this matters:** Cloud services (compute, containers, databases, storage, applications) power modern businesses. But they introduce new security challenges: misconfigured access, unpatched vulnerabilities, exposed credentials, and attack surfaces you cannot see without visibility tools. Organizations often discover cloud misconfigurations only after an attacker exploits them.

**What this covers:** Security posture (is your infrastructure configured securely?), workload protection (is your code and runtime free from vulnerabilities?), and exposure management (which of your services are internet-facing and at risk?).

**The security risk:** Cloud misconfigurations are one of the top attack vectors. Common scenarios include:
- Storage accounts with public access, exposing customer data.
- Virtual machines without patching, running exploitable code.
- Databases with weak authentication or overly broad access.
- Credentials (passwords, API keys) committed to code repositories.
- Container images with known vulnerabilities deployed into production.
- APIs internet-exposed without rate limiting or authentication.

<div class="map-flow" markdown>
<div class="map-step"><strong>Which cloud services exist?</strong><span>Compute, containers, data, storage, apps, network</span></div>
<div class="map-arrow">→</div>
<div class="map-step"><strong>Who owns each service and its security?</strong><span>Platform, application, data, network, DevOps teams</span></div>
<div class="map-arrow">→</div>
<div class="map-step map-target"><strong>Microsoft Defender for Cloud</strong><span>Visibility, posture assessment, workload protection</span></div>
</div>

**What the map shows:** Starting from your cloud service inventory, the map routes through ownership and accountability (who is responsible for securing this service?). Both paths converge on Defender for Cloud, which provides posture assessment (finding misconfigurations), workload protection (detecting and responding to runtime threats), and exposure management (identifying what's internet-facing and at risk).

## Service-to-security map

| Customer service | Common security risks | Security elements to examine | Recommended first conversation |
| --- | --- | --- | --- |
| **Virtual machines, Azure Arc servers, hybrid compute** | Unpatched OS (weeks or months behind), weak authentication, data at rest unencrypted, vulnerable services running, privilege escalation paths | Posture assessment (OS version, patching currency), vulnerability scanning, endpoint protection, privileged access configuration, network access rules | [Microsoft Defender for Servers](https://cloud2br-msftlearninghub.github.io/Defender-Setup-Overview/): patch assessment, vulnerability findings, endpoint detection and response |
| **Kubernetes, containers, container registries** | Vulnerable images deployed (never scanned), insecure cluster configuration (overly permissive RBAC), runtime escape vulnerabilities, registry without access controls | Image scanning (find CVEs before deployment), cluster posture (RBAC, network policies, admission control), runtime threat detection, registry authentication and encryption | Microsoft Defender for Containers: image scanning, cluster posture, runtime protection |
| **SQL, Cosmos DB, analytics, data warehouses** | Overly permissive database access (default passwords, broad role assignments), data exposure (backups unencrypted), suspicious queries or access patterns indicating compromise or insider threat, unpatched database engine | Database assessment (access control, authentication methods, encryption), data discovery and classification (what sensitive data is stored?), suspicious activity monitoring (unusual queries, bulk export attempts) | Defender plans for databases + Microsoft Purview data governance: who can access what data, what data is sensitive, approval workflows for broad access |
| **Storage accounts, object stores, file shares, backups** | Public access (accidentally enabled, giving attackers customer data or backups), unencrypted data, malware-infected files, missing backups or untested recovery | Posture assessment (public access, encryption at rest and in transit), sensitive data classification, malware scanning, backup configuration and recovery testing, lifecycle policies (who can delete critical backups?) | Defender for Storage + Microsoft Purview: find sensitive data, assess public exposure, monitor for suspicious bulk access |
| **Web apps, Functions, APIs, serverless workloads** | Internet-exposed without authentication, secrets hardcoded in code (database passwords, API keys exposed in GitHub), vulnerable dependencies (libraries with known CVEs), no rate limiting (DDoS risk), privilege escalation via application bugs | Posture assessment (authentication required? Rate limiting?), application secrets scanning (are passwords in code?), dependency vulnerability scanning (SBOM analysis), workload identity configuration (app should use Managed Identity, not app-owned secrets) | Defender for Cloud app posture + Entra workload identities: how does the app authenticate, what secrets does it need, can we eliminate secrets entirely? |
| **Firewalls, VPNs, gateways, load balancers, DNS** | Misconfigured rules (too permissive, outdated), unlogged traffic (what happened?), external access not monitored (attackers pivoting from internet to internal), DNS poisoning or redirection | Network telemetry and logging (all traffic logged and searchable), posture assessment (rules reviewed regularly for business relevance), response capability (if suspicious traffic detected, who investigates?), DDoS protection | Microsoft Sentinel connectors for network devices + Defender for Cloud posture: centralize network logs, detect anomalies (unusual geographic access, data exfiltration patterns) |

## Decision points

**1. Does the customer run virtual machines, servers, or hybrid compute?**
- **Why it matters:** Servers are high-value targets. An attacker who gains access to a server can steal data, run code, and pivot to other systems. Keeping servers patched and monitored is essential.
- **Common scenario:** A server running a web application gets compromised by an unpatched vulnerability. Attackers gain code execution, install persistence, and exfiltrate customer data—all before the organization detects it.
- **What to examine:** Which operating systems and versions are running? How current are patches (measured in days/weeks behind latest)? Is endpoint detection and response (EDR) installed? Do logs feed into a SIEM or SOC?
- **Starting conversation:** "When was the oldest server last patched? Are there servers that haven't been patched in 6+ months? What's the business reason?" "If a server is compromised, how long until you detect it?"

**2. Does the customer run containers or Kubernetes?**
- **Why it matters:** Containers and Kubernetes enable speed but introduce complexity. Container images can contain vulnerable libraries; Kubernetes clusters can be misconfigured to allow privilege escalation or lateral movement.
- **Common scenario:** A container image built 6 months ago is deployed to production without rescanning. It contains a library with a known critical vulnerability. An attacker exploits it and escapes the container to the host.
- **What to examine:** Are container images scanned before deployment and regularly scanned while running? Is the Kubernetes cluster configuration reviewed for overly permissive RBAC or network policies? Who owns container registry access?
- **Starting conversation:** "How do you know if a running container has a vulnerable library? How often are running containers rescanned?" "Can a compromised container break out to the host or other containers?"

**3. Does the customer store business-critical or regulated data (customer records, health info, financial data, IP) in cloud services?**
- **Why it matters:** Data breaches are expensive and carry regulatory penalties. Misconfigurations that expose data (e.g., public storage account) are among the fastest-growing breach causes.
- **Common scenario:** A database replica or backup is restored to a temporary storage account for testing. Access is set to "public" by mistake. Attackers enumerate storage accounts, find it, and exfiltrate customer credit cards or health records.
- **What to examine:** Where does sensitive data live (databases, storage, SaaS)? Is it classified and tagged? Who can access it? Are backups encrypted and tested for recovery? Are data access patterns monitored?
- **Starting conversation:** "Can you list every database and storage account that holds customer data? For each one, who has access and how is that verified quarterly?" "If a backup goes missing, how quickly would you know?"

**4. Are applications or APIs internet-facing (customers or partners access them)?**
- **Why it matters:** Internet-facing services are attack targets. Attackers probe them for vulnerabilities, weak authentication, rate-limiting gaps, and credential exposure.
- **Common scenario:** An API endpoint accepts a user ID parameter without validation. An attacker incrementally tries all user IDs to enumerate the system and steal data for each one. No rate limiting meant the attack ran for hours before detection.
- **What to examine:** Which services are internet-exposed? Do they require authentication? Are there rate limits? Are secrets (passwords, API keys) hardcoded or stored securely? Are application logs generated and monitored?
- **Starting conversation:** "If you list all your APIs and web apps, which ones face the internet? For each one, what authentication is required? Can an unauthenticated user access any data or trigger any actions?" "Have you scanned your code repositories for exposed credentials?"

**5. Is the infrastructure multi-cloud (Azure, AWS, GCP) or hybrid (on-premises + cloud)?**
- **Why it matters:** Multi-cloud and hybrid environments introduce complexity: different tooling, policy inconsistencies, and blind spots. Attackers can exploit inconsistent security across clouds.
- **Common scenario:** A company uses Azure and AWS. The organization enforces encryption in Azure but misses it in AWS. Attackers target the AWS deployment and exfiltrate unencrypted data.
- **What to examine:** Which clouds and subscriptions/accounts are in scope? Are policies consistent (patching, encryption, access control)? Is there a single pane of glass for visibility, or do teams monitor each cloud separately? Who owns the multi-cloud security strategy?
- **Starting conversation:** "Do you have subscriptions, accounts, or regions that are 'in shadow' (not actively monitored)? Which team owns security governance across all clouds?" "If you had to report compliance status tomorrow, would you have all the data?"

## Bring to the discussion

**Current state inventory:**
- Cloud infrastructure inventory: which subscriptions/accounts/projects exist, how many VMs/containers/databases/storage accounts, and which regions/clouds are in use.
- Workload criticality: which applications and data are mission-critical, and what's the business impact of downtime or data loss?
- Security posture findings: if you've run assessments before, what were the top findings? (e.g., X% of VMs unpatched, Y databases with overly broad access, Z storage accounts publicly accessible)
- Vulnerability and patch status: what's the median patch age across your servers? Any servers with critical-severity unpatched vulnerabilities?
- Service owners: who owns each cloud subscription, application, database, and is responsible for its security compliance?
- Remediation expectations: if a high-severity vulnerability is found, what's the SLA to remediate? (24 hours, 7 days?)
- Logging and monitoring: where do cloud and application logs go? How long are they retained? Is anyone actively monitoring them for suspicious activity?
- Backup and recovery: where are backups stored (onsite, different cloud, different region)? When were they last tested end-to-end?

**Conversation starters:**
1. "Walk me through a recent compromise or close call. What was exposed, how long before you detected it, and what could have helped you detect it sooner?"
2. "If I gained valid credentials for one of your cloud accounts, what's the fastest attack path to steal customer data? How would you detect me?"
3. "Which of your servers or databases haven't been touched in 2+ years? Why are they still running? Can they be decommissioned?"
4. "What's your multi-cloud or hybrid security strategy? Do you have one team owning it or separate teams per cloud?" "Is there a configuration that's secure in Azure but not enforced in AWS?"
5. "If you lost all production data today (ransomware, malicious deletion), how fast could you recover? Has that been tested end-to-end?"

**Planning the roadmap:**
- **Phase 1 (30 days):** Inventory all cloud subscriptions and resources. Run a Defender for Cloud security posture assessment. Identify and triage the top 10 findings.
- **Phase 2 (60 days):** Define remediation owners for each finding. Create a patching strategy (critical CVEs in 7 days, high in 14 days, etc.).
- **Phase 3 (90 days):** Implement workload protection (Defender for Servers/Containers/Databases) and enable logging and monitoring. Integrate logs into Sentinel for SOC visibility.
- **Phase 4 (ongoing):** Establish quarterly reviews of posture findings, monitor cloud compliance, and adjust Defender plans based on workload changes.

> **Outcome:** gain visibility into cloud misconfigurations, understand which workloads are at highest risk, assign ownership and SLAs for remediation, and choose Defender plans that address material exposure.
