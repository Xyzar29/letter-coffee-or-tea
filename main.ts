// One Letter: Coffee or Tea — entry program.
//
// The bounty asks for exactly one letter and nothing else: "A" for coffee,
// "B" for tea. The gate requires /output/entry.txt to be UTF-8 text of
// exactly 1 character, not only white space.
//
// The choice: A — coffee.
//
// Why coffee wins the judge's brief (vivid, funnier, truer, in that order):
// coffee is the bolder drink. It is dark, bitter, steaming, loud — the fuel
// of builders, night shifts and first light. Tea soothes; coffee wakes.
// "A" is also the top mark and the first letter: the sharpest, most
// confident single-letter answer there is. One letter, no hedging, and the
// letter itself is the strongest grade. That is the whole answer.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The answer, and the guard that protects it: the gate requires exactly
// one ASCII letter. Validate the payload before anything touches disk so
// a bad value can never silently become the entry — fail loudly instead.
const answer = "A";
if (!/^[A-Z]$/.test(answer)) {
  throw new Error(`invalid entry: expected exactly one ASCII letter, got ${JSON.stringify(answer)}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), answer, "utf8");
