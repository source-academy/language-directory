import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python4Cse: IEvaluatorDefinition = {
    id: "python4Cse",
    name: "CSE",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator4.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **CSE** evaluator, which runs Python §4 using the CSE machine.`,
    defaultProgram: `print("hello world")\n`
};

const python4Pyodide: IEvaluatorDefinition = {
    id: "python4Pyodide",
    name: "Pyodide",
    path: "https://source-academy.github.io/py-slang/PyodideEvaluator4.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **Pyodide** evaluator, which runs Python §4 using the full CPython runtime via WebAssembly. **Experimental**: Source Academy's own modules (e.g. Runes) are not supported — only packages installable from PyPI.`,
    defaultProgram: `print("hello world")\n`
};

const python4Pvml: IEvaluatorDefinition = {
    id: "python4Pvml",
    name: "PVML",
    path: "https://source-academy.github.io/py-slang/PyPvmlEvaluator4.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **PVML** evaluator, which compiles Python §4 to PVML bytecode and runs it on a pure-TypeScript virtual machine — no native binary and no CPython WebAssembly runtime involved.`,
    defaultProgram: `print("hello world")\n`
};

const python4Wasm: IEvaluatorDefinition = {
    id: "python4Wasm",
    name: "WASM",
    path: "https://source-academy.github.io/py-slang/PyWasmEvaluator4.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **WASM** evaluator, which compiles Python §4 directly to a WebAssembly module and runs it natively in the browser. **Experimental**: module calls rely on WebAssembly's JS Promise Integration (JSPI), currently supported in Chrome-based browsers only.`,
    defaultProgram: `print("hello world")\n`
};

const python4Py2js: IEvaluatorDefinition = {
    id: "python4Py2js",
    name: "Py2JS",
    path: "https://source-academy.github.io/py-slang/Py2JsEvaluator4.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **Py2JS** evaluator, which compiles Python §4 directly to JavaScript and runs it on the browser's own JavaScript engine, rather than through an interpreter loop.`,
    defaultProgram: `print("hello world")\n`
};

export const python4Language: ILanguageDefinition = {
    id: "python4",
    name: "Python §4",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy", titleImageUrl: "https://source-academy.github.io/sicp/sicpy.png" },
    evaluators: [
        python4Py2js,
        python4Pvml,
        python4Cse,
        python4Wasm,
        python4Pyodide,
    ],
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen **Python §4**, matching SICPy §4.`
};
