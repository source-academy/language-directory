import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python2Py2js: IEvaluatorDefinition = {
    id: "python2Py2js",
    name: "py2js",
    path: "https://source-academy.github.io/py-slang/Py2JsEvaluator2.js",
    capabilities: [],
    welcome: `You have chosen the **Py2JS** evaluator, which compiles Python §2 directly to JavaScript and runs it on the browser's own JavaScript engine, rather than through an interpreter loop.\n\nThis evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`
};

const python2Stepper: IEvaluatorDefinition = {
    id: "python2Stepper",
    name: "Python §2",
    path: "https://source-academy.github.io/py-slang/PyStepperEvaluator2.js",
    capabilities: [EvaluatorCapability.STEPPER]
};

const python2Pvml: IEvaluatorDefinition = {
    id: "python2Pvml",
    name: "PVML",
    path: "https://source-academy.github.io/py-slang/PyPvmlEvaluator2.js",
    capabilities: [],
    welcome: `You have chosen the **PVML** evaluator, which compiles Python §2 to PVML bytecode and runs it on a virtual machine written in TypeScript.\n\nThis evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`
};

const python2Wasm: IEvaluatorDefinition = {
    id: "python2Wasm",
    name: "WASM",
    path: "https://source-academy.github.io/py-slang/PyWasmEvaluator2.js",
    capabilities: [],
    welcome: `You have chosen the **WASM** evaluator, which compiles Python §2 directly to a WebAssembly module and runs it in the browser. **Experimental**: calls of module functions rely on WebAssembly's JavaScript Promise Integration (JSPI), which only Chrome-based browsers support so far.\n\nIn Chrome, this evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`
};

const python2CPython: IEvaluatorDefinition = {
    id: "python2CPython",
    name: "CPython",
    path: "https://source-academy.github.io/py-slang/PyodideEvaluator2.js",
    capabilities: [],
    welcome: `You have chosen the **CPython** evaluator, which runs Python §2 on CPython, Python's reference implementation, compiled to WebAssembly ([Pyodide](https://pyodide.org/)). **Experimental**: calls of [Source Academy module](https://source-academy.github.io/modules/documentation/) functions rely on WebAssembly's JavaScript Promise Integration (JSPI), which only Chrome-based browsers support so far.`
};

export const python2Language: ILanguageDefinition = {
    id: "python2",
    name: "Python §2",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy", route: "/sicpy", titleImageUrl: "https://source-academy.github.io/sicp/sicpy.png" },
    documentation: { languageUrl: "https://docs.sourceacademy.org/python/python_2/" },
    editorConfig: { aceMode: "python" },
    evaluators: [
        python2Py2js,
        python2Pvml,
        python2Wasm,
        python2CPython,
        python2Stepper,
    ],
    defaultFileExtension: "py",
    defaultProgram: "# Type your program in here!\n\n",
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen [**Python §2**](https://docs.sourceacademy.org/python/python_2/), matching [**SICPy §2**](https://sourceacademy.org/sicpy/2). Read the [Python Style Guide](https://docs.sourceacademy.org/python/python_styleguide.pdf) for how to lay out your programs.`
};
