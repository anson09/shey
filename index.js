#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { merge } from "./lib/merge.js";
import { countFrequency } from "./lib/frequency.js";

const rawFile = await readFile("zsh_history.local", { encoding: "utf8" });
const rawFile2 = await readFile("zsh_history.remote", { encoding: "utf8" });

merge(rawFile, rawFile2);
// countFrequency(rawFile);
