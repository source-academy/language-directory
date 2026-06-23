import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const source3Default: IEvaluatorDefinition = {
    id: "source3Default",
    name: "Default",
    path: "https://source-academy.github.io/js-slang-lean/evaluator3.js",
    capabilities: []
};

export const source3Language: ILanguageDefinition = {
    id: "source3",
    name: "Source 3",
    textbook: { url: "https://sicp.sourceacademy.org/json/", name: "SICP JS" },
    evaluators: [
        source3Default
    ],
};
