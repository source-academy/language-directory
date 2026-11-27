import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python4Py2js: IEvaluatorDefinition = {
    id: "python4Py2js",
    name: "py2js",
    path: "https://source-academy.github.io/py-slang/Py2JsEvaluator4.js",
    capabilities: [],
    welcome: `You have chosen the **Py2JS** evaluator, which compiles Python §4 directly to JavaScript and runs it on the browser's own JavaScript engine, rather than through an interpreter loop.\n\nThis evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`
};

const python4EStepper: IEvaluatorDefinition = {
    id: "python4EStepper",
    name: "Python §4",
    path: "https://source-academy.github.io/py-slang/PyEStepperEvaluator4.js",
    capabilities: [EvaluatorCapability.E_STEPPER],
    plugin: "e-stepper",
};

const python4Pvml: IEvaluatorDefinition = {
    id: "python4Pvml",
    name: "PVML",
    path: "https://source-academy.github.io/py-slang/PyPvmlEvaluator4.js",
    capabilities: [],
    welcome: `You have chosen the **PVML** evaluator, which compiles Python §4 to PVML bytecode and runs it on a virtual machine written in TypeScript.\n\nThis evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`
};

const python4Wasm: IEvaluatorDefinition = {
    id: "python4Wasm",
    name: "WASM",
    path: "https://source-academy.github.io/py-slang/PyWasmEvaluator4.js",
    capabilities: [],
    welcome: `You have chosen the **WASM** evaluator, which compiles Python §4 directly to a WebAssembly module and runs it in the browser. **Experimental**: calls of module functions rely on WebAssembly's JavaScript Promise Integration (JSPI), which only Chrome-based browsers support so far.\n\nIn Chrome, this evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`
};

const python4CPython: IEvaluatorDefinition = {
    id: "python4CPython",
    name: "CPython",
    path: "https://source-academy.github.io/py-slang/PyodideEvaluator4.js",
    capabilities: [],
    welcome: `You have chosen the **CPython** evaluator, which runs Python §4 on CPython, Python's reference implementation, compiled to WebAssembly ([Pyodide](https://pyodide.org/)). **Experimental**: calls of [Source Academy module](https://source-academy.github.io/modules/documentation/) functions rely on WebAssembly's JavaScript Promise Integration (JSPI), which only Chrome-based browsers support so far.`
};

const python4Cse: IEvaluatorDefinition = {
    id: "python4Cse",
    name: "CSE machine",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator4.js",
    capabilities: [EvaluatorCapability.CSE],
    plugin: "cse-machine",
    welcome: `You have chosen the **CSE machine** evaluator for Python §4, which runs your program step by step so the Control, Stash and Environment can be visualised.`
};

export const python4Language: ILanguageDefinition = {
    id: "python4",
    name: "Python §4",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy", route: "/sicpy", titleImageUrl: "https://source-academy.github.io/sicp/sicpy.png", chapters: ["4", "5"] },
    documentation: { languageUrl: "https://docs.sourceacademy.org/python/python_4/" },
    editorConfig: { aceMode: "python" },
    evaluators: [
        python4Py2js,
        python4Pvml,
        python4Wasm,
        python4CPython,
        python4Cse,
        python4EStepper,
    ],
    defaultFileExtension: "py",
    defaultProgram: "# Type your program in here!\n\n",
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen [**Python §4**](https://docs.sourceacademy.org/python/python_4/), matching [**SICPy §4**](https://sourceacademy.org/sicpy/4). Read the [Python Style Guide](https://docs.sourceacademy.org/python/python_styleguide.pdf) for how to lay out your programs.`
};
