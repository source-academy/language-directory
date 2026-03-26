import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const pythonPyodideDefault: IEvaluatorDefinition = {
    id: "pythonPyodideDefault",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/pyodide-evaluator.cjs",
    capabilities: []
};

export const pythonPyodideLanguage: ILanguageDefinition = {
    id: "pythonPyodide",
    name: "Python Pyodide",
    evaluators: [
        pythonPyodideDefault
    ],
};
