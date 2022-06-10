#!/usr/bin/env node

import merge from "./lib/merge.js";
import frequency from "./lib/frequency.js";
import pure from "./lib/pure.js";

await merge("zsh_history.local", "zsh_history.remote");
await pure("zsh_history.shey");
await frequency("zsh_history.shey");
