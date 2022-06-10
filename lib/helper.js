function rawToList(raw) {
  return raw.split("\n");
}

function listToRaw(list) {
  return list.join("\n");
}

function parseCommandTime(command) {
  return command.slice(2, 12);
}

function parseCommandList(raw) {
  const commandList = rawToList(raw).map((line) =>
    line.slice(line.indexOf(";") + 1)
  );

  return commandList;
}

export { rawToList, listToRaw, parseCommandTime, parseCommandList };
