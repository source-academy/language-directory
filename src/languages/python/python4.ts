import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python4Default: IEvaluatorDefinition = {
    id: "python4Default",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator4.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **Default** evaluator, which runs Python §4 using the CSE machine.`,
    defaultProgram: `print("hello world")\n`
};

const python4Pyodide: IEvaluatorDefinition = {
    id: "python4Pyodide",
    name: "Pyodide",
    path: "https://source-academy.github.io/py-slang/pyodide-evaluator-4.js",
    capabilities: [],
    welcome: `You have chosen the **Pyodide** evaluator, which runs Python §4 using the full CPython runtime via WebAssembly.`,
    defaultProgram: `print("hello world")\n`
};

const python4Pvml: IEvaluatorDefinition = {
    id: "python4Pvml",
    name: "PVML",
    path: "https://source-academy.github.io/py-slang/PyPvmlEvaluator4.js",
    capabilities: [],
    welcome: `You have chosen the **PVML** evaluator, which compiles Python §4 to PVML bytecode and runs it on a pure-TypeScript virtual machine — no native binary and no CPython WebAssembly runtime involved.`,
    defaultProgram: `print("hello world")\n`
};

export const python4Language: ILanguageDefinition = {
    id: "python4",
    name: "Python §4",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy", titleImageUrl: "https://source-academy.github.io/sicp/sicpy.png" },
    evaluators: [
        python4Default,
        python4Pyodide,
        python4Pvml,
    ],
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen **Python §4**, matching SICPy §4.`
};
