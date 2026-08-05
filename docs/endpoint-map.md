# Endpoint and Device Map

**Why this matters:** Endpoints (laptops, phones, tablets, shared devices) are where users access company data and authenticate their identities. If an endpoint is compromised, attackers gain access to data, credentials, and the ability to move laterally into cloud services and networks. Managing endpoints, verifying they are kept up to date, compliant with policies, and free of malware, is critical.

**What this covers:** Device enrollment and management (ensuring devices meet security standards), compliance verification (is this device allowed to access sensitive data?), and endpoint protection (detecting and responding to threats).

**The security risk:** Unmanaged or non-compliant devices are frequently compromised by malware, ransomware, or theft. A stolen unmanaged laptop with cached credentials can give attackers weeks of unauthorized access. A compromised endpoint can be used to steal data, impersonate users, or pivot to cloud services and networks.

<div class="map-flow" markdown>
<div class="map-step"><strong>Devices in scope?</strong><span>Corporate, personal, shared, cloud-based, mobile</span></div>
<div class="map-arrow">→</div>
<div class="map-step"><strong>Ownership and management model?</strong><span>Fully managed, BYOD, shared, or unmanaged</span></div>
<div class="map-arrow">→</div>
<div class="map-step map-target"><strong>Intune + Defender</strong><span>Enrollment, compliance, threat detection, response</span></div>
</div>

**What the map shows:** Starting from what devices exist in your environment, the map routes through ownership and management decisions (corporate, personal, shared) and converges on Microsoft Intune (device management) and Microsoft Defender (endpoint protection) as the platform.

## Follow the route

