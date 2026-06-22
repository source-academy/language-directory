import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const source4Default: IEvaluatorDefinition = {
    id: "source4Default",
    name: "Default",
    path: "https://source-academy.github.io/js-slang-lean/evaluator4.js",
    capabilities: []
};

export const source4Language: ILanguageDefinition = {
    id: "source4",
    name: "Source 4",
    textbookUrl: "https://sicp.sourceacademy.org/json/",
    evaluators: [
        source4Default
    ],
};
