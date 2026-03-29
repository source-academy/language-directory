import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const pythonFullDefault: IEvaluatorDefinition = {
    id: "pythonFullDefault",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/pyodide-evaluator-full.js",
    capabilities: []
};

export const pythonFullLanguage: ILanguageDefinition = {
    id: "pythonFull",
    name: "Python Full",
    evaluators: [
        pythonFullDefault
    ],
};
