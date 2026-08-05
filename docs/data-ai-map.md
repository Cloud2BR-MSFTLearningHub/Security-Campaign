# Data and AI Map

**Why this matters:** Data is the crown jewel of modern businesses. Customer information, financial records, health data, intellectual property, and trade secrets all carry value and regulatory requirements. If attackers steal data, the business faces financial loss, reputation damage, and regulatory penalties. Employees who mishandle data (send it to the wrong recipient, leave it on an unencrypted device, share it overly broadly) create similar risk.

**What this covers:** Data discovery and classification (where is sensitive data and who knows it?), protection (preventing unauthorized access and exfiltration), governance (who can access what and with what approval?), and retention and audit (keeping data as long as required and proving who accessed it).

**The security risk:** Data breaches are expensive. Average cost is $5M+ including investigation, notification, credit monitoring, and reputation damage. Regulatory penalties for health (HIPAA) or financial data (PCI) can double or triple that cost. And data theft is often the final goal of an attack: attackers compromise identity and endpoints specifically to reach and exfiltrate data.

**Why AI and agents matter:** Copilots and agents can greatly improve business efficiency, but they need access to data. If an agent accesses company secrets, customer data, or financial records without proper boundaries, the business loses control over who can see what and why.

<div class="map-flow" markdown>
<div class="map-step"><strong>Where is the data?</strong><span>Microsoft 365, cloud databases, storage, SaaS apps, endpoints</span></div>
<div class="map-arrow">→</div>
<div class="map-step"><strong>What is sensitive and regulated?</strong><span>Privacy, financial, health, IP, customer data</span></div>
<div class="map-arrow">→</div>
<div class="map-step map-target"><strong>Microsoft Purview</strong><span>Discover, classify, protect, retain, audit</span></div>
</div>

**What the map shows:** Starting from where your data lives (Microsoft 365, databases, cloud storage, SaaS), the map routes through data sensitivity (what data is business-critical or regulated?). Both paths converge on Microsoft Purview, which finds sensitive data, labels it, applies protection (DLP), manages retention, and audits access.

## Follow the route

