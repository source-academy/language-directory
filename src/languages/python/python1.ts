import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python1Cse: IEvaluatorDefinition = {
    id: "python1Cse",
    name: "CSE",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator1.js",
    capabilities: [],
    welcome: `You have chosen the **CSE** evaluator, which runs Python §1 using the CSE machine.`
};

const python1Pyodide: IEvaluatorDefinition = {
    id: "python1Pyodide",
    name: "Pyodide",
    path: "https://source-academy.github.io/py-slang/PyodideEvaluator1.js",
    capabilities: [],
    welcome: `You have chosen the **Pyodide** evaluator, which runs Python §1 using the full CPython runtime via WebAssembly. **Experimental**: Source Academy's own modules (e.g. Runes) are not supported — only packages installable from PyPI.`
};

const python1Pvml: IEvaluatorDefinition = {
    id: "python1Pvml",
    name: "PVML",
    path: "https://source-academy.github.io/py-slang/PyPvmlEvaluator1.js",
    capabilities: [],
    welcome: `You have chosen the **PVML** evaluator, which compiles Python §1 to PVML bytecode and runs it on a pure-TypeScript virtual machine — no native binary and no CPython WebAssembly runtime involved.`
};

const python1Wasm: IEvaluatorDefinition = {
    id: "python1Wasm",
    name: "WASM",
    path: "https://source-academy.github.io/py-slang/PyWasmEvaluator1.js",
    capabilities: [],
    welcome: `You have chosen the **WASM** evaluator, which compiles Python §1 directly to a WebAssembly module and runs it natively in the browser.`
};

const python1Py2js: IEvaluatorDefinition = {
    id: "python1Py2js",
    name: "Py2JS",
    path: "https://source-academy.github.io/py-slang/Py2JsEvaluator1.js",
    capabilities: [],
    welcome: `You have chosen the **Py2JS** evaluator, which compiles Python §1 directly to JavaScript and runs it on the browser's own JavaScript engine, rather than through an interpreter loop.`
};

const python1Stepper: IEvaluatorDefinition = {
    id: "python1Stepper",
    name: "Stepper",
    path: "https://source-academy.github.io/py-slang/PyStepperEvaluator1.js",
    capabilities: [EvaluatorCapability.STEPPER]
};

export const python1Language: ILanguageDefinition = {
    id: "python1",
    name: "Python §1",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy", titleImageUrl: "https://source-academy.github.io/sicp/sicpy.png" },
    evaluators: [
        python1Cse,
        python1Pyodide,
        python1Pvml,
        python1Wasm,
        python1Py2js,
        python1Stepper,
    ],
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen **Python §1**, matching SICPy §1.`
};
