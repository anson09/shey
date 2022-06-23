#!/usr/bin/env node

import { program } from "commander";
import { createRequire } from "module";
import merge from "./lib/merge.js";
import frequency from "./lib/frequency.js";
import pure from "./lib/pure.js";

const require = createRequire(import.meta.url);
const { name, description, version } = require("./package.json");

program.name(name).description(description).version(version);

program
  .command("pure")
  .description("cleanup format uncorrect line and sort by time")
  .argument("<shell_history>", "shell history file path")
  .action(pure);

program
  .command("frequency")
  .description("count usage frequency of command")
  .argument("<shell_history>", "shell history file path")
  .action(frequency);

program
  .command("merge")
  .description("merge two shell history file")
  .argument("<shell_history_1>", "first shell history file path")
  .argument("<shell_history_2>", "second shell history file path")
  .action(merge);

program.parse();
