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
  return data;
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

const documentString = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Swimming pool</title>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <svg
      viewBox="0 0 ${horizontalStep * data.length} 100"
      style="height: 100vh"
      xmlns="http://www.w3.org/2000/svg"
    >
      
      <line
        stroke-width="0.5"
        stroke-opacity="0.5"
        x1="0"
        y1="20"
        x2="${horizontalStep * data.length}"
        y2="20"
        stroke="rgba(100, 100, 100, 0.5)"
      />
      <line
        stroke-width="0.5"
        stroke-opacity="0.5"
        x1="0"
        y1="40"
        x2="${horizontalStep * data.length}"
        y2="40"
        stroke="rgba(100, 100, 100, 0.5)"
      />
      <line
        stroke-width="0.5"
        stroke-opacity="0.5"
        x1="0"
        y1="60"
        x2="${horizontalStep * data.length}"
        y2="60"
        stroke="rgba(100, 100, 100, 0.5)"
      />
      <line
        stroke-width="0.5"
        stroke-opacity="0.5"
        x1="0"
        y1="80"
        x2="${horizontalStep * data.length}"
        y2="80"
        stroke="rgba(100, 100, 100, 0.5)"
      />
      <line
        stroke-width="0.5"
        stroke-opacity="0.5"
        x1="0"
        y1="100"
        x2="${horizontalStep * data.length}"
        y2="100"
        stroke="rgba(100, 100, 100, 0.5)"
      />
      <path
        stroke-width="0.5"
        stroke-opacity="1"
        fill="none"
        stroke="black"
        d="${rendered}"
      />
    </svg>
  </body>
</html>
`;

console.log(documentString);
