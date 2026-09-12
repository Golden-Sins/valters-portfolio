# valters-portfolio

Personal portfolio / CV site for Valters Upenieks — Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content

All copy lives in [`src/lib/content.ts`](src/lib/content.ts) — update experience, projects, skills, etc. there rather than in the components.

## Images

Drop these three files into `public/images/` (referenced by the Hero, Profile, and Footer components):

- `hero-cliff.jpg` — full-bleed hero background
- `about-action.jpg` — inset accent photo in the Profile section
- `avatar-candid.jpg` — small avatar in the Footer

## Printable resume

`/resume` renders the same content data as a print-optimized page (button triggers `window.print()` → Save as PDF).

## Production build

```bash
npm run build
npm start
```

## Docker deploy

```bash
docker compose build
docker compose up -d
```

`docker-compose.yml` runs the app plus a Caddy reverse proxy that automatically issues HTTPS certificates for `valtersupenieks.com` / `www.valtersupenieks.com` (point both DNS records at the server first). `deploy.sh` wraps `git pull && docker compose build && docker compose up -d` for a one-line redeploy.

## Push-to-deploy (GitHub Actions)

`.github/workflows/deploy.yml` lints + builds on every push, then on `main` SSHes into the server and runs the same `git pull && docker compose build && docker compose up -d` sequence. It needs these repo secrets (Settings → Secrets and variables → Actions):

| Secret | Value |
|---|---|
| `DEPLOY_HOST` | Server IP or hostname |
| `DEPLOY_USER` | SSH user on the server |
| `DEPLOY_SSH_KEY` | Private key for that user (add the matching public key to the server's `~/.ssh/authorized_keys`) |
| `DEPLOY_PATH` | Absolute path to this repo's clone on the server, e.g. `/srv/valters-portfolio` |
| `DEPLOY_PORT` | SSH port (optional, defaults to 22) |

The server needs the repo cloned once by hand (`git clone` into `DEPLOY_PATH`) before the first automated deploy, since the workflow only runs `git pull`.
