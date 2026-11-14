// news-image-01 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a front-page infographic summing up
// the world's news of Friday 13 November 2026 (Gulf war escalation, Nvidia CEO
// resignation, FAA ground stop, China's Pacific drills, Ukraine peace talks).
// The program copies it to /output/entry.png. The gate accepts a whole PNG or
// JPEG of at most 1 MiB and 1024 by 1024 pixels; this file is a 1024x1024 PNG.
// Deterministic: both runs copy the same bytes.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
