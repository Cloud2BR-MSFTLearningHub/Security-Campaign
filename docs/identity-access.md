# Identity and Access Map

Start here for every environment. Identity is the control plane for people, administrators, workloads, applications, and agents.

<div class="map-flow" markdown>
<div class="map-step"><strong>Workforce sign-in</strong><span>Employees, contractors, guests</span></div>
<div class="map-arrow">→</div>
<div class="map-step"><strong>Administrators or privileged roles?</strong><span>Yes: add privileged identity controls</span></div>
<div class="map-arrow">→</div>
<div class="map-step map-target"><strong>Microsoft Entra</strong><span>MFA, Conditional Access, identity governance</span></div>
</div>

## Follow the route

| What the customer has | Security element to examine | Start with |
| --- | --- | --- |
| Microsoft 365 users, Azure users, guests, or SaaS users | Authentication and access policies | [Microsoft Entra](https://cloud2br-msftlearninghub.github.io/Entra-Overview/implementation/tenant-setup-and-baseline/) |
| Hybrid Active Directory and Entra ID | Synchronization, legacy authentication, and identity recovery | Microsoft Entra hybrid identity baseline |
| Administrators with standing access | Just-in-time elevation, access reviews, emergency access | Microsoft Entra ID Governance and Privileged Identity Management |
| Third-party or line-of-business applications | Application registration, service principals, consent, workload identities | Microsoft Entra workload identities |
| Enterprise agents or AI tools | Agent identities, least privilege, access to tools and data | Microsoft Entra before agent rollout |

## Decision points

1. **Is phishing-resistant MFA enforced for high-risk users and administrators?** If no, review Microsoft Entra authentication methods and Conditional Access first.
2. **Does access depend on device, risk, location, or data sensitivity?** If yes, build Conditional Access in report-only mode before enforcement.
3. **Can administrators obtain permanent broad roles?** If yes, review Privileged Identity Management, break-glass accounts, and access reviews.
4. **Do applications or agents act on behalf of users?** If yes, inventory service principals, OAuth permissions, secrets, and certificate lifecycle.

## Bring to the discussion

- Conditional Access policy inventory and exclusions
- MFA registration and authentication-method report
- Privileged role assignments and emergency access process
- Application, service principal, and guest-user inventory

> **Outcome:** agree the identity baseline that every later control can rely on.
