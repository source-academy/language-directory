import { ILanguageDefinition } from "../../types";

const schemeEvaluator = {
  id: "schemeDefault",
  name: "Default",
  path: "https://source-academy.github.io/scm-slang/scm-slang-evaluator.js",
  capabilities: []
};

export const schemeLanguage: ILanguageDefinition = {
  id: "scheme",
  name: "Scheme",
  evaluators: [schemeEvaluator]
};
