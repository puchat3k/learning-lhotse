// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 Frays.ai / PK2SL.UN LIMITED
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const url = new URL("../data/synthetic/fictional-control.json", import.meta.url);
const data = JSON.parse(readFileSync(fileURLToPath(url), "utf8"));

assert.equal(data.schema, "lhotse-fictional-control-v0.1");
assert.equal(data.published_as, "synthetic_only");
assert.ok(Array.isArray(data.cases) && data.cases.length >= 2, "Expected multiple fictional controls");
const seen = new Set();
for (const item of data.cases) {
  assert.equal(item.synthetic, true);
  assert.match(item.source, /fictional control/i);
  assert.match(item.source, /not derived from or modified from private testimony/i);
  assert.ok(!seen.has(item.case_id), "Case IDs must be unique");
  seen.add(item.case_id);
  assert.equal(item.turns.length, 4, "Each 2+2 fictional control has four turns");
  assert.deepEqual(item.turns.map((turn) => turn.speaker), ["A", "B", "A", "B"]);
  assert.ok(item.turns.every((turn) => typeof turn.id === "string" && typeof turn.text === "string" && turn.text.trim()));
  assert.ok(item.expected_observables && typeof item.expected_observables === "object");
}
console.log(`Verified ${data.cases.length} entirely fictional four-turn controls and source labeling.`);