| What the customer has | Why it matters | Security element to examine | Start with |
| --- | --- | --- | --- |
| Corporate laptops or mobiles | These are often the entry point for attackers. They hold cached credentials, stored data, and can access cloud services. Keeping them updated and compliant directly reduces risk. | Enrollment rates (are all laptops enrolled?), configuration compliance (do all devices have disk encryption, updated OS, antivirus?), auto-update policies, device inventory | [Microsoft Intune device management](https://cloud2br-msftlearninghub.github.io/Intune-Overview/implementation/compliance-and-conditional-access/): enrollment flows, compliance policies, update rings |
| BYOD (bring-your-own-device) accessing Microsoft 365 data | Personal devices are outside your control. They may be shared with family, used on untrusted networks, or run outdated OS versions. You cannot manage the device itself, but you can protect the company data on it. | Application-level protection (data doesn't leave company apps, selective wipe if device is lost), Conditional Access (only managed/compliant devices access sensitive data), corporate account isolation | Intune app protection policies: how to protect data without managing the entire device |
| Shared or kiosk devices (e.g., sales floors, call centers) | Shared devices have multiple users and often run in public areas. Attackers may modify shared devices, install malware, or use them to pivot. | Shared-device mode (who's signed in and what data persists after sign-out?), app restrictions, device-reset policies, local admin restrictions | Intune device configuration: shared-device settings, app restrictions, auto-reset and sign-out policies |
| Unmanaged devices accessing sensitive data | If you cannot manage a device (contractor laptop, partner iPad), you must verify device health before granting access to sensitive data. | Device compliance evaluation (the device reports its OS, antivirus, encryption status), risk-based Conditional Access (allow access only if device meets minimum security baseline), step-up authentication | Entra Conditional Access with Intune compliance signals: require managed devices OR enforce additional authentication |
| Endpoint alerts or ransomware concerns | When an endpoint shows signs of compromise (unusual process, lateral movement, command-and-control communication), rapid investigation and response are critical. Delays give attackers time to spread. | Endpoint detection and response (EDR): who monitors alerts, how fast do they investigate, what containment actions are available (isolate device, kill process, quarantine file)? | Microsoft Defender for Endpoint: alert investigation, containment and remediation, integration with SOC |
| Browser and web-based attacks | Users spend significant time in web browsers. Attackers use malicious websites, drive-by downloads, and phishing links to compromise endpoints. | Browser isolation (untrusted sites run in a sandbox), zero-trust browser controls, cloud-based proxy, phishing and malware filtering | Microsoft Defender for Cloud Apps or endpoint browser protection |
| Ransomware-specific concerns | Ransomware encrypts files and demands payment. Some families target backups first to make recovery impossible. Prevention, detection, and backup resilience are all needed. | Ransomware behavior detection (file encryption, mass file changes), backup strategy (offline backups not connected to production), recovery testing | Defender for Endpoint ransomware behavior detection and Intune backup/recovery policies |

## Decision points

### 1. Are all corporate devices enrolled and reporting compliant with your policies?

**Why it matters:** Enrollment means the device is registered and Intune can inventory it, apply policies, and verify it meets security standards. Devices not enrolled are invisible; you cannot enforce updates, encryption, or compliance.

**If no:**
- Define enrollment groups (all laptops enroll, rollout timeline).
- Create compliance policies (require Windows 10+, disk encryption, antivirus, 30-day security updates).
- Provide a help-desk enrollment path for support.

**If yes:**
- Review non-compliance trends.
- Why are devices failing compliance? (Updates delayed? Old OS? Encryption disabled?)
- Fix the root cause, not just the symptom.

---

### 2. Do personal devices (BYOD) need to access corporate data like Microsoft 365 or company apps?

**Why it matters:** You cannot fully manage personal devices (no control over OS, browser, or home network). But you can require app-level protection and conditional access checks.

**If yes:**
- Implement app-level protection (Microsoft Intune app protection policies) instead of full device management.
- This protects company data without controlling the personal device.
- Pair with Conditional Access to step-up authentication if the device seems risky.

**If no:**
- Still plan for it. Many organizations end up allowing BYOD over time.
- Have a policy framework ready.

---

### 3. Is access to finance, customer data, health records, or regulated information permitted from unmanaged or non-compliant devices?

**Why it matters:** If an attacker compromises an unmanaged device or gains access to a lost device, sensitive data is at risk. Compliance status (encrypted disk, up-to-date OS, antivirus running) is a reasonable trust signal.

**If yes (currently allowed):**
- This is a material risk.
- Decide: require device enrollment, implement device-trust conditional access (allow only compliant devices), or block access entirely.
- The answer depends on business needs and risk tolerance.

**If no:**
- Enforce this decision in Conditional Access.
- Document exceptions and owners for any approved unmanaged access.

---

### 4. Are endpoint alerts (suspicious files, lateral movement, malware) investigated and remediated by someone?

**Why it matters:** Alerts without investigation are wasted visibility. Attackers often operate for weeks or months before detection. Fast investigation and containment reduce exposure time.

**If no:**
- Review Defender for Endpoint coverage.
- Establish an on-call owner (SOC, IT ops, MDR provider) who investigates high-severity alerts within 1 hour.
- Define a remediation workflow (isolate device, kill process, wipe file).

**If yes:**
- Review alert volume, mean time to detect (MTTD), and mean time to respond (MTTR).
- Are alerts actionable?
- Are tools integrated (can SOC isolate a device from the alert console?)?
- Is the owner trained?

## Bring to the discussion

**Current state inventory to gather:**

- Device inventory and enrollment
  - How many devices (corporate, BYOD, shared, contractors)?
  - Split by OS (Windows, macOS, iOS, Android).
  - Enrollment rates for each group.

- Compliance and security posture
  - What percentage of enrolled devices meet baseline compliance policy?
  - Which policies are most commonly violated (outdated OS, encryption disabled, antivirus off)?
  - Do you have EDR (endpoint detection and response) deployed?

- BYOD and external device management
  - Do you allow personal devices to access company data?
  - If yes, what data and how is access controlled?
  - How do you verify external devices are safe?

- Support and incident capacity
  - How many help desk staff support enrollment, Intune, and device issues?
  - Who monitors endpoint alerts and how fast?
  - Have you had endpoint compromises, ransomware, or lost/stolen devices?

**Conversation starters:**

1. **Device security:**
   - "If a laptop gets stolen today, what's your recovery plan?"
   - "Can an attacker use cached credentials to access company data or cloud services?"

2. **Incident response:**
   - "When you discover malware on a device, who gets called?"
   - "How long does investigation and remediation take?"

3. **Compliance baseline:**
   - "What does a compliant device look like in your organization?"
   - "(e.g., Windows 11, encrypted disk, Windows Defender running, latest patches)"

4. **External device access:**
   - "Do contractors, consultants, or VPN users access company data?"
   - "How do you verify those devices are safe?"

5. **Disaster recovery:**
   - "What's your ransomware incident plan?"
   - "Where are backups stored and are they tested regularly?"

**Planning the roadmap:**

- **Phase 1:** Enroll all corporate-owned devices; define a baseline compliance policy.
- **Phase 2:** Implement Conditional Access to require compliant devices for sensitive data access.
- **Phase 3:** Add endpoint detection and response (EDR) for real-time threat investigation.
- **Phase 4:** Introduce BYOD with app-level protection if business needs require it.

> **Outcome:** define which devices can access which data, what compliance means in your organization, and who investigates endpoint threats.
