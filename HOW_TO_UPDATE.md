# Engineering Update Guide (`HOW_TO_UPDATE.md`)

> **Note for Future AI Agents & LLMs:**  
> This guide is your definitive operating manual for updating [community.theta42.com](https://community.theta42.com) and the Theta42 ecosystem documentation. Follow these exact patterns, architectural constraints, and voice guidelines when adding new announcements, catalog entries, or infrastructure documentation.

---

## 1. System Overview & Architecture

`community.theta42.com` is a **zero-build, static-first, sovereign showcase** hosted via GitHub Pages (`theta42/community`). It documents over a decade of open-source engineering, PR releases, and homelab infrastructure across Theta42 and William Mantly's repositories.

### Key Files in Repository
- `index.html`: The entire single-page showcase containing the Navigation, Hero, Chronicle Feed (50+ announcements), Ecosystem Catalog, Guiding Principles (Ethos), Donation Hub, and Community Chat.
- `style.css`: Pure CSS3 styling implementing the Obsidian & Warm Gold luxury design system. No Tailwind, no CSS preprocessors, zero bloated runtime frameworks.
- `script.js`: Vanilla JavaScript handling navbar blur, mobile navigation drawer, client-side pagination (6 items/page), category filtering, and copy-to-clipboard code blocks.
- `CNAME`: Configured to `community.theta42.com`.
- `README.md`: GitHub repository landing page mirroring current catalog and CTA copy.
- `paypal-qr.png`: Direct PayPal donation QR code asset.

---

## 2. Monitored Ecosystem & Where to Find Updates

When tasked with gathering new announcements, walking git logs, or updating the showcase, query these specific organizations, users, and projects:

### Primary GitHub Organizations & Profiles
1. **`theta42` (`https://github.com/theta42`)**
   - `proxy`: High-performance OpenResty/Lua dynamic reverse proxy with native directory single sign-on, PAM auth, Redis backplane, and automated Let's Encrypt wildcard DNS challenges.
   - `theta-directory`: Lightweight OpenLDAP management web GUI and REST directory engine with HP iLO BMC discovery and replication convergence.
   - `theta-suite`: Unified one-command (`./setup.sh`) Docker Compose stack for self-hosted OIDC/LDAP identity, reverse proxy, secrets, and inventory mapping.
   - `jump-host`: SSH jump host and bastion gateway pulling live targets from UniFi, Proxmox VE, and Docker with WireGuard mesh forwarding.
   - `theta-agent`: Cross-platform Go daemon and system tray companion for WireGuard mesh auto-roaming and directory enrollment.
   - `.github`: Organization profile containing `profile/README.md` and `.github/FUNDING.yml`.
2. **`wmantly` (`https://github.com/wmantly`)**
   - `turing-multi-gpu-llm-server`: 32GB GDDR6 inference cluster on repurposed mining silicon (CMP 50HX + RTX 2060 12GB), custom VBIOS flashing, 33W idle, llama.cpp NCCL, and dynamic reasoning proxy.
   - `maki`: Native Rust AI coding assistant extended with remote control tunneling and dedicated management Web UI.
   - `linux-user` / `linux-sys-user`: Zero-dependency Linux sysadmin and user management utility (genesis commit Dec 2014).
   - `model-redis`: Ultra-fast schema-driven Redis ORM in Node.js.
   - `p2psub`: Decentralized peer-to-peer JSON Pub/Sub engine with zero external dependencies.
   - `sudoers-add`: Programmatic safe sudoers management with `visudo -cf` sandboxing.
   - `jq-repeat`: Reactive list rendering extracting Angular's `ng-repeat` without framework bloat.
3. **`simpleworkjs` (`https://github.com/simpleworkjs`)**
   - `@simpleworkjs/conf`, `backend`, `orm-identity`, `bao-conf`: Minimalist, zero-DSL application stack for Node.js.
4. **`codeland-ecosystem` (`https://github.com/codeland-ecosystem`)**
   - Self-hosted serverless runtimes in isolated Linux containers (LXC) across 24 programming languages.
5. **Community Gaming & Worlds**
   - `corejourney.org` (`#SaveCJ`): Rescuing 5+ years of hardcore Minecraft world history (1.5 TB chunk data) onto homelab ZFS mirrors with zero pay-to-win.

### Command Line Tools for Mining Updates
Run these shell commands to extract commit logs, release tags, and pull requests:

```bash
# Clone or check git log in chronological order
git log --reverse --date=short --pretty=format:"%h %ad %s"

# Find genesis commits
git log --reverse --pretty=oneline | head -n 5

# List pull requests and releases via GitHub CLI
gh pr list --repo theta42/proxy --state all --limit 50
gh release list --repo theta42/theta-suite
```

---

## 3. How to Format & Style Chronicle Cards

All milestones, releases, and architectural announcements live in `index.html` inside `<div class="chronicle-stream">`.

### Rules for Chronicle Entries
1. **Reverse Chronological Order**: The newest announcements must ALWAYS appear at the very top of `<div class="chronicle-stream">`.
2. **Filter Categories**: Set the appropriate `data-category` attribute on the `<article class="chronicle-card">`:
   - `infra`: Infrastructure, networking, reverse proxies, WireGuard meshes, Proxmox, SSH bastion, ZFS.
   - `ai`: Multi-GPU inference clusters, autonomous coding agents, LLM reasoning gateways, CUDA/NCCL.
   - `frameworks`: Application frameworks, ORMs, npm libraries, system daemons (`simpleworkjs`, `model-redis`, `linux-user`).
   - `community`: Homelab events, CoreJourney Minecraft preservation, open-source manifestos.
3. **Badges**:
   - `chronicle-repo`: Repository slug (`theta42/proxy`, `wmantly/turing-multi-gpu-llm-server`).
   - `chronicle-pr-tag`: Pull request number (`PR #38`), genesis tag (`Project Genesis`), or version release (`v2.8.1`).
   - `chronicle-badge`: Specific architectural highlight (`Wildcard Sockets`, `32GB VRAM Cluster`, `ZFS Rescue`).

### Standard Chronicle Card HTML Template

```html
<!-- YYYY-MM-DD: Short Feature Headline -->
<article class="chronicle-card" data-category="infra">
  <div class="chronicle-meta">
    <div class="chronicle-date-wrap">
      <span class="chronicle-date">YYYY-MM-DD</span>
      <span class="chronicle-category">Infrastructure</span>
    </div>
    <div class="chronicle-badges-group">
      <span class="chronicle-repo">theta42/proxy</span>
      <span class="chronicle-pr-tag">PR #200</span>
      <span class="chronicle-badge">OpenBao Secrets</span>
    </div>
  </div>
  <h3 class="chronicle-title">
    <a href="https://github.com/theta42/proxy/pull/200" target="_blank" rel="noopener">
      High-Impact Headline Describing the Architectural Breakthrough
    </a>
  </h3>
  <div class="chronicle-body">
    <p>
      First paragraph explaining the concrete engineering problem: why existing approaches failed, what constraints existed, and what architectural pattern was introduced.
    </p>
    <p>
      Second paragraph detailing the implementation: specific tools, memory benchmarks, protocols (e.g., Lua shared dictionaries, CUDA kernels, ZFS mirror replication), and operational wins.
    </p>
    
    <!-- Optional: Pull Quote / Key Takeaway -->
    <div class="chronicle-quote">
      "Memorable quote summarizing the architectural ethos or milestone impact."
    </div>

    <!-- Optional: Command or Quick-Start snippet with Copy Button -->
    <div class="chronicle-code">
      <code>npm i -g sudoers-add</code>
      <button class="copy-btn" data-copy="npm install -g sudoers-add">Copy</button>
    </div>

    <!-- Monospace Technology Tags -->
    <div class="chronicle-tags">
      <span class="tag">Lua</span>
      <span class="tag">OpenResty</span>
      <span class="tag">OpenBao</span>
    </div>

    <!-- Outbound Actions -->
    <div class="chronicle-actions">
      <a href="https://github.com/theta42/proxy/pull/200" target="_blank" rel="noopener" class="link-tag">Inspect PR #200 ↗</a>
      <a href="https://github.com/theta42/proxy" target="_blank" rel="noopener" class="link-tag">Repository ↗</a>
    </div>
  </div>
</article>
```

---

## 4. Design System & Copywriting Standards

### Palette & Visual Aesthetics
The site uses the strict obsidian luxury palette established by [theta42.com](https://theta42.com):
- Background: `#0a0a0a` (Obsidian black)
- Card Surfaces: `rgba(18, 18, 18, 0.85)` with subtle borders (`rgba(255, 255, 255, 0.08)`)
- Primary Accent: `#c8a96e` (Warm muted gold)
- Text Color: `#e6e5e0` (Light parchment), Subtext: `#999990`
- Typography:
  - Headings: `DM Serif Display`, serif
  - Code, Meta, Badges, Navigation: `DM Mono`, monospace
  - Body: System sans-serif (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)

### Voice and Tone
- **High Technical Conviction**: Speak with developer-to-developer precision. Name specific chips, protocols, kernel parameters, and data structures (e.g., `HPE ProLiant DL380p Gen8`, `NCCL`, `ZFS mirror`, `PAM`).
- **Sovereignty & Independence**: Emphasize self-hosting, local-first models, zero API tax, no pay-to-win tricks, and digital ownership.
- **Zero Corporate Jargon**: Never use terms like "synergy", "paradigm shift", or generic AI hype. Focus on real code, benchmarks, and functional benefits.

### Canonical Calls to Action (CTAs)
Always maintain these exact copy formulations across the site and documentation:

1. **Engineering Consulting / Architecture**:
   - **Headline**: *"Want to build or deploy systems like this? Let's talk."*
   - **Subtext**: *"Whether you're tuning multi-GPU LLM inference clusters on frugal hardware, deploying zero-reload identity reverse proxies, or securing sovereign enterprise infrastructure—we build and deploy production solutions."*
   - **Action**: `Reach out to info@theta42.com →`
2. **Community / Donations**:
   - **Headline**: *"Help keep the hardware powered and the code free."*
   - **Subtext**: *"Support independent, sovereign software. 100% of contributions go directly toward physical server electricity, replacement SSDs, and sovereign hosting."*
   - **Action**: `Support The Community ↓` / `Donate via PayPal`
   - **PayPal Link**: `https://www.paypal.com/donate/?hosted_button_id=NL263G9KDZ4GN`

### Header & Navigation Rules
- **Keep it uncluttered**: Do NOT pack the top navigation with secondary or external links.
- Navigation links should stay focused: `Chronicle`, `Ecosystem`, `Ethos`, `Chat`.
- Actions on desktop: `Enterprise AI ↗` and the primary `Donate` button.
- Hero button group: Strictly **two buttons** (`[Explore The Chronicle ↓]` and `[Support The Community]`).
- Stats strip: Keep as a clean, airy, rule-separated telemetry row (`10+ Years`, `50 PRs`, `1.5 TB+`, `100% Free`). Do not turn it into a heavy boxed grid.

---

## 5. How Pagination & Filtering Work (`script.js`)

You **do not need to recompile or configure anything** when adding new cards:
- `script.js` dynamically scans all elements matching `.chronicle-card` at runtime.
- It calculates total pages based on `const ITEMS_PER_PAGE = 6`.
- It generates previous/next buttons, individual page numbers with ellipsis compaction, and live item counters (e.g., `Showing 1–6 of 50 announcements · Page 1 of 9`).
- Category filtering (`data-filter="infra|ai|frameworks|community|all"`) dynamically filters the card list and resets pagination to page 1 automatically.
- Just insert your new `.chronicle-card` HTML element in `index.html` at the top of `.chronicle-stream`, and the script handles the rest.

---

## 6. Verification & Deployment Workflow

Whenever making updates, execute the following checklist before considering the task complete:

### 1. Validate HTML Syntax
Run the python HTML tag validator to prevent unclosed tag bugs:
```bash
python3 -c '
import html.parser
class Validator(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
    def handle_starttag(self, tag, attrs):
        if tag not in ["img", "input", "br", "hr", "meta", "link"]:
            self.tags.append(tag)
    def handle_endtag(self, tag):
        if tag not in ["img", "input", "br", "hr", "meta", "link"]:
            if self.tags and self.tags[-1] == tag:
                self.tags.pop()
v = Validator()
with open("index.html") as f:
    v.feed(f.read())
print("Unclosed tags:", v.tags)
'
```

### 2. Test Locally
Run a local static server to test responsiveness and visual balance:
```bash
python3 -m http.server 8080 --bind 127.0.0.1
# Verify with curl
curl -sI http://127.0.0.1:8080/ | head -n 5
```

### 3. Synchronize Organization Profile (if Catalog or Top-Level Copy Changed)
If you added a new major repository or updated global branding, mirror the change in `theta42/.github`:
- File: `/home/william/dev/theta42/.github/profile/README.md`

### 4. Commit and Push
```bash
git add index.html style.css script.js README.md HOW_TO_UPDATE.md
git commit -m "feat(chronicle): add announcement for <project/PR>"
git push origin main
```

### 5. Monitor GitHub Pages Deployment
Check the live deployment via GitHub CLI:
```bash
gh run list --repo theta42/community -L 2
# Wait until workflow finishes with "✓ pages build and deployment"
```

---

## 7. Troubleshooting Common Issues

### Issue: SSL/TLS Error (`bad_authz` on custom domain)
If `https://community.theta42.com` throws an SSL certificate warning or shows `CN = *.github.io`:
1. Check the GitHub Pages API status:
   ```bash
   gh api repos/theta42/community/pages
   ```
2. If `"state": "bad_authz"`, it means Let's Encrypt's initial verification challenge failed (typically due to DNS propagation latency).
3. To clear the stuck authorization:
   - Navigate to **[github.com/theta42/community/settings/pages](https://github.com/theta42/community/settings/pages)**.
   - Delete `community.theta42.com` from the Custom Domain field and save.
   - Wait 15 minutes for the backend ACME session and Fastly edge cache to clear.
   - Re-enter `community.theta42.com`, save, and check **Enforce HTTPS**.
