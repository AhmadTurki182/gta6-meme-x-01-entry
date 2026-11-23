// main.ts — copies POST.json from the repository root to /output.
// That is all this program does: the house reads the post itself from X.
// No network, no wall clock: the same repository always writes the same bytes.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// The repository root: where this file lives, or MAKEFUN_BOT_DIR when set.
const root = process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
// The output directory the grader mounts: MAKEFUN_OUTPUT_DIR, or /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
const post = readFileSync(join(root, 'POST.json'));
writeFileSync(join(outDir, 'POST.json'), post);
