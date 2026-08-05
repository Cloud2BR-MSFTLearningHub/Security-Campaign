# Identity and Access Map

**Why start here?** Identity is the control plane for every later control. If attackers compromise an administrator account or gain unauthorized access to applications and data, every other security control becomes less effective. Identity security must be your foundation; everything else builds on it.

**What this covers:** Authentication (verifying who someone is), authorization (what they can access), and governance (managing who has what role). This map helps you understand your current state across workforce identities, administrators, applications, and emerging AI agents.

**The security risk:** Compromised identities are the most common attack path. Weak authentication (password-only), standing administrator privileges, and unmanaged application access create material risk. The longer an attacker has a valid identity, the more damage they can cause.

<div class="map-flow" markdown>
<div class="map-step"><strong>Workforce sign-in</strong><span>Employees, contractors, guests, workforce users</span></div>
<div class="map-arrow">→</div>
<div class="map-step"><strong>Privileged or sensitive roles?</strong><span>Yes: require additional controls</span></div>
<div class="map-arrow">→</div>
<div class="map-step map-target"><strong>Microsoft Entra</strong><span>Authentication, access policies, identity governance</span></div>
</div>

**What the map shows:** Starting from your workforce sign-ins (the most common authentication flow), the map routes to administrator or privileged-role decisions, which require stronger controls. Both paths converge on Microsoft Entra ID as the central identity service.

## Follow the route

| What the customer has | Why it matters | Security element to examine | Start with |
| --- | --- | --- | --- |
| Microsoft 365 users, Azure users, guests, or SaaS users | These identities access company data and services every day. Weak authentication here creates immediate risk. | Authentication methods (MFA, passwordless), Conditional Access policies blocking risky sign-ins | [Microsoft Entra](https://cloud2br-msftlearninghub.github.io/Entra-Overview/implementation/tenant-setup-and-baseline/) tenant setup and MFA |
| Hybrid Active Directory and Entra ID | Synchronization issues, password-hash exposure, or legacy protocols can become attack paths. | Directory sync quality, which protocols are allowed (disable NTLM and Kerberos on internet-facing servers), credential hygiene | Microsoft Entra hybrid identity and attack surface reduction |
| Administrators with standing access | Compromised admin accounts are the most damaging. Attackers spend effort compromising these accounts because the damage is unlimited. | Just-in-time elevation (PIM), access reviews, emergency access configuration, audit logging | Microsoft Entra ID Governance and Privileged Identity Management |
| Third-party or line-of-business applications | Application identities (service principals) that run on behalf of users or services often have overly broad permissions. Secrets and certificates are frequently stolen or exposed. | Service principal inventory, OAuth permissions granted, secret and certificate lifecycle, Application registration details | Microsoft Entra workload identities and application governance |
| Enterprise agents or AI tools | Agents act with a specific identity and access tools, data, and services on behalf of the business. This new capability must be governed from the start to prevent runaway access. | Agent identities, what tools and APIs agents can call, data boundaries, approval workflows, monitoring and audit | Microsoft Entra before broad agent rollout |

## Decision points

### 1. Is phishing-resistant MFA enforced for high-risk users and administrators?

**Why it matters:** MFA (multi-factor authentication) adds a second verification factor. Phishing-resistant MFA (like FIDO2 keys) cannot be intercepted by phishing. Administrators are the highest-value targets; they should have the strongest authentication.

**If no:**
- Start with Microsoft Entra authentication methods and Conditional Access.
- Enable MFA for administrators first, then extend to users accessing sensitive data.

**If yes:**
- Verify that passwordless sign-in (Windows Hello, FIDO2) is available and track adoption over time.

---

### 2. Does access depend on device trust, risk level, location, or data sensitivity?

**Why it matters:** Conditional Access can block risky sign-ins (e.g., from unexpected locations, unmanaged devices, or amid sign-in attempts that show credential compromise indicators). This prevents attackers from using stolen credentials.

**If no:**
- Identify high-risk scenarios (financial apps, customer data, healthcare records).
- Build Conditional Access rules in report-only mode first.
- Monitor patterns before enforcing.

**If yes:**
- Review existing policies for unintended gaps (e.g., admin access from unusual locations).
- Verify policies aren't so strict that users bypass them or help desk gets flooded.

---

### 3. Can administrators obtain permanent broad roles?

**Why it matters:** Attackers who compromise an admin account with permanent broad access can cause unlimited damage. Just-in-time elevation means admins have limited access by default; they request elevation only when needed, and the system logs and audits the request.

**If yes:**
- Implement Privileged Identity Management (PIM) to convert standing roles to time-bound, approved requests.
- Define emergency-access (break-glass) accounts kept offline for disaster scenarios.

**If no:**
- Still verify that access reviews happen regularly (annually at minimum).
- Ensure role descriptions stay current.

---

### 4. Do applications, services, or agents act on behalf of users or the business?

**Why it matters:** Application identities (service principals) often have overly broad permissions, and their secrets are frequently leaked or exposed in code repositories. Agents are a new category: software that acts autonomously with identity and access.

**If yes:**
- Inventory all service principals and their permissions.
- Implement application permissions (application owns the permission, not delegated from users).
- Monitor and rotate secrets/certificates.
- For agents, establish clear governance: what data can they access, which APIs can they call, who approves changes.

**If no:**
- Still plan for it. Applications and agents are growing parts of modern infrastructure.
- Governance should be in place before they're broadly deployed.

## Bring to the discussion

**Evidence and inventory to gather:**

- Conditional Access policy inventory
  - How many policies exist?
  - How many users are scoped?
  - Which are report-only vs. enforced?
  - Which have exclusions and why?

- MFA registration and adoption
  - What percentage of users have MFA registered?
  - Which authentication methods are available (phone, email, FIDO2, Windows Hello)?
  - Adoption trends over time

- Privileged access status
  - Who has admin roles and for how long?
  - Is there a regular access review process?
  - Does emergency access (break-glass) account exist and when was it tested?

- Application and service principal inventory
  - Which applications have access to Microsoft 365 or Azure?
  - What permissions do they have?
  - When were secrets/certificates last rotated?

- Guest and external identity management
  - Who can invite guests?
  - Which domains are trusted?
  - How are external partners managed?

**Conversation starters:**

1. **Start with business risk:**
   - "Have you had identity compromises, ransomware, or insider incidents? What was the impact?"
   - This grounds the conversation in business impact, not compliance.

2. **Validate the baseline:**
   - "What makes an account 'trusted' for sensitive access in your organization?"
   - "How do you verify that today?"

3. **Explore incident response:**
   - "If an admin account were compromised today, how would you detect it?"
   - "What's your response plan?"

4. **Plan the roadmap:**
   - Establish phishing-resistant MFA for admins first.
   - Expand to all users accessing sensitive data.
   - Implement just-in-time admin access.
   - Review application permissions.

> **Outcome:** agree the identity baseline (authentication, authorization, and access governance) that every later control can rely on. No security control is stronger than the identity foundation underneath it.
