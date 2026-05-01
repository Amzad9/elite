# DNS setup after Vercel project transfer

After transferring the Elite Card project to the correct Vercel account, the domain link and DNS targets are not moved. Do this to point your domain at the new project.

---

## Step 1: Add the domain in the new Vercel account

1. Log in to the **correct** Vercel account (the one that now has the project).
2. Open the **Elite Card** project.
3. Go to **Settings** → **Domains**.
4. Click **Add** and enter:
   - `elitecardprocessing.com` (root/apex)
   - `www.elitecardprocessing.com` (optional but recommended)
5. Add each domain. Vercel will show **“Configure”** or **“Invalid configuration”** with the exact DNS records you need.

---

## Step 2: Note the DNS records Vercel shows

On the Domains page, for each domain Vercel will show something like:

**For root domain (`elitecardprocessing.com`):**

- **If Vercel shows an A record:**  
  - Type: `A`  
  - Name: `@` (or `elitecardprocessing.com`)  
  - Value: `76.76.21.21` (Vercel’s IP)

- **If Vercel shows a CNAME/ALIAS:**  
  - Type: `ALIAS` or `CNAME` (use ALIAS at root if your DNS provider supports it; otherwise use the A record above)  
  - Name: `@`  
  - Value: the host Vercel gives, e.g. `cname.vercel-dns.com` or a project-specific target like `xxxx.vercel-dns-xxx.com`

**For `www.elitecardprocessing.com`:**

- Type: `CNAME`  
- Name: `www`  
- Value: `cname.vercel-dns.com` (or the exact target Vercel shows)

Write these down or keep the Domains tab open; you’ll add them in your DNS provider.

---

## Step 3: Update DNS at your DNS provider

Your domain uses **Cloudflare** (nameservers: `elliott.ns.cloudflare.com`, `novalee.ns.cloudflare.com`). Use the same records you saw in Step 2.

### In Cloudflare

1. Log in to [Cloudflare](https://dash.cloudflare.com) → select **elitecardprocessing.com**.
2. Go to **DNS** → **Records**.

**Root domain (`elitecardprocessing.com`):**

- If you currently have an **A** record for `@` pointing to an old Vercel IP or other host:
  - Edit it and set the **IPv4 address** to **`76.76.21.21`** (unless Vercel gave you a different IP).
- If Vercel gave you a **CNAME/ALIAS** target for the root:
  - Add (or edit) a record:  
    - Type: **CNAME** (Cloudflare will flatten at apex automatically) or **ALIAS** if available.  
    - Name: **`@`**  
    - Target: the exact value from Vercel (e.g. `cname.vercel-dns.com` or `xxxx.vercel-dns-xxx.com`).  
    - Proxy: **DNS only** (grey cloud) for the Vercel record.

**www:**

- Add or edit:
  - Type: **CNAME**
  - Name: **`www`**
  - Target: **`cname.vercel-dns.com`** (or the value from Vercel).
  - Proxy: **DNS only** (grey cloud).

3. Save. Changes can take from a few minutes up to 24–48 hours to propagate.

---

## Step 4: Verify in Vercel

1. Back in Vercel → project → **Settings** → **Domains**.
2. Wait a few minutes, then click **Refresh** or **Verify** next to each domain.
3. When both show **Valid** (or a green check), the site will be served from the new account.

---

## If you had used Vercel DNS (Vercel nameservers)

Your doc mentioned Vercel-managed ALIAS records (e.g. `f2fa0844b2d6efe8.vercel-dns-017.com`). Those belong to the **old** project/account. After transfer:

- **If the domain is still on the old account:**  
  Add the domain in the **new** account (Step 1). Vercel will give **new** targets. Then in your DNS (whether at Vercel or Cloudflare), **replace** the old ALIAS/CNAME values with the **new** targets Vercel shows for the new project.

- **If the domain was only on the old account and you use Cloudflare:**  
  You don’t use Vercel nameservers; just add the domain in the new project (Step 1) and set the A/CNAME records in Cloudflare (Step 3) as above.

---

## Quick checklist

- [ ] Logged into the **correct** Vercel account.
- [ ] Added `elitecardprocessing.com` (and optionally `www`) in **Settings → Domains**.
- [ ] Noted the A and/or CNAME targets Vercel shows.
- [ ] Updated **Cloudflare** DNS: A `@` → `76.76.21.21` and/or CNAME/ALIAS as shown; CNAME `www` → `cname.vercel-dns.com` (or Vercel’s value).
- [ ] Set Cloudflare proxy to **DNS only** for those records.
- [ ] Verified in Vercel until both domains show **Valid**.

After this, traffic for `elitecardprocessing.com` and `www.elitecardprocessing.com` will go to the transferred project on the correct account. Your other DNS (email, etc.) in Cloudflare can stay as-is; only the records that point the **website** to Vercel need to use the new project’s targets.
