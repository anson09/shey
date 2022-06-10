function parseCommandList(rawFile) {
  const commandList = rawFile
    .split("\n")
    .map((line) => line.slice(line.indexOf(";") + 1));

  return commandList;
}

function countFrequency(rawFile) {
  const commandList = parseCommandList(rawFile);
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

export { countFrequency };
