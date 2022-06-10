function getStringTime(str) {
  return str.slice(2, 12);
}

function merge(raw1, raw2) {
  const result = raw1
    .split("\n")
    .concat(raw2.split("\n"))
    .filter((str) => str[0] === ":") // delete useless lines
    .sort((a, b) => getStringTime(a) - getStringTime(b)) // soruce rawfile may disorderly
    .join("\n");

  console.log(result);
}

export { merge };
