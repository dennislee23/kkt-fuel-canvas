#!/usr/bin/env node
/* build-llms.mjs — regenerate llms.txt from the canvas data (English).
 *
 * The fuel canvas is a client-side React/Babel app: crawlers and AI fetchers
 * that don't run JavaScript see only the <head> (title/meta/OG/JSON-LD), never
 * the rendered map body. llms.txt is the JS-free, machine-readable version of
 * the map — so this script inlines the full catalog (7 domains → challenges →
 * 106 solutions with one-liners and maturity) from the SAME data the canvas
 * renders (existing/roadmap-data.js, the *_EN structures).
 *
 * ⚠️ Re-export: when a new canvas export replaces existing/roadmap-data.js,
 * rerun this (and build-catalog.mjs):  node scripts/build-llms.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

const dataSrc = readFileSync(join(root, 'existing/roadmap-data.js'), 'utf8');
const window = {};
new Function('window', dataSrc)(window);

// EN structures (fall back to base if an _EN is missing).
const BLOCKS   = window.FUEL_BLOCKS_EN   || window.FUEL_BLOCKS   || [];
const PROBLEMS = window.FUEL_PROBLEMS_EN || window.FUEL_PROBLEMS || [];
const CARDS    = window.FUEL_CARDS_EN    || window.FUEL_CARDS    || [];
const STAGES   = window.FUEL_STAGES_EN   || window.FUEL_STAGES   || [];

const stageName = (id) => (STAGES.find((s) => s.id === id) || {}).name || `Stage ${id}`;
const bySeq = (a, b) => (a.sequence || 0) - (b.sequence || 0);

const out = [];

// ── Fixed intro (kept in sync with the head/positioning) ──────────────────
out.push('# Fuel AI Transformation Map — KKT');
out.push('');
out.push('> An interactive map of where data and AI deliver measurable results across a fuel-retail network, published by Kitty Kat Technologies (KKT). It spans the whole network economy — procurement and margin, logistics, stations and shops, customers, finance and control — built bottom-up: connected data and control first, then AI where it earns its place. This file mirrors the full map as text (the map itself renders client-side).');
out.push('');
out.push('The Fuel AI Transformation Map is a working artifact from KKT, a data, AI, and automation delivery firm based in Tallinn, Estonia (EU). KKT\'s marquee fuel deployment is Optimus — a procurement-and-margin engine in pilot at Red Petroleum, a 220+ station independent fuel network in Kyrgyzstan. The map below shows where Optimus sits within the broader network economy and what else becomes possible once connected data and control are in place.');
out.push('');

// ── Maturity legend ───────────────────────────────────────────────────────
out.push('## Maturity stages');
out.push('');
out.push('Every solution on the map is tagged by maturity:');
out.push('');
for (const s of STAGES) out.push(`- **${s.name}** — ${s.description}`);
out.push('');

// ── The catalog: blocks → problems → cards ────────────────────────────────
out.push(`## The map — ${BLOCKS.length} domains, ${PROBLEMS.length} challenges, ${CARDS.length} solutions`);
out.push('');

for (const block of [...BLOCKS].sort(bySeq)) {
  out.push(`### ${block.code} — ${block.title}`);
  if (block.spine) { out.push(block.spine); out.push(''); }

  const problems = PROBLEMS.filter((p) => p.blockId === block.id).sort(bySeq);
  for (const p of problems) {
    out.push(`**${p.code} · ${p.title}**${p.painLine ? ' — ' + p.painLine : ''}`);
    const cards = CARDS.filter((c) => c.problemId === p.id).sort(bySeq);
    for (const c of cards) {
      const lvl = stageName(c.stage);
      const lock = c.lock ? ' [prerequisite]' : '';
      out.push(`- ${c.title} *(${lvl})*${lock} — ${c.shortDescription || ''}`.replace(/\s+—\s*$/, ''));
    }
    out.push('');
  }
}

// ── About KKT ─────────────────────────────────────────────────────────────
out.push('## About KKT');
out.push('');
out.push('- [Kitty Kat Technologies](https://kittykat.tech/): The firm behind the map — business-first data & AI delivery for mid-enterprise companies in asset-heavy industries.');
out.push('- [Optimus](https://kittykat.tech/solutions/optimus/): The procurement-and-margin product for fuel networks, in pilot at Red Petroleum.');
out.push('- [Fuel retail positioning](https://kittykat.tech/industries/fuel-retail/): How KKT approaches fuel — connected data first, AI on built foundations.');
out.push('');

writeFileSync(join(root, 'llms.txt'), out.join('\n'));
console.error(`llms.txt written: ${BLOCKS.length} domains, ${PROBLEMS.length} challenges, ${CARDS.length} solutions`);
