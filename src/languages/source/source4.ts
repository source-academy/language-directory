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
    evaluators: [
        source4Default
    ],
};
