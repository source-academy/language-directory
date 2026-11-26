import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python1Py2js: IEvaluatorDefinition = {
    id: "python1Py2js",
    name: "py2js",
    path: "https://source-academy.github.io/py-slang/Py2JsEvaluator1.js",
    capabilities: [],
    welcome: `You have chosen the **Py2JS** evaluator, which compiles Python §1 directly to JavaScript and runs it on the browser's own JavaScript engine, rather than through an interpreter loop.\n\nThis evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`
};

const python1Stepper: IEvaluatorDefinition = {
    id: "python1Stepper",
    name: "Python §1",
    path: "https://source-academy.github.io/py-slang/PyStepperEvaluator1.js",
    capabilities: [EvaluatorCapability.STEPPER],
    plugin: "stepper",
};

const python1Pvml: IEvaluatorDefinition = {
    id: "python1Pvml",
    name: "PVML",
    path: "https://source-academy.github.io/py-slang/PyPvmlEvaluator1.js",
    capabilities: [],
    welcome: `You have chosen the **PVML** evaluator, which compiles Python §1 to PVML bytecode and runs it on a virtual machine written in TypeScript.\n\nThis evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`
};

const python1Wasm: IEvaluatorDefinition = {
    id: "python1Wasm",
    name: "WASM",
    path: "https://source-academy.github.io/py-slang/PyWasmEvaluator1.js",
    capabilities: [],
    welcome: `You have chosen the **WASM** evaluator, which compiles Python §1 directly to a WebAssembly module and runs it in the browser. **Experimental**: calls of module functions rely on WebAssembly's JavaScript Promise Integration (JSPI), which only Chrome-based browsers support so far.\n\nIn Chrome, this evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`
};

const python1CPython: IEvaluatorDefinition = {
    id: "python1CPython",
    name: "CPython",
    path: "https://source-academy.github.io/py-slang/PyodideEvaluator1.js",
    capabilities: [],
    welcome: `You have chosen the **CPython** evaluator, which runs Python §1 on CPython, Python's reference implementation, compiled to WebAssembly ([Pyodide](https://pyodide.org/)). **Experimental**: calls of [Source Academy module](https://source-academy.github.io/modules/documentation/) functions rely on WebAssembly's JavaScript Promise Integration (JSPI), which only Chrome-based browsers support so far.`
};

export const python1Language: ILanguageDefinition = {
    id: "python1",
    name: "Python §1",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy", route: "/sicpy", titleImageUrl: "https://source-academy.github.io/sicp/sicpy.png", chapters: ["1"] },
    documentation: { languageUrl: "https://docs.sourceacademy.org/python/python_1/" },
    editorConfig: { aceMode: "python" },
    evaluators: [
        python1Py2js,
        python1Pvml,
        python1Wasm,
        python1CPython,
        python1Stepper,
    ],
    // §1 has no pair/list library, which local-file imports need to build
    // the exports-transfer structure they pass between files.
    foldersEnabled: false,
    defaultFileExtension: "py",
    defaultProgram: "# Type your program in here!\n\n",
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen [**Python §1**](https://docs.sourceacademy.org/python/python_1/), matching [**SICPy §1**](https://sourceacademy.org/sicpy/1). Read the [Python Style Guide](https://docs.sourceacademy.org/python/python_styleguide.pdf) for how to lay out your programs.`
};
