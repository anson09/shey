#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { countFrequency } from "./lib/frequency.js";

const rawFile = await readFile("zsh_history.local", { encoding: "utf8" });

countFrequency(rawFile);
