import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python3Default: IEvaluatorDefinition = {
    id: "python3Default",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/pyodide-evaluator-3.js",
    capabilities: []
};

export const python3Language: ILanguageDefinition = {
    id: "python3",
    name: "Python 3",
    evaluators: [
        python3Default
    ],
};
