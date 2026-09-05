<div align="center">

# Theta42 Community & Open Source Hub

[![Live Website](https://img.shields.io/badge/website-community.theta42.com-c8a96e?style=for-the-badge&logo=google-chrome&logoColor=white)](https://community.theta42.com/)
[![Donate with PayPal](https://img.shields.io/badge/Donate-PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/donate/?hosted_button_id=NL263G9KDZ4GN)
[![GitHub License](https://img.shields.io/badge/License-MIT-gold?style=for-the-badge)](LICENSE)

**Building Sovereign Software in the Open.**  
*A decade of engineering independence: from pre-warmed container runtimes and zero-reload ingress proxies to multi-GPU AI inference clusters, sovereign WireGuard meshes, and community-preserved worlds.*

[Explore Live Hub](https://community.theta42.com/) • [Read The Chronicle](https://community.theta42.com/#chronicle) • [Ecosystem Catalog](https://community.theta42.com/#projects) • [Donate](https://community.theta42.com/#donate)

</div>

---

### 💬 Calls To Action

> ### 🛠️ Want to build or deploy systems like this? Let's talk.
> **Reach out to [info@theta42.com](mailto:info@theta42.com?subject=Engineering%20Help%20Inquiry) to see how we can help.**  
> Whether you're tuning multi-GPU inference clusters on frugal hardware, deploying zero-reload identity reverse proxies, or securing sovereign enterprise infrastructure—we engineer, test, and ship in the open.

> ### ❤️ Help keep the hardware powered and the code free.
> **[Click here to donate via PayPal](https://www.paypal.com/donate/?hosted_button_id=NL263G9KDZ4GN)**  
> Support independent, sovereign software. 100% of community contributions go directly toward physical server electricity, enterprise replacement SSDs, ZFS mirror storage arrays, and keeping our free software and community gaming servers (like [CoreJourney](https://corejourney.org)) online with zero pay-to-win.

<div align="center">
  <img src="paypal-qr.png" alt="Donate via PayPal QR Code" width="160">
  <br>
  <sub>Scan with the PayPal app to support the infrastructure</sub>
</div>

---

## 📜 The Chronicle: 50 Milestones (2014 – 2026)

Our live site features a paginated, filterable timeline of **50 engineering announcements, pull requests, and releases**:

* **Nov 2017**: **Theta 42, INC Founded** — Inception of sovereign software engineering without cloud vendor lock-in.
* **Feb 5, 2018 (`83a1ef3`)**: **Theta Proxy Initial Commit** — Origin of our dynamic zero-reload ingress reverse proxy, progressing through PAM auth, Redis backplane (`PR #9`), Web GUI (`PR #27`), wildcard socket routing (`PR #38`), DNS-01 ACME automation (`PR #66`), and OpenBao secrets (`PR #200`).
* **May 2020**: **Theta Directory Genesis** — Lightweight OpenLDAP management interface, expanding into HP iLO BMC discovery (`PR #236`) and multi-site replication convergence (`PR #245`, `v2.24.2`).
* **Jul 2026**: **Theta Suite Milestone** — Unified one-command (`./setup.sh`) Docker Compose identity and proxy stack, culminating in UI unification, WireGuard mesh service forwarding (`v2.2.0`), and hub-and-spoke sync (`PR #254`, `v3.20.0`).
* **Jul 2026**: **Jump Host Genesis** — SSH bastion gateway pulling live targets from UniFi, Proxmox VE, and Docker.
* **Aug 2026**: **Theta Agent & Tray** — Cross-platform Go daemon with capability gating and Azure Trusted Signing for Windows (`PR #25`, `v2.8.1`).
* **Sep 2026**: **Turing Multi-GPU LLM Server** — Repurposed HPE ProLiant DL380p Gen8 rig (32GB GDDR6 across RTX 2060 12GB + 2x CMP 50HX), custom MSI VBIOS, ~33W idle power, llama.cpp NCCL (500 tok/s prefill), and dynamic reasoning gateway (`ollama-proxy.py`).
* **Sep 2026**: **Maki AI Agent** — Remote control orchestration and local Web UI control plane for native Rust AI coding assistants.
* **Feb 2025**: **The Rebirth of CoreJourney (#SaveCJ)** — Rescuing 5 years of hardcore Minecraft world history (1.5 TB chunk data) onto homelab ZFS mirrors with zero pay-to-win.
* **Oct 2023 / 2021**: **Codeland Ecosystem** — Self-hosted serverless code execution across 24 languages in isolated LXC containers.
* **Jan 2024**: **SimpleWorkJS** — Minimalist, zero-DSL Node.js application stack (`@simpleworkjs/conf`, `orm`, `backend`, `frontend`, `bao-conf`).
* **Dec 2014 – 2022**: **Foundational Primitives** — `linux-user` / `linux-sys-user` (Dec 2014), `jq-repeat` (Jan 2015), `p2psub` (Aug 2020), and `model-redis` (Jan 2022).

---

## 🌐 Open Source Catalog

| Project | Description | Link |
| :--- | :--- | :--- |
| **Theta Suite** | Unified one-command OIDC/LDAP SSO, Proxy & Jump Host stack | [theta42/theta-suite](https://github.com/theta42/theta-suite) |
| **Theta Proxy** | Dynamic zero-reload reverse proxy with native directory auth | [theta42/proxy](https://github.com/theta42/proxy) |
| **Turing LLM Cluster** | 32GB GDDR6 inference server on frugal silicon (~33W idle, 500 tok/s prefill) | [wmantly/turing-multi-gpu-llm-server](https://github.com/wmantly/turing-multi-gpu-llm-server) |
| **Maki (Remote & WebUI)** | Remote control & Web UI for native Rust AI coding assistants | [wmantly/maki](https://github.com/wmantly/maki) |
| **Theta Agent & Tray** | Sovereign WireGuard mesh agent & Directory auto-enrollment | [theta42/theta-agent](https://github.com/theta42/theta-agent) |
| **Theta Directory** | Lightweight LDAP GUI and directory management engine | [theta42/theta-directory](https://github.com/theta42/theta-directory) |
| **Jump Host** | SSH bastion host with dynamic UniFi/Proxmox inventory graphing | [theta42/jump-host](https://github.com/theta42/jump-host) |
| **SimpleWorkJS** | Minimalist application stack: `@simpleworkjs/conf`, `orm`, `backend` | [simpleworkjs](https://github.com/simpleworkjs) |
| **Codeland Ecosystem** | Self-hosted serverless runtimes in isolated Linux containers (LXC) | [codeland-ecosystem](https://github.com/codeland-ecosystem) |
| **CoreJourney** | 5+ year hardcore survival Minecraft server & live SQLite stats | [corejourney.org](https://corejourney.org) |
| **model-redis** | Ultra-fast schema-driven Redis ORM in Node.js | [wmantly/model-redis](https://github.com/wmantly/model-redis) |
| **linux-sys-user** | Zero-dependency Linux sysadmin and user management | [wmantly/linux-user](https://github.com/wmantly/linux-user) |
| **p2psub** | Decentralized peer-to-peer JSON Pub/Sub engine | [wmantly/p2psub](https://github.com/wmantly/p2psub) |
| **sudoers-add** | Programmatic safe sudoers management with `visudo -cf` sandboxing | [wmantly/sudoers-add](https://github.com/wmantly/sudoers-add) |
| **jq-repeat** | Declarative, reactive list rendering without Angular bloat | [wmantly/jq-repeat](https://github.com/wmantly/jq-repeat) |

---

## 💻 Local Development & Updating

```bash
# Clone the community repository
git clone https://github.com/theta42/community.git
cd community

# Serve locally with any static web server
python3 -m http.server 8080
# Open http://localhost:8080 in your browser
```

For AI agents and developers adding new announcements or repository releases, refer to the step-by-step operating manual in [HOW_TO_UPDATE.md](HOW_TO_UPDATE.md).

---

## 🤝 Connect & Get In Touch

- **Engineering Inquiries & Consulting**: [info@theta42.com](mailto:info@theta42.com)
- **Community Chat Invite**: [Request an invite](mailto:info@theta42.com?subject=Community%20Chat%20Invite)
- **Commercial AI On-Premises**: [theta42.com](https://theta42.com/)
- **William Mantly's Notes**: [william.mantly.vip](https://william.mantly.vip/)

© 2017–2026 Theta42 LLC. All open-source repositories licensed under the [MIT License](LICENSE).
