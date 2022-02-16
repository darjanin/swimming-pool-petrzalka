import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { printf } from "https://deno.land/std@0.125.0/fmt/printf.ts";

const URL = "https://petrzalka.sk/plavaren/";
const PEOPLE_COUNT_CLASS = ".szp-occupancy";

fetch(URL)
  .then((response) => response.text())
  .then((text) => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, "text/html");
    const section = htmlDocument?.querySelector(PEOPLE_COUNT_CLASS);
    if (section) {
      const text: string = section.innerText;
      const count = Number(text.match(/\d+/));
      printf("%s\t%s\n", new Date().toISOString(), count.toString());
    }
  });
