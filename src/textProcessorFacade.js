import { TextProcessorFluentAPI } from "./textProcessorFluentAPI.js";

export default class TextProcessorFacade {
  constructor(content) {
    this.textProcessorFluentAPI = new TextProcessorFluentAPI(content);
  }

  execute() {
    return this.textProcessorFluentAPI
      .extractPeopleData()
      .dividTextInColums()
      .removeEmptyCharacters()
      .mapPerson()
      .build();
  }
}
