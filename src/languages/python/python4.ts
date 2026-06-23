import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python4Default: IEvaluatorDefinition = {
    id: "python4Default",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator4.js",
    capabilities: []
};

const python4Pyodide: IEvaluatorDefinition = {
    id: "python4Pyodide",
    name: "Pyodide",
    path: "https://source-academy.github.io/py-slang/pyodide-evaluator-4.js",
    capabilities: []
};

export const python4Language: ILanguageDefinition = {
    id: "python4",
    name: "Python 4",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy" },
    evaluators: [
        python4Default, 
        python4Pyodide,
    ],
};
