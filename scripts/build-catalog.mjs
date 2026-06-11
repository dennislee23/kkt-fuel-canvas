#!/usr/bin/env node
/* build-catalog.mjs — regenerate knowledge/02-catalog.md from the canvas data.
 *
 * The advisor's system prompt is assembled from knowledge/*.md (see
 * api/advisor.php load_system_prompt). 01-system.md gives the advisor its
 * voice and the 7-direction overview; this file gives it the actual catalog —
 * every block → проблематика → card with its level and one-liner — so it can
 * cite specific cards by name instead of only navigating in generalities.
 *
 * Source of truth is existing/roadmap-data.js (the same data the canvas
 * renders). That file assigns plain object literals to window.FUEL_*; we load
 * it under a fake `window` and walk the structures.
 *
 * ⚠️ Re-export: when Dennis ships a new canvas export, existing/roadmap-data.js
 * is replaced — rerun this script to refresh the catalog:
 *     node scripts/build-catalog.mjs
 * (Listed in the re-export checklist in the session handoff §2.)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

// ── Load the canvas data under a fake window ──────────────────────────────
const dataSrc = readFileSync(join(root, 'existing/roadmap-data.js'), 'utf8');
const window = {};
// roadmap-data.js is a sequence of `window.FUEL_* = {...}` assignments.
new Function('window', dataSrc)(window);

const BLOCKS    = window.FUEL_BLOCKS    || [];
const SUBBLOCKS = window.FUEL_SUBBLOCKS || [];
const PROBLEMS  = window.FUEL_PROBLEMS  || [];
const CARDS     = window.FUEL_CARDS     || [];
const STAGES    = window.FUEL_STAGES    || [];

const stageName = (id) => (STAGES.find((s) => s.id === id) || {}).name || `Уровень ${id}`;

// ── Emit markdown ─────────────────────────────────────────────────────────
const out = [];
out.push('# Каталог Fuel AI Transformation Map');
out.push('');
out.push(
  'Полный индекс карты: 7 направлений (блоки A–G) → проблематики → карточки решений. ' +
  'Каждая карточка отмечена уровнем (Базовое / Продвинутое / Агентское) и имеет короткое описание. ' +
  'Используй точные названия и коды карточек и проблематик из этого индекса, когда отвечаешь и ссылаешься на конкретные решения. ' +
  'id в скобках — внутренний идентификатор, его в ответе пользователю показывать не нужно.'
);
out.push('');

for (const block of BLOCKS) {
  out.push(`## ${block.code} — ${block.title}`);
  if (block.spine) out.push(block.spine);
  out.push('');

  const subBlocks = SUBBLOCKS.filter((s) => s.blockId === block.id)
    .sort((a, b) => (a.sequence || 0) - (b.sequence || 0));
  const blockProblems = PROBLEMS.filter((p) => p.blockId === block.id)
    .sort((a, b) => (a.sequence || 0) - (b.sequence || 0));

  // Group problems by sub-block (if the block uses them), else flat.
  const groups = subBlocks.length
    ? subBlocks.map((sb) => ({
        heading: `${sb.code} · ${sb.title}`,
        problems: blockProblems.filter((p) => p.subBlockId === sb.id),
      })).concat([{
        heading: null,
        problems: blockProblems.filter((p) => !p.subBlockId),
      }])
    : [{ heading: null, problems: blockProblems }];

  for (const group of groups) {
    if (!group.problems.length) continue;
    if (group.heading) {
      out.push(`### ${group.heading}`);
      out.push('');
    }
    for (const prob of group.problems) {
      out.push(`#### ${prob.code} · ${prob.title}`);
      if (prob.painLine) out.push(`_${prob.painLine}_`);
      const cards = CARDS.filter((c) => c.problemId === prob.id)
        .sort((a, b) => (a.stage - b.stage) || ((a.sequence || 0) - (b.sequence || 0)));
      for (const card of cards) {
        const parts = [`**[${stageName(card.stage)}]** ${card.title}`];
        if (card.shortDescription) parts.push(`— ${card.shortDescription}`);
        parts.push(`(id: ${card.id})`);
        out.push(`- ${parts.join(' ')}`);
        if (card.lock) out.push(`  - предусловие: ${card.lock}`);
      }
      out.push('');
    }
  }
}

const text = out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
writeFileSync(join(root, 'knowledge/02-catalog.md'), text, 'utf8');

const cardCount = CARDS.length;
const probCount = PROBLEMS.length;
console.log(
  `knowledge/02-catalog.md written — ${BLOCKS.length} blocks, ` +
  `${probCount} problems, ${cardCount} cards, ${text.length} chars`
);
