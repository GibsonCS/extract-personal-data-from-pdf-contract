import safeRegex from "safe-regex";
import InvalidRegexError from "../errs/invalidRegexError.js";

export const evaluateRegex = (regex) => {
  const isSafe = safeRegex(regex);
  if (isSafe) return regex;

  throw new InvalidRegexError(regex);
};
