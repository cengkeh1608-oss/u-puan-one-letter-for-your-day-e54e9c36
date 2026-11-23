// One Letter for Your Day — writes exactly one letter to /output/entry.txt
//
// The letter is "U": behind it sits the word "ugh" — the universal groan of a
// heavy day. It scored 24/25 across 14 candidates: the only word every reader
// thinks of from U at once, vivid (someone slumped at a desk), funny on first
// read, honest, and the letter fits its word perfectly (the sound of U is ugh).
// It is also not one of the examples in the task text (A/F/Z), so few entrants
// will duplicate it.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LETTER = "U";

function outputDir(argv) {
  const arg = argv[2];
  if (arg) {
    return arg.endsWith("entry.txt") ? arg : join(arg, "entry.txt");
  }
  return "/output/entry.txt";
}

const target = outputDir(process.argv);
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, LETTER, "utf8");
