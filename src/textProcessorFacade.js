import { TextProcessorFluentAPI } from "./textProcessorFluentAPI";

export default class TextProcessorFacade {
  constructor(content) {
    this.textProcessorFluentAPI = new TextProcessorFluentAPI(content);
  }

  execute() {
    this.textProcessorFluentAPI
      .extractPeopleData()
      .dividTextInColums()
      .removeEmptyCharacters()
      .mapPerson()
      .build();
  }
}
