# NEUROMANTECH

Closed-loop biosensing & telemetry frameworks — landing page for **neuroman.tech**.

- **Stack:** static single-file site — Tailwind CSS (CDN) + Google Fonts (JetBrains Mono / Inter), no build step.
- **Hosting:** GitHub Pages, custom domain `neuroman.tech`.
- **Deploy:** push to `main` triggers `.github/workflows/deploy.yml` (GitHub Actions → Pages).

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Brand real estate

- Company: Neuromantech Systems
- Tech hub: neuroman.tech
- Commerce portal: neuroman.store (301 → neuroman.tech)
- Contact: dev@neuroman.tech
- GitHub org: https://github.com/neuromantech

## Notes

- `CNAME` pins the apex domain to GitHub Pages.
- Repo-level git identity is set to `neuromantech@users.noreply.github.com`.
- Push auth uses the `neuroman-deploy-key` SSH deploy key (repo-local `core.sshCommand`).
