# Endpoint and Device Map

Use this map when the customer has corporate endpoints, BYOD, shared devices, mobile devices, or applications that handle company data.

<div class="map-flow" markdown>
<div class="map-step"><strong>Devices in scope?</strong><span>Windows, macOS, iOS, Android, shared devices</span></div>
<div class="map-arrow">→</div>
<div class="map-step"><strong>Who owns them?</strong><span>Corporate, personal, shared, or unmanaged</span></div>
<div class="map-arrow">→</div>
<div class="map-step map-target"><strong>Intune + Defender</strong><span>Trust, compliance, protection, and response</span></div>
</div>

## Follow the route

| What the customer has | Security element to examine | Start with |
| --- | --- | --- |
| Corporate laptops or mobiles | Enrollment, configuration, compliance, updates | [Microsoft Intune](https://cloud2br-msftlearninghub.github.io/Intune-Overview/implementation/compliance-and-conditional-access/) |
| BYOD accessing Microsoft 365 data | App protection, selective wipe, Conditional Access | Intune app protection policies |
| Shared or kiosk devices | Device restrictions, local admin, sign-in model | Intune device configuration |
| Unmanaged devices accessing sensitive data | Device trust gates and browser/session controls | Entra Conditional Access with Intune signals |
| Endpoint alerts or ransomware concern | Endpoint detection, vulnerability exposure, incident response | Microsoft Defender for Endpoint |

## Decision points

1. **Are devices enrolled and reporting compliant?** If no, define enrollment groups, compliance rules, and a support path in Intune.
2. **Do personal devices need corporate data without full management?** If yes, evaluate Intune app protection before broad device enrollment.
3. **Is access to finance, customer, or regulated data permitted from unmanaged devices?** If yes, decide whether to block, limit sessions, or require compliant devices with Entra Conditional Access.
4. **Are endpoint alerts investigated and remediated by an owner?** If no, review Defender for Endpoint coverage and the handoff to the SOC.

## Bring to the discussion

- Device inventory by operating system and ownership
- Enrollment and compliance rates
- BYOD policy, exception process, and help-desk capacity
- Current endpoint protection, vulnerability, and incident reports

> **Outcome:** define which devices can access which data and the evidence required to trust them.
