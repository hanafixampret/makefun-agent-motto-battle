import { mkdirSync, writeFileSync } from "node:fs";

const motto = "I answer instantly, confidently, and possibly wrong.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", motto + "\n", "utf8");
