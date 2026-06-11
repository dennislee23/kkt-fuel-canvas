# fuelretail.kittykat.tech — Fuel AI Transformation Map

The fuel-retail microsite: the interactive Fuel AI Transformation Map plus a
Claude-backed advisor. Mirrors the retail.kittykat.tech pattern. Served as a
static folder; the advisor is a single PHP endpoint.

## Layout

- `index.html` — the canvas (a self-contained standalone export). **Swap this
  one file to update the canvas** — nothing else depends on its internals.
- `advisor.js` — floating "Ask the advisor" widget. Injected into `index.html`
  via one `<script src="/advisor.js" defer>` line before `</body>`. Survives a
  canvas swap (re-add that one line if a fresh export drops it).
- `api/advisor.php` — streaming advisor backend (SSE → Claude). Reads the
  system prompt from `knowledge/*.md` at request time, so behaviour is editable
  without touching code.
- `knowledge/*.md` — the advisor's brain: base voice, the A–G network economy,
  the bottom-up stages + Red Petroleum reference, the firm profile.
- `deploy.php` + `update.html` — pull-from-GitHub on demand (operator presses
  `update.html` with `DEPLOY_KEY`).
- `.htaccess` — DirectoryIndex, env/git blocking, caching.

## Server setup (zone.eu, one-time)

1. Create subdomain `fuelretail.kittykat.tech` → its own docroot.
2. Clone the `main` branch of this repo into that docroot.
3. Create `.env` at the repo root (see `.env.example`):
   - `DEPLOY_KEY=<openssl rand -hex 32>`
   - `ANTHROPIC_API_KEY=<same key as Optimus / retail>`
4. Deploy updates: visit `https://fuelretail.kittykat.tech/update.html`
   (mode = hard) after pushing to `main`.

## Updating the canvas

Replace `index.html` with the newer export, make sure the
`<script src="/advisor.js" defer></script>` line is still before `</body>`,
commit, push, press `update.html`.
