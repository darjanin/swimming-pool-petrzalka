async function parseData(): Promise<[string, number][]> {
  let data: [string, number][] = [];
  for await (const dirEntry of Deno.readDir("./data")) {
    if (dirEntry.name.split(".")[1] === "txt") {
      const rows = (await Deno.readTextFile(`./data/${dirEntry.name}`)).split(
        "\n"
      );
      data = [
        ...data,
        ...rows
          .slice(0, rows.length - 1)
          .map((a): [string, number] => [
            a.split("\t")[0],
            Number(a.split("\t")[1]),
          ]),
      ];
    }
  }
  return data.sort((a, b) => a[0].localeCompare(b[0]));
}
const data: [string, number][] = await parseData();

const horizontalStep = 5;
const minimalVertical = Math.min(...data.map(([_, a]) => a));
const verticalStep = 100 / Math.max(...data.map(([_, a]) => a));

const rendered = data.reduce((previousValue, [_, value], idx) => {
  const newPoint = `${idx !== 0 ? "L" : "M"} ${idx * horizontalStep} ${
    100 - value * verticalStep
  }\n`;
  return previousValue + newPoint;
}, "");

const documentString = `const input = ${JSON.stringify(
  data.map(([label, value]) => {
    return { label, value: Number(value) };
  })
)}
`;

console.log(documentString);
