import { readFile, writeFile } from "node:fs/promises";
import { DEFAULT_EXPORT_PATH } from "../const.js";
import { rawToList, listToRaw, parseCommandTime } from "./helper.js";

function pure(raw) {
  const list = rawToList(raw)
    .filter((str) => str[0] === ":")
    .sort((a, b) => parseCommandTime(a) - parseCommandTime(b));
  return listToRaw(list);
}

async function main(filePath) {
  const raw = await readFile(filePath, { encoding: "utf8" });

  await writeFile(DEFAULT_EXPORT_PATH, pure(raw));
}

export { pure };
export default main;
