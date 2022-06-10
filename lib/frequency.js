import { readFile } from "node:fs/promises";
import { parseCommandList } from "./helper.js";

function countFrequency(raw) {
  const commandList = parseCommandList(raw);
  const frequencyMap = {};

  for (const command of commandList) {
    if (frequencyMap[command]) {
      frequencyMap[command]++;
    } else {
      frequencyMap[command] = 1;
    }
  }

  const countList = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);

  for (const [command, count] of countList) {
    if (count > 1) console.log(`${count}\t${command}`);
  }
}

async function main(filePath) {
  const raw = await readFile(filePath, { encoding: "utf8" });
  countFrequency(raw);
}

export default main;
