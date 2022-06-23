import { readFile, writeFile } from "node:fs/promises";
import { DEFAULT_EXPORT_PATH } from "../const.js";
import { pure } from "./pure.js";
import { rawToList, listToRaw, parseCommandTime } from "./helper.js";

function merge(raw1, raw2) {
  const list1 = rawToList(pure(raw1));
  const list2 = rawToList(pure(raw2));
  const mergedList = [];

  let i = 0;
  let j = 0;
  while (i < list1.length && j < list2.length) {
    if (parseCommandTime(list1[i]) <= parseCommandTime(list2[j])) {
      mergedList.push(list1[i]);
      i++;
    } else {
      mergedList.push(list2[j]);
      j++;
    }
  }

  if (i < list1.length) {
    mergedList.push(...list1.slice(i));
  } else {
    mergedList.push(...list2.slice(j));
  }

  return listToRaw(mergedList);
}

async function main(filePath1, filePath2) {
  const [raw1, raw2] = await Promise.all([
    readFile(filePath1, { encoding: "utf8" }),
    readFile(filePath2, { encoding: "utf8" }),
  ]);

  await writeFile(DEFAULT_EXPORT_PATH, merge(raw1, raw2));
}

export default main;
