import { readFile } from "fs/promises";
import { cwd } from "process";
import pdfParse from "pdf-parse";
import TextProcessorFacade from "./textProcessorFacade.js";

const buffer = await readFile(`${cwd()}/docs/contrato.pdf`);
const data = await pdfParse(buffer);

const textProcessorFacade = new TextProcessorFacade(data.text);
const result = textProcessorFacade.execute();
console.log(result);
