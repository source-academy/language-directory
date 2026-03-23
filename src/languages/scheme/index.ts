import { ILanguageDefinition } from "../../types";

const schemeEvaluator = {
  id: "schemeDefault",
  name: "Default",
  path: "http://localhost:8126/scm-slang-evaluator.js",
  capabilities: []
};

export const schemeLanguage: ILanguageDefinition = {
  id: "scheme",
  name: "Scheme",
  evaluators: [schemeEvaluator]
};
