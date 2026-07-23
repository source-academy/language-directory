import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python3Cse: IEvaluatorDefinition = {
    id: "python3Cse",
    name: "CSE",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator3.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **CSE** evaluator, which runs Python §3 using the CSE machine.`,
    defaultProgram: `print("hello world")\n`
};

const python3Pyodide: IEvaluatorDefinition = {
    id: "python3Pyodide",
    name: "Pyodide",
    path: "https://source-academy.github.io/py-slang/PyodideEvaluator3.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **Pyodide** evaluator, which runs Python §3 using the full CPython runtime via WebAssembly. **Experimental**: Source Academy's own modules (e.g. Runes) are not supported — only packages installable from PyPI.`,
    defaultProgram: `print("hello world")\n`
};

const python3Pvml: IEvaluatorDefinition = {
    id: "python3Pvml",
    name: "PVML",
    path: "https://source-academy.github.io/py-slang/PyPvmlEvaluator3.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **PVML** evaluator, which compiles Python §3 to PVML bytecode and runs it on a pure-TypeScript virtual machine — no native binary and no CPython WebAssembly runtime involved.`,
    defaultProgram: `print("hello world")\n`
};

const python3Wasm: IEvaluatorDefinition = {
    id: "python3Wasm",
    name: "WASM",
    path: "https://source-academy.github.io/py-slang/PyWasmEvaluator3.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **WASM** evaluator, which compiles Python §3 directly to a WebAssembly module and runs it natively in the browser. **Experimental**: module calls rely on WebAssembly's JS Promise Integration (JSPI), currently supported in Chrome-based browsers only.`,
    defaultProgram: `print("hello world")\n`
};

const python3Py2js: IEvaluatorDefinition = {
    id: "python3Py2js",
    name: "Py2JS",
    path: "https://source-academy.github.io/py-slang/Py2JsEvaluator3.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **Py2JS** evaluator, which compiles Python §3 directly to JavaScript and runs it on the browser's own JavaScript engine, rather than through an interpreter loop.`,
    defaultProgram: `print("hello world")\n`
};

const python3Pynter: IEvaluatorDefinition = {
    id: "python3Pynter",
    name: "Pynter",
    path: "https://source-academy.github.io/py-slang/PyPvmlPynterEvaluator.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **Pynter** evaluator, which compiles Python §3 to PVML bytecode and runs it on Pynter, Source Academy's native C bytecode VM, compiled to WebAssembly — no CPython runtime, no TypeScript interpreter loop. **Experimental**: Pynter targets 32-bit embedded hardware, so numbers have limited range and precision — integers are ~21-bit (roughly ±2^20) and floats are single-precision (32-bit), not Python's usual arbitrary-precision ints or 64-bit doubles.`,
    defaultProgram: `print("hello world")\n`
};

export const python3Language: ILanguageDefinition = {
    id: "python3",
    name: "Python §3",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy", titleImageUrl: "https://source-academy.github.io/sicp/sicpy.png" },
    evaluators: [
        python3Py2js,
        python3Pvml,
        python3Cse,
        python3Wasm,
        python3Pyodide,
        python3Pynter,
    ],
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen **Python §3**, matching SICPy §3.`
};
