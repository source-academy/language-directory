import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python2Default: IEvaluatorDefinition = {
    id: "python2Default",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator2.js",
    capabilities: []
};

const python2Pyodide: IEvaluatorDefinition = {
    id: "python2Pyodide",
    name: "Pyodide",
    path: "https://source-academy.github.io/py-slang/pyodide-evaluator-2.js",
    capabilities: []
};

const python2Wasm: IEvaluatorDefinition = {
    id: "python2Wasm",
    name: "WebAssembly",
    path: "https://source-academy.github.io/py-slang/PyWasmEvaluator2.js",
    capabilities: []
};

export const python2Language: ILanguageDefinition = {
    id: "python2",
    name: "Python 2",
    evaluators: [
        python2Default, 
        python2Pyodide,
        python2Wasm,
    ],
};
