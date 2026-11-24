// SPDX-License-Identifier: MIT
// make.fun entry: The Production Database Apology
// Writes one apology line (1-200 chars, single line, no trailing newline)
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default: ./output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry, I deleted the production database. I've already run the five stages of grief in 0.4 seconds and I'm still on denial, so please don't ask where the users went.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (ENTRY.includes("\n") || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
