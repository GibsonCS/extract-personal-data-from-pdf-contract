import { evaluateRegex } from "./util/evaluateRegex.js";

export class TextProcessorFluentAPI {
  #content;
  constructor(content) {
    this.#content = content;
  }

  extractPeopleData() {
    const mathRegex = evaluateRegex(
      /(?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*)$/gim
    );
    const peopleData = this.#content.match(mathRegex);
    this.#content = peopleData;
    return this;
  }

  build() {
    return this.#content;
  }
}
