// One-Liner Laughs entry for make.fun.
// A tiny program: it writes a single original one-line joke to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My smart fridge texted me at 3 a.m.: the leftover pizza and I have a lot in common — we're both cold, unwanted, and past our best-by date.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
console.log(joke);
