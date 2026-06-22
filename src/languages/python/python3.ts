import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python3Default: IEvaluatorDefinition = {
    id: "python3Default",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator3.js",
    capabilities: []
};

const python3Pyodide: IEvaluatorDefinition = {
    id: "python3Pyodide",
    name: "Pyodide",
    path: "https://source-academy.github.io/py-slang/pyodide-evaluator-3.js",
    capabilities: []
};

export const python3Language: ILanguageDefinition = {
    id: "python3",
    name: "Python 3",
    textbookUrl: "https://sicp.sourceacademy.org/json_py/",
    evaluators: [
        python3Default, 
        python3Pyodide,
    ],
};
