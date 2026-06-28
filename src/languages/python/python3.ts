import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python3Default: IEvaluatorDefinition = {
    id: "python3Default",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator3.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **Default** evaluator, which runs Python §3 using the CSE machine.`,
    defaultProgram: `print("hello world")\n`
};

const python3Pyodide: IEvaluatorDefinition = {
    id: "python3Pyodide",
    name: "Pyodide",
    path: "https://source-academy.github.io/py-slang/pyodide-evaluator-3.js",
    capabilities: [],
    welcome: `You have chosen the **Pyodide** evaluator, which runs Python §3 using the full CPython runtime via WebAssembly.`,
    defaultProgram: `print("hello world")\n`
};

export const python3Language: ILanguageDefinition = {
    id: "python3",
    name: "Python §3",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy" },
    evaluators: [
        python3Default,
        python3Pyodide,
    ],
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen **Python §3**, matching SICPy §3.`
};
