# DNS Records — elitecardprocessing.com (Vercel)

**Domain:** elitecardprocessing.com  
**DNS provider:** Vercel  
**Last updated:** March 3, 2026  

This document describes the DNS configuration for elitecardprocessing.com after migration from Cloudflare to Vercel. It is intended for reference and for sharing with your email, security, and integration providers as needed.

---

## Current DNS snapshot (as configured in Vercel)

This table reflects the records currently in Vercel DNS. Use it as the single source of truth when auditing or recreating the zone.

| Type   | Name                         | Value / Target |
|--------|------------------------------|----------------|
| SRV    | _sip._tls                    | 100 1 443 sipdir.online.lync.com. |
| SRV    | _sipfederationtls._tcp       | 100 1 5061 sipfed.online.lync.com. |
| CNAME  | 360                          | ha_360.elitecardprocessing.psms.com. |
| CNAME  | portal                       | elitecard.iriscrm.com. |
| CNAME  | _domainconnect               | _domainconnect.gd.domaincontrol.com. |
| CNAME  | sip                          | sipdir.online.lync.com. |
| CNAME  | lyncdiscover                 | webdir.online.lync.com. |
| CNAME  | k3._domainkey                | dkim3.mcsv.net. |
| CNAME  | k2._domainkey                | dkim2.mcsv.net. |
| CNAME  | iris1._domainkey             | dkim1.iriscrm.com. |
| CNAME  | iris._domainkey              | dkim.iriscrm.com. |
| CNAME  | gps3._domainkey              | gps3._default.dkim.safewebservices.com. |
| CNAME  | gps2._domainkey              | gps2._default.dkim.safewebservices.com. |
| CNAME  | gps1._domainkey              | gps1._default.dkim.safewebservices.com. |
| CNAME  | selector2._domainkey         | selector2-elitecardprocessing-com._domainkey.elitecardprocessing.onmicrosoft.com. |
| CNAME  | selector1._domainkey         | selector1-elitecardprocessing-com._domainkey.elitecardprocessing.onmicrosoft.com. |
| CNAME  | url7538                      | sendgrid.net. |
| CNAME  | 20757620                     | sendgrid.net. |
| CNAME  | em6901                       | u20757620.wl121.sendgrid.net. |
| TXT    | mail.safewebservices.com     | include:_spf.safewebservices.com |
| TXT    | cm._domainkey                | k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC967h18EjBQaOC9vrJ/rKzttBAgfLNmWYuWpgF34xtHd8PSgP8EJr4hZMKwS7jxN28lXCeamy4eJvrcoVlhJvzXtzl1HKxNfVuKCvvRYbEthNszECRgwEGLtkuE7gk5kqkE33PowbC08MVo0DdDBZWVsL1u7Q6KjAZWb9uSIjXkwIDAQAB |
| TXT    | @                            | yandex-verification: 14be0e6e6799e95f |
| TXT    | @                            | google-site-verification=BVVlIaS58uoGtXCZowqHkrkPrNHAvGnNBGsZHl908pI |
| TXT    | @                            | ms=ms87106866 |
| MX     | lc                           | mxb.mailgun.org. |
| MX     | lc                           | mxa.mailgun.org. |
| CNAME  | email.lc                     | mailgun.org. |
| TXT    | krs._domainkey.lc            | k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDR00wDmne2HjCnTduyQtnYPt08/izaWqa2xqPtZkDx+Uh3BUzRENdTC2ioY3Kdu1Y6u2pn0ddYTeodb+b0nACpHpBT+oTrQC7q/VRMd15/SdAud8e/sa6q5OoIzwcaRMU2vaAP2ycV/OqjKlgf+pqj/deTMg0phem6Vc0SPKr79wIDAQAB |
| TXT    | lc                           | v=spf1 include:spf.leadconnectorhq.com include:mailgun.org ~all |
| CNAME  | enterpriseenrollment        | enterpriseenrollment-s.manage.microsoft.com. |
| CNAME  | enterpriseregistration      | enterpriseregistration.windows.net. |
| CNAME  | autodiscover                 | autodiscover.outlook.com. |
| TXT    | @                            | v=spf1 include:spf.protection.outlook.com include:_spf.iriscrm.com -all |
| MX     | @                            | elitecardprocessing-com.mail.protection.outlook.com. |
| TXT    | _dmarc                       | v=DMARC1; p=none; |
| CNAME  | s2._domainkey                | s2.domainkey.u20757620.wl121.sendgrid.net. |
| CNAME  | s1._domainkey                | s1.domainkey.u20757620.wl121.sendgrid.net. |
| CNAME  | em4359                       | u20757620.wl121.sendgrid.net. |
| CAA    | @                            | 0 issue "pki.goog" |
| CAA    | @                            | 0 issue "sectigo.com" |
| CAA    | @                            | 0 issue "letsencrypt.org" |
| ALIAS  | *                            | cname.vercel-dns-017.com. *(Vercel-managed)* |
| ALIAS  | @                            | f2fa0844b2d6efe8.vercel-dns-017.com *(Vercel-managed)* |

