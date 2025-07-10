import { describe, it } from "mocha";
import { expect } from "chai";
import { validText } from "./mocks/validText.js";
import { TextProcessorFluentAPI } from "../src/textProcessorFluentAPI.js";

describe("textProcessorFluentAPI", () => {
  describe("#build", () => {
    it("should return a valid text", () => {
      const result = new TextProcessorFluentAPI(validText).build();
      expect(result).to.be.deep.equal(validText);
    });
  });

  describe("#extractPeobleData", () => {
    it("should return a people data", () => {
      const result = new TextProcessorFluentAPI(validText)
        .extractPeopleData()
        .build();

      const expected = [
        [
          "Xuxa da Silva, brasileira, casada, CPF 235.743.420-12, residente e ",
          "domiciliada a Rua dos bobos, zero, bairro Alphaville, São Paulo. ",
        ].join("\n"),

        [
          "Júlia Menezes, brasileira, solteira, CPF 297.947.800-81, residente e ",
          "domiciliada a Av. dos Estados, 99, bairro Jardins, São Paulo. ",
        ].join("\n"),
      ];

      expect(result).to.be.deep.equal(expected);
    });
  });

  describe("#divideTextInColumns", () => {
    it("Should return a text divided in columns", () => {
      const content = [
        [
          "Xuxa da Silva, brasileira, casada, CPF 235.743.420-12, residente e ",
          "domiciliada a Rua dos bobos, zero, bairro Alphaville, São Paulo. ",
        ].join("\n"),
      ];

      const result = new TextProcessorFluentAPI(content)
        .dividTextInColums()
        .build();

      const expected = [
        [
          "Xuxa da Silva",
          " brasileira",
          " casada",
          " CPF 235.743.420-12",
          " residente e \ndomiciliada a Rua dos bobos",
          " zero",
          " bairro Alphaville",
          " São Paulo. ",
        ],
      ];

      expect(result).to.be.deep.equal(expected);
    });
  });
});
