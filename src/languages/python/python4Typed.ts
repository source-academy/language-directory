import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python4TypedPy2js: IEvaluatorDefinition = {
    id: "python4TypedPy2js",
    name: "py2js",
    path: "https://source-academy.github.io/py-slang/TypedPy2JsEvaluator4.js",
    capabilities: [],
    welcome: `You have chosen the **Py2JS** evaluator for Typed Python §4. It checks the types of your program, and then compiles it directly to JavaScript and runs it on the browser's own JavaScript engine, rather than through an interpreter loop.\n\nA program with type errors is not run: every error is shown, with its line. Importing [Source Academy modules](https://source-academy.github.io/modules/documentation/) is not supported in Typed Python §4 yet.`
};

const python4TypedEStepper: IEvaluatorDefinition = {
    id: "python4TypedEStepper",
    name: "Typed Python §4",
    path: "https://source-academy.github.io/py-slang/TypedPyEStepperEvaluator4.js",
    capabilities: [EvaluatorCapability.E_STEPPER],
};

export const python4TypedLanguage: ILanguageDefinition = {
    id: "python4Typed",
    name: "Typed Python §4",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy", route: "/sicpy", titleImageUrl: "https://source-academy.github.io/sicp/sicpy.png" },
    // The library of Typed Python §4 is that of Python §4: its documentation is the one to read.
    documentation: { languageUrl: "https://docs.sourceacademy.org/python/python_4/" },
    evaluators: [
        python4TypedPy2js,
        python4TypedEStepper,
    ],
    defaultFileExtension: "py",
    defaultProgram: "# Type your program in here!\n# Every function says the types of its parameters and of its result, as in\n#\n#     def double(x: int) -> int:\n#         return 2 * x\n\n",
    welcome: `Welcome to the Source Academy playground!

You have chosen **Typed Python §4**: [Python §4](https://docs.sourceacademy.org/python/python_4/) with type annotations, which are checked before your program runs. Every function says the types of its parameters and of its result, \`Pair\`, \`LList\` and \`Stream\` are the types of pairs, linked lists and streams, and a function that works for any type has a type parameter, as in \`def identity[A](a: A) -> A\`. Read the [Python Style Guide](https://docs.sourceacademy.org/python/python_styleguide.pdf) for how to lay out your programs.`
};
