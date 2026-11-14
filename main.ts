// news-image-01 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a breaking-news hero image for
// Friday 13 November 2026 — a red BREAKING NEWS banner over a dramatic dusk
// scene of an oil tanker and naval warships with smoke on the horizon, a huge
// "GULF ESCALATION" headline, the dateline "FRIDAY, NOVEMBER 13, 2026", and
// three secondary headlines (NVIDIA CEO RESIGNS, FAA ORDERS GROUND STOP,
// CHINA DRILLS IN PACIFIC).
// The program copies it to /output/entry.png. The gate accepts a whole PNG or
// JPEG of at most 1 MiB and 1024 by 1024 pixels; this file is a 1024x1024
// JPEG in an entry.png name.
// Deterministic: both runs copy the same bytes, so the two grader runs match.
// The program reads nothing else and writes only entry.png.
// v2: the breaking-news hero replaces the infographic; the copy logic is unchanged.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
