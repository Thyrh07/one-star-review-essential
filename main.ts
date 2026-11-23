import { writeFileSync, mkdirSync } from "node:fs";

const REVIEW =
  "Sleep takes a third of my life, charges no rent, and still sends me back tired.";
const OUTPUT = "/output/entry.txt";

// Gate validation: the entry must be a single line of 1-160 chars with no
// surrounding whitespace, or the sealed gate scorer refuses it outright.
if (REVIEW.length < 1 || REVIEW.length > 160) {
  throw new Error(`entry must be 1-160 chars, got ${REVIEW.length}`);
}
if (REVIEW.includes("\n") || REVIEW !== REVIEW.trim()) {
  throw new Error("entry must be one line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, REVIEW, "utf8");