| What the customer has | Why it matters | Security element to examine | Start with |
| --- | --- | --- | --- |
| **Microsoft 365 collaboration (Teams, SharePoint, Exchange)** | Teams messages and documents are often the most sensitive data in a business. They contain customer commitments, strategy, pricing, and personal information. File sharing is easy but over-sharing is common. | Sensitivity labels (which files need which label?), Data Loss Prevention (DLP) policies (prevent sending health records to personal email?), sharing controls (should anyone be able to share files externally?), retention (how long before old Teams messages are deleted?) | [Microsoft Purview sensitivity labels](https://cloud2br-msftlearninghub.github.io/Purview-Setup-Overview/overview/), DLP policies, and audit logs |
| **Cloud databases and analytics platforms** | Databases hold operational data and often have sensitive values (credit cards, health records, user emails). Analytics platforms join multiple sources and may inadvertently combine sensitive data. Who can query databases and see results is often not governed. | Data discovery (can you find which databases hold sensitive data?), classification (which columns contain personally identifiable info or regulated data?), access governance (who can query databases and why?), suspicious query monitoring (bulk export attempts, privilege escalation queries) | Purview data map and Microsoft Defender for databases |
| **Cloud storage (blob, S3, etc.) and file shares** | Storage often holds backups, archive data, raw logs, or files that were moved "temporarily" and forgotten. Public access misconfigurations expose data. Ransomware or malicious actors often target backups first. | Data discovery (find storage containing sensitive data), classification (tag files containing customer records or health data), public access assessment (is any storage accidentally world-readable?), retention policy (delete old backups safely and test recovery), immutable backups (prevent deletion/encryption by attackers) | Purview data map + Defender for Storage: find sensitive data, block public access, monitor for suspicious bulk operations |
| **SaaS applications** | Companies often use SaaS outside of IT (Shadow IT). Salesforce might hold customer data, Slack might hold strategy discussions, and SharePoint might hold IP. These apps often have different access controls and audit capabilities than Microsoft 365. | SaaS app inventory (which apps have access to company data?), data types in each app, access governance (who can access and from where?), audit trail (can you prove who accessed customer data and when?), data classification and DLP in each app | Purview SaaS app discovery and Microsoft Defender for Cloud Apps |
| **Copilots and AI agents** | AI models learn from training data, and that training data can leak information. Agents have access to data and tools; if an agent is compromised, attackers can use it to access data and perform actions. If an agent isn't properly scoped, it might give answers based on customer data or trade secrets to users who shouldn't see them. | Agent data boundaries (which data sources can this agent access?), identity and permissions (what identity does the agent use, and does it have least privilege?), approval workflow (who approves agents accessing sensitive data?), monitoring and audit (who used the agent and what did they ask?), version control and rollback (can we revert if an agent misbehaves?) | Purview data governance + Entra workload identities + Sentinel audit logs: establish guardrails before AI agents access sensitive data |
| **Emails and messaging** | Email is often both evidence (used in eDiscovery for legal holds) and a risk vector (phishing, credential theft, data exfiltration). Data Loss Prevention can prevent sending credit cards to personal email or forwarding company secrets. | Retention policies (what email must be kept for legal holds, and for how long?), DLP rules (prevent sending PII or financial data outside the organization), audit logging (who forwarded this email, and when?), phishing and mail-flow rules (block suspicious sender patterns or attachment types) | Exchange Online and Purview retention and audit policies |
| **Unstructured data on endpoints** | Laptops and desktops often hold sensitive files: proposals with pricing, customer contact lists, health records, financial data. Unencrypted devices lose data to theft. Lack of visibility means you cannot assess what's at risk. | Endpoint DLP (prevent copying sensitive files to USB drives or cloud storage), device encryption (bitlocker on Windows), data classification (what files on endpoints are sensitive?), data access auditing (who has copied sensitive files?) | Purview endpoint DLP + Intune device configuration |

## Decision points

**1. Can the customer name the data that creates the most business or regulatory risk?**
- **Why it matters:** If you cannot name it, you cannot classify it, protect it, or audit access to it. A data governance program starts with understanding what matters most.
- **If no:** Begin with a data-owner workshop. Ask: "If customer credit cards were stolen, what's the business impact?" "If trade secrets leaked, how much would that cost?" "What regulatory data does the organization hold (health, financial, personal)?" Use this to prioritize.
- **If yes:** Document the data types, where they live, who accesses them, retention requirements, and regulatory obligations. Create a simple matrix: data type × business impact × regulation.

**2. Are sensitivity labels and DLP policies tested in simulation before enforcement?**
- **Why it matters:** DLP blocks activity. If a policy is too broad, it will block legitimate business work and frustrate users. If it's too narrow, it won't protect sensitive data. Testing first in report-only mode lets you see real-world impact before enforcement.
- **Common scenario:** DLP blocks sending any email with a credit card number. But legitimate business (customer billing confirmation, payment receipt) sends emails with card numbers. Without testing, the policy either fails (too broad) or users find workarounds (too narrow).
- **If no:** Implement policies in report-only mode for 2-4 weeks. Review logs to see how many times the policy would have blocked legitimate activity. Refine the policy (perhaps cardholder data is OK in certain contexts or to certain recipients), then enforce.
- **If yes:** Document the testing process. Periodically review policy hits to ensure they're still detecting the right risks and not creating unnecessary friction.

**3. Does sensitive data leave Microsoft 365 through endpoints, SaaS, or cloud storage?**
- **Why it matters:** Data protection is only effective if it follows the data. If sensitive files are stored in Microsoft 365 with DLP, but users download them, print them, or email them to personal accounts, the protection is bypassed.
- **Common scenario:** A file is classified as "Confidential - Customer Data." DLP prevents sending it to external email addresses. But a user downloads the file, uploads it to personal Dropbox, and shares the Dropbox link externally. DLP never sees it.
- **What to examine:** Map the data flow: Microsoft 365 (stored) → downloaded to endpoint (email, backup, personal cloud)? Sent to SaaS app? → cloud storage (Azure, AWS)?  Apply controls at each step: device DLP, app-based protection, cloud storage public access blocking.
- **If yes:** Trace the full data path. Add DLP controls to endpoints (prevent download to USB, prevent upload to untrusted cloud storage). Implement app-level protection (Intune MAM) for mobile devices. Restrict cloud storage access via Conditional Access.

**4. Will an agent or copilot access internal data or act through connected tools?**
- **Why it matters:** Agents are powerful but new. An agent with overly broad access or missing audit controls can expose data or perform actions no one intended.
- **Common scenario:** A finance agent is given access to all cost centers to provide budget reports. An attacker compromises the agent's identity and uses it to approve high-value payments on behalf of executives. No approval workflow or audit trail.
- **If yes:** Before deploying:
  - Define data boundaries (which databases, files, SaaS apps can the agent query?).
  - Use Entra workload identities so the agent has a least-privilege identity (not a shared admin account).
  - Require approval for sensitive actions (approve payments over $X, escalate to manager).
  - Log all agent activity in Sentinel. Review audit logs weekly.
  - Implement a versioning and rollback process (can you revert if an agent misbehaves?).
- **If no:** Still plan for it. Agents are becoming common; governance should be in place before broad adoption.

## Bring to the discussion

**Current state inventory:**
- **Sensitive data taxonomy:** What data types does the organization hold? (customer records, financial data, health data, IP, trade secrets, employee records)
- **Data location map:** Where does each data type live? (Microsoft 365, databases, storage accounts, SaaS apps, endpoints)
- **Regulatory obligations:** Which laws or standards apply? (GDPR for EU residents, CCPA for California residents, HIPAA for health data, PCI for payment cards, SOC 2 if you process client data)
- **Data owner list:** For each sensitive data type, who is accountable for classification, access decisions, retention, and incident response?
- **Current classification:** How many files in Microsoft 365 are classified? How many of those have sensitivity labels applied? How many SaaS apps hold data and are included in governance?
- **DLP implementation:** Are any DLP policies enforced (not just in report-only mode)? How many incidents do they block per week, and are those incidents legitimate or false positives?
- **Audit and retention:** How long are audit logs kept? Can you answer "who accessed this customer record on this date" for any specific file or database query?
- **Incident history:** Have you had data breaches, regulatory fines, or customer complaints about unauthorized data access? What was the root cause and time to detection?
- **AI and agent plans:** Are there pilot projects for copilots or agents? What data would they access? Who approved it?

**Conversation starters:**
1. "If I had a customer's credit card number, where might it be stored today? (email, database, spreadsheet, SaaS app) How would you find and protect it?"
2. "Describe your last data breach or close call. What was the trigger, what data was at risk, and how fast did you detect it?"
3. "Which employee can access which customer data? Are access decisions documented and approved, or inherited from role assignment?"
4. "If we need to prove GDPR compliance to a regulator, what evidence would you provide that customer data was accessed only by authorized people?"
5. "Are there any SaaS apps (Salesforce, Slack, Zendesk, etc.) that hold company data but are not included in your data governance program?"

**Planning the roadmap:**
- **Phase 1 (30 days):** Define sensitive data taxonomy and data owners. Create a data map (where does sensitive data live?).
- **Phase 2 (60 days):** Implement sensitivity labels for key data types. Deploy DLP rules in report-only mode; monitor for false positives.
- **Phase 3 (90 days):** Enforce DLP policies. Establish regular access reviews (who should access this data?). Implement retention policies.
- **Phase 4 (ongoing):** Add endpoint DLP, enable audit monitoring, plan for SaaS data governance. Before deploying copilots or agents, establish data-boundary controls and audit logging.

> **Outcome:** know what sensitive data the organization holds, where it lives, who can access it, why they need access, and that access is audited. Use this foundation to protect the data that matters most and meet regulatory obligations.
