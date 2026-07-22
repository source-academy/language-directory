import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python2Default: IEvaluatorDefinition = {
    id: "python2Default",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator2.js",
    capabilities: [],
    welcome: `You have chosen the **Default** evaluator, which runs Python §2 using the CSE machine.`
};

const python2Pyodide: IEvaluatorDefinition = {
    id: "python2Pyodide",
    name: "Pyodide",
    path: "https://source-academy.github.io/py-slang/PyodideEvaluator2.js",
    capabilities: [],
    welcome: `You have chosen the **Pyodide** evaluator, which runs Python §2 using the full CPython runtime via WebAssembly. **Experimental**: Source Academy's own modules (e.g. Runes) are not supported — only packages installable from PyPI.`
};

const python2Pvml: IEvaluatorDefinition = {
    id: "python2Pvml",
    name: "PVML",
    path: "https://source-academy.github.io/py-slang/PyPvmlEvaluator2.js",
    capabilities: [],
    welcome: `You have chosen the **PVML** evaluator, which compiles Python §2 to PVML bytecode and runs it on a pure-TypeScript virtual machine — no native binary and no CPython WebAssembly runtime involved.`
};

const python2Wasm: IEvaluatorDefinition = {
    id: "python2Wasm",
    name: "WASM",
    path: "https://source-academy.github.io/py-slang/PyWasmEvaluator2.js",
    capabilities: [],
    welcome: `You have chosen the **WASM** evaluator, which compiles Python §2 directly to a WebAssembly module and runs it natively in the browser.`
};

const python2Py2js: IEvaluatorDefinition = {
    id: "python2Py2js",
    name: "Py2JS",
    path: "https://source-academy.github.io/py-slang/Py2JsEvaluator2.js",
    capabilities: [],
    welcome: `You have chosen the **Py2JS** evaluator, which compiles Python §2 directly to JavaScript and runs it on the browser's own JavaScript engine, rather than through an interpreter loop.`
};

const python2Stepper: IEvaluatorDefinition = {
    id: "python2Stepper",
    name: "Stepper",
    path: "https://source-academy.github.io/py-slang/PyStepperEvaluator2.js",
    capabilities: [EvaluatorCapability.STEPPER]
};

export const python2Language: ILanguageDefinition = {
    id: "python2",
    name: "Python §2",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy", titleImageUrl: "https://source-academy.github.io/sicp/sicpy.png" },
    evaluators: [
        python2Default,
        python2Pyodide,
        python2Pvml,
        python2Wasm,
        python2Py2js,
        python2Stepper,
    ],
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen **Python §2**, matching SICPy §2.`
};
