import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const source1Default: IEvaluatorDefinition = {
    id: "source1Default",
    name: "Default",
    path: "https://source-academy.github.io/js-slang-lean/evaluator1.js",
    capabilities: []
};

export const source1Language: ILanguageDefinition = {
    id: "source1",
    name: "Source 1",
    textbook: { url: "https://sicp.sourceacademy.org/json/", name: "SICP JS" },
    evaluators: [
        source1Default
    ],
};
