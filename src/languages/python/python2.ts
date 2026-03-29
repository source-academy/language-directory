import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python2Default: IEvaluatorDefinition = {
    id: "python2Default",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/pyodide-evaluator-2.js",
    capabilities: []
};

export const python2Language: ILanguageDefinition = {
    id: "python2",
    name: "Python 2",
    evaluators: [
        python2Default
    ],
};
