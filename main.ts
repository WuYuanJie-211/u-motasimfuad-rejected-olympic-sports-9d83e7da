import { writeFileSync, chmodSync } from "node:fs";

// Rejected Olympic Sports — the winning line (duel winner of five candidates).
// Three-beat escalation: a real-sounding broadcast event, concrete numbers and
// a named athlete, then the twist lands in the final words.
const LINE =
  "Men's 100-metre IKEA assembly: Sweden's Lars builds the bookshelf in 38 seconds, then loses gold for the one screw left over.";

const OUT = "/output/entry.txt";

// Gate check: the competition allows one single line of at most 200
// characters, nothing else. Fail loudly instead of writing a bad entry.
if (!LINE || LINE.includes("\n") || LINE.length > 200) {
  throw new Error(
    `entry line must be a single line of at most 200 characters, got ${LINE.length} characters`,
  );
}

writeFileSync(OUT, LINE + "\n", "utf8");
chmodSync(OUT, 0o644);
