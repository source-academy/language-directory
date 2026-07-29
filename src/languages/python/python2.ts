import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python2Py2js: IEvaluatorDefinition = {
    id: "python2Py2js",
    name: "Python §2",
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

export const python2Language: ILanguageDefinition = {
    id: "python2",
    name: "Python §2",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy", titleImageUrl: "https://source-academy.github.io/sicp/sicpy.png" },
    evaluators: [
        python2Py2js,
        python2Stepper,
    ],
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen [**Python §2**](https://docs.sourceacademy.org/python/python_2/), matching [**SICPy §2**](https://sourceacademy.org/sicpy/2).`
};