---

## 1. Website (Vercel)

| Type  | Name | Value / Target | Notes |
|-------|------|----------------|-------|
| ALIAS | *    | cname.vercel-dns-017.com | Wildcard; routes all subdomains to Vercel. **Managed by Vercel.** |
| ALIAS | @    | f2fa0844b2d6efe8.vercel-dns-017.com | Root domain → your Vercel project. **Managed by Vercel.** |

These records are created and updated automatically by Vercel when the domain is connected to a project. Do not remove or edit them in DNS unless you are changing where the site is hosted.

---

## 2. Email — Microsoft 365 / Outlook

| Type | Name | Value / Target | Priority |
|------|------|----------------|----------|
| MX   | @    | elitecardprocessing-com.mail.protection.outlook.com | (default) |
| TXT  | @    | v=spf1 include:spf.protection.outlook.com include:_spf.iriscrm.com -all | See [SPF/DKIM troubleshooting](#spf--dkim-troubleshooting) if you use more senders. |
| CNAME| autodiscover | autodiscover.outlook.com | — |
| CNAME| selector1._domainkey | selector1-elitecardprocessing-com._domainkey.elitecardprocessing.onmicrosoft.com | — |
| CNAME| selector2._domainkey | selector2-elitecardprocessing-com._domainkey.elitecardprocessing.onmicrosoft.com | — |
| TXT  | @    | ms=ms87106866 | Microsoft domain verification |

**Purpose:** Inbound/outbound email and Outlook Autodiscover (desktop/mobile clients). SPF allows Outlook to send on behalf of your domain; DKIM (selector1/selector2) is used for signing.

---

## 3. Email — SendGrid

| Type  | Name        | Value / Target |
|-------|-------------|----------------|
| CNAME | 20757620    | sendgrid.net |
| CNAME | url7538     | sendgrid.net |
| CNAME | em6901      | u20757620.wl121.sendgrid.net |
| CNAME | em4359      | u20757620.wl121.sendgrid.net |
| CNAME | s1._domainkey | s1.domainkey.u20757620.wl121.sendgrid.net |
| CNAME | s2._domainkey | s2.domainkey.u20757620.wl121.sendgrid.net |

**Purpose:** Sending transactional or marketing email via SendGrid. The `_domainkey` records are used for DKIM signing.

---

## 4. Email — Mailgun (subdomain: lc)

| Type  | Name           | Value / Target |
|-------|----------------|----------------|
| MX    | lc             | mxb.mailgun.org |
| MX    | lc             | mxa.mailgun.org |
| CNAME | email.lc       | mailgun.org |
| TXT   | lc             | v=spf1 include:spf.leadconnectorhq.com include:mailgun.org ~all |
| TXT   | krs._domainkey.lc | k=rsa; p=MIGfMA0GCSqGSIb3DQE... (DKIM key) |

**Purpose:** Email for the `lc` subdomain (e.g. lc.elitecardprocessing.com) via Mailgun / Lead Connector.

---

## 5. Email — Other services (SPF/DKIM/DMARC)

| Type | Name | Value / Target |
|------|------|----------------|
| TXT  | _dmarc | v=DMARC1; p=none; |
| TXT  | cm._domainkey | k=rsa; p=MIGfMA0GCSqGSIb3DQE... (DKIM) |
| TXT  | mail.safewebservices.com | include:_spf.safewebservices.com |

**CNAMEs for DKIM (third‑party email):**

| Name            | Target |
|-----------------|--------|
| gps1._domainkey | gps1._default.dkim.safewebservices.com |
| gps2._domainkey | gps2._default.dkim.safewebservices.com |
| gps3._domainkey | gps3._default.dkim.safewebservices.com |
| iris._domainkey | dkim.iriscrm.com |
| iris1._domainkey| dkim1.iriscrm.com |
| k2._domainkey   | dkim2.mcsv.net |
| k3._domainkey   | dkim3.mcsv.net |

**Purpose:** DMARC policy, and DKIM/SPF for SafeWeb, Iris CRM, and Mailchimp (mcsv). Required for deliverability and compliance if you use those services.

---

## 6. Microsoft 365 — MDM and federation

| Type  | Name                    | Value / Target |
|-------|-------------------------|----------------|
| CNAME | enterpriseenrollment    | enterpriseenrollment-s.manage.microsoft.com |
| CNAME | enterpriseregistration  | enterpriseregistration.windows.net |
| CNAME | lyncdiscover            | webdir.online.lync.com |
| CNAME | sip                     | sipdir.online.lync.com |
| SRV   | _sip._tls               | 100 1 443 sipdir.online.lync.com |
| SRV   | _sipfederationtls._tcp  | 100 1 5061 sipfed.online.lync.com |

**Purpose:** Device enrollment (Intune), Azure AD app registration, and Skype for Business / Teams (SIP and federation).

---

## 7. Integrations and subdomains

| Type  | Name             | Value / Target |
|-------|------------------|----------------|
| CNAME | 360              | ha_360.elitecardprocessing.psms.com |
| CNAME | portal           | elitecard.iriscrm.com |
| CNAME | _domainconnect   | _domainconnect.gd.domaincontrol.com |

**Purpose:** Payment/360 integration, Iris CRM portal, and GoDaddy Domain Connect. Remove or change only if you stop using these services.

---

## NMI / Network Merchants

For **NMI (SafeWeb) email** (portal/notification emails), see **[NMI (SafeWeb) — SPF & DKIM for email deliverability](#nmi-safeweb--spf--dkim-for-email-deliverability)**. You only need to add `include:_spf.safewebservices.com` to your root SPF; the DKIM CNAMEs (gps1, gps2, gps3) are already in place.
- If you use NMI and they require DNS (e.g. custom payment hostname, DKIM/SPF for gateway emails, or domain verification), add the exact records they provide:
  - In **Vercel:** Domain → elitecardprocessing.com → DNS → Add record (Type, Name, Value as given by NMI).
  - Get the correct **Type**, **Name**, and **Value** from the NMI merchant dashboard or from NMI support (e.g. “Domain verification” or “Custom domain” / “Hosted payment page”).
- Typical cases:
  - **Custom payment URL** (e.g. `pay.elitecardprocessing.com`): NMI will give you a CNAME target; add that CNAME in Vercel.
  - **Email (DKIM/SPF):** If NMI sends email as your domain, they will provide TXT/CNAME records to add.
  - **Verification:** They may give a TXT record for domain ownership.

Once you have the exact records from NMI, add them in Vercel and document them in the “Current DNS snapshot” table at the top of this document.

---

## 8. Domain verification and security

| Type | Name | Value |
|------|------|--------|
| TXT  | @    | google-site-verification=BVVlIaS58uoGtXCZowqHkrkPrNHAvGnNBGsZHl908pI |
| TXT  | @    | yandex-verification: 14be0e6e6799e95f |

**Purpose:** Verification for Google and Yandex (e.g. Search Console, webmaster tools).

---

## 9. Certificate authority authorization (CAA)

| Type | Name | Value |
|------|------|--------|
| CAA  | @    | 0 issue "pki.goog" |
| CAA  | @    | 0 issue "sectigo.com" |
| CAA  | @    | 0 issue "letsencrypt.org" |

**Purpose:** Restricts which CAs can issue SSL/TLS certificates for your domain (Google, Sectigo, Let’s Encrypt). Improves security and reduces risk of unauthorized cert issuance.

---

## NMI (SafeWeb) — SPF & DKIM for email deliverability

NMI sends portal and notification emails from **safewebservices.com** on your behalf. Your domain must authorize that server (SPF) so messages are not rejected or marked as spam. DKIM CNAMEs are already in your zone.

### What you need in Vercel

| Requirement | Status | Action |
|-------------|--------|--------|
| **SPF** — allow NMI to send as your domain | Add include | Add `include:_spf.safewebservices.com` to your **root** SPF TXT record (see below). |
| **DKIM** — gps1, gps2, gps3 CNAMEs | Already present | No change. You already have gps1._domainkey, gps2._domainkey, gps3._domainkey. |

### SPF: one change in Vercel

1. In Vercel: **Domain** → **elitecardprocessing.com** → **DNS**.
2. Find the **TXT** record for the root (Name: `@` or blank) whose value starts with **`v=spf1`**.
3. **Edit** that record and add: **`include:_spf.safewebservices.com`** (keep all other includes).

**Example:**

- **Current:** `v=spf1 include:spf.protection.outlook.com include:_spf.iriscrm.com -all`
- **New:** `v=spf1 include:spf.protection.outlook.com include:_spf.iriscrm.com include:_spf.safewebservices.com -all`

There must be only **one** SPF TXT record for the root; just add this include to it.

### DKIM: no action needed

Your zone already has the three CNAMEs NMI requires (gps1, gps2, gps3 → gps1._default.dkim.safewebservices.com etc.). NMI may leave gps2/gps3 "empty" for future key rotation; keep the CNAMEs.

### Validation

- **SPF:** [MXToolbox SPF Lookup](https://mxtoolbox.com/spf.aspx) — enter elitecardprocessing.com; record should contain `_spf.safewebservices.com`.
- **DKIM:** [MXToolbox DKIM Lookup](https://mxtoolbox.com/dkim.aspx) — domain elitecardprocessing.com, selectors gps1, gps2, gps3.

*Ref: [NMI — Adding SPF & DKIM Records](https://support.nmi.com/hc/en-gb/articles/19169413609105-Adding-SPF-DKIM-Records-To-Help-Emails-Get-To-Recipients)*

---

## Summary for your team

- **Website:** Served by Vercel; root and wildcard ALIAS records are managed by Vercel.
- **Primary email:** Microsoft 365 (Outlook); MX, SPF, and autodiscover/DKIM are configured.
- **Other email:** SendGrid, Mailgun (lc), SafeWeb, Iris, Mailchimp — all have the needed CNAME/TXT records.
- **Microsoft 365:** MDM and Teams/Skype federation records are in place.
- **Verification and CAA:** Google, Yandex, and CAA are set for verification and certificate control.
- **NMI / Network Merchants (SafeWeb):** Add `include:_spf.safewebservices.com` to the root SPF record so NMI portal/notification emails are not rejected. DKIM CNAMEs (gps1, gps2, gps3) are already in place. See [NMI (SafeWeb) — SPF & DKIM](#nmi-safeweb--spf--dkim-for-email-deliverability).

If you add or remove an email provider (e.g. SendGrid, Mailgun, or SafeWeb), the corresponding MX, TXT, and CNAME records in this document should be updated in Vercel DNS and in any internal runbooks.

---

---

## SPF & DKIM troubleshooting

### SPF — “Not properly configured to interact with our email server”

Your root TXT SPF must **include every service that sends email on behalf of @elitecardprocessing.com**. If a provider (e.g. Iris CRM) reports SPF failures or delivery issues, add their include.

**Recommended SPF (single TXT record for the root):**

```text
v=spf1 include:spf.protection.outlook.com include:_spf.iriscrm.com -all
```

If you also send via SendGrid, Mailchimp (mcsv), or NMI/SafeWeb from this domain, use:

```text
v=spf1 include:spf.protection.outlook.com include:_spf.iriscrm.com include:servers.mcsv.net include:_spf.safewebservices.com include:sendgrid.net -all
```

- Keep **one** SPF TXT record for the root; replace the existing one with the value above.
- In Vercel: **Domain → elitecardprocessing.com → DNS →** edit the root `TXT` record that starts with `v=spf1`.

### DKIM — “Unable to find DKIM record iris1._domainkey.elitecardprocessing.com”

Iris CRM expects a CNAME that makes `iris1._domainkey.elitecardprocessing.com` resolve to their DKIM host.

**In Vercel DNS:**

| Type  | Name           | Value / Target              |
|-------|----------------|-----------------------------|
| CNAME | iris1._domainkey | dkim1.iriscrm.com         |

- **Name:** enter only `iris1._domainkey` (Vercel appends the domain).
- **Target:** `dkim1.iriscrm.com` (no trailing dot unless Vercel requires it).

**Verify:** After saving, wait 5–15 minutes, then run:

```bash
dig CNAME iris1._domainkey.elitecardprocessing.com +short
```

You should see `dkim1.iriscrm.com.` (or a redirect). If it’s empty, the record name or domain is wrong, or DNS hasn’t propagated yet.

**If it still fails:** Confirm with Iris CRM that the selector they use for your domain is `iris1` and that the target host is `dkim1.iriscrm.com`. They may have a different selector or host for your account.

---

*This document is for internal and client reference. DNS values are correct as of the date above; Vercel-managed ALIAS records may change when the project or domain configuration changes.*
