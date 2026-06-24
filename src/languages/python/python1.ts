import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python1Default: IEvaluatorDefinition = {
    id: "python1Default",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator1.js",
    capabilities: [],
    welcome: `You have chosen the **Default** evaluator, which runs Python §1 using the CSE machine.`
};

const python1Pyodide: IEvaluatorDefinition = {
    id: "python1Pyodide",
    name: "Pyodide",
    path: "https://source-academy.github.io/py-slang/pyodide-evaluator-1.js",
    capabilities: [],
    welcome: `You have chosen the **Pyodide** evaluator, which runs Python §1 using the full CPython runtime via WebAssembly.`
};

export const python1Language: ILanguageDefinition = {
    id: "python1",
    name: "Python §1",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy" },
    evaluators: [
        python1Default,
        python1Pyodide,
    ],
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen **Python §1**, matching SICPy §1.`
};
