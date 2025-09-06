import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const source2Default: IEvaluatorDefinition = {
    id: "source2Default",
    name: "Default",
    path: "https://source-academy.github.io/js-slang-lean/evaluator2.js",
    capabilities: []
};

export const source2Language: ILanguageDefinition = {
    id: "source2",
    name: "Source 2",
    evaluators: [
        source2Default
    ],
};
