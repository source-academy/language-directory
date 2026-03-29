import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python4Default: IEvaluatorDefinition = {
    id: "python4Default",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/pyodide-evaluator-4.js",
    capabilities: []
};

export const python4Language: ILanguageDefinition = {
    id: "python4",
    name: "Python 4",
    evaluators: [
        python4Default
    ],
};
