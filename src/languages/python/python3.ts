import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python3Py2js: IEvaluatorDefinition = {
    id: "python3Py2js",
    name: "py2js",
    path: "https://source-academy.github.io/py-slang/Py2JsEvaluator3.js",
    capabilities: [],
    welcome: `You have chosen the **Py2JS** evaluator, which compiles Python §3 directly to JavaScript and runs it on the browser's own JavaScript engine, rather than through an interpreter loop.\n\nThis evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`
};

const python3Ev3: IEvaluatorDefinition = {
    id: "python3Ev3",
    name: "Python §3",
    path: "https://source-academy.github.io/py-slang/ev3-remote-runner.js",
    capabilities: [EvaluatorCapability.EV3],
};

const python3EStepper: IEvaluatorDefinition = {
    id: "python3EStepper",
    name: "Python §3",
    path: "https://source-academy.github.io/py-slang/PyEStepperEvaluator3.js",
    capabilities: [EvaluatorCapability.E_STEPPER],
};

const python3Pynter: IEvaluatorDefinition = {
    id: "python3Pynter",
    name: "Pynter",
    path: "https://source-academy.github.io/py-slang/PyPvmlPynterEvaluator.js",
    capabilities: [],
    welcome: `You have chosen the **Pynter** evaluator (experimental), which compiles Python §3 to PVML bytecode and runs it on Pynter, Source Academy's bytecode virtual machine written in C, compiled to WebAssembly.\n\nThis evaluator does not yet support the pair, list, stream and visualizer libraries, nor Source Academy modules.`
};

const python3Pvml: IEvaluatorDefinition = {
    id: "python3Pvml",
    name: "PVML",
    path: "https://source-academy.github.io/py-slang/PyPvmlEvaluator3.js",
    capabilities: [],
    welcome: `You have chosen the **PVML** evaluator, which compiles Python §3 to PVML bytecode and runs it on a virtual machine written in TypeScript.\n\nThis evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`
};

const python3Wasm: IEvaluatorDefinition = {
    id: "python3Wasm",
    name: "WASM",
    path: "https://source-academy.github.io/py-slang/PyWasmEvaluator3.js",
    capabilities: [],
    welcome: `You have chosen the **WASM** evaluator, which compiles Python §3 directly to a WebAssembly module and runs it in the browser. **Experimental**: calls of module functions rely on WebAssembly's JavaScript Promise Integration (JSPI), which only Chrome-based browsers support so far.\n\nIn Chrome, this evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`
};

const python3CPython: IEvaluatorDefinition = {
    id: "python3CPython",
    name: "CPython",
    path: "https://source-academy.github.io/py-slang/PyodideEvaluator3.js",
    capabilities: [],
    welcome: `You have chosen the **CPython** evaluator, which runs Python §3 on CPython, Python's reference implementation, compiled to WebAssembly ([Pyodide](https://pyodide.org/)). **Experimental**: calls of [Source Academy module](https://source-academy.github.io/modules/documentation/) functions rely on WebAssembly's JavaScript Promise Integration (JSPI), which only Chrome-based browsers support so far.`
};

const python3Cse: IEvaluatorDefinition = {
    id: "python3Cse",
    name: "CSE machine",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator3.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **CSE machine** evaluator for Python §3, which runs your program step by step so the Control, Stash and Environment can be visualised.`
};

export const python3Language: ILanguageDefinition = {
    id: "python3",
    name: "Python §3",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy", route: "/sicpy", titleImageUrl: "https://source-academy.github.io/sicp/sicpy.png" },
    documentation: { languageUrl: "https://docs.sourceacademy.org/python/python_3/" },
    evaluators: [
        python3Py2js,
        python3Pvml,
        python3Wasm,
        python3CPython,
        python3Pynter,
        python3Cse,
        python3EStepper,
        python3Ev3,
    ],
    defaultFileExtension: "py",
    defaultProgram: "# Type your program in here!\n\n",
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen [**Python §3**](https://docs.sourceacademy.org/python/python_3/), matching [**SICPy §3**](https://sourceacademy.org/sicpy/3). Read the [Python Style Guide](https://docs.sourceacademy.org/python/python_styleguide.pdf) for how to lay out your programs.`
};
