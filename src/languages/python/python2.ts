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

// The Python stepper is chapter-agnostic (it parses + substitution-steps any Python program, with no
// chapter restrictions), so every Python chapter shares the single PyStepperEvaluator1 bundle.
const python2Stepper: IEvaluatorDefinition = {
    id: "python2Stepper",
    name: "Stepper",
    path: "https://source-academy.github.io/py-slang/PyStepperEvaluator1.js",
    capabilities: []
};

export const python2Language: ILanguageDefinition = {
    id: "python2",
    name: "Python 2",
    evaluators: [
        python2Default,
        python2Pyodide,
        python2Stepper,
    ],
};
