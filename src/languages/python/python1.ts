import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const python1Default: IEvaluatorDefinition = {
    id: "python1Default",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator1.js",
    capabilities: []
};

const python1Pyodide: IEvaluatorDefinition = {
    id: "python1Pyodide",
    name: "Pyodide",
    path: "https://source-academy.github.io/py-slang/pyodide-evaluator-1.js",
    capabilities: []
};

const python1Stepper: IEvaluatorDefinition = {
    id: "python1Stepper",
    name: "Stepper",
    path: "https://source-academy.github.io/py-slang/PyStepperEvaluator1.js",
    capabilities: []
};

export const python1Language: ILanguageDefinition = {
    id: "python1",
    name: "Python 1",
    evaluators: [
        python1Default,
        python1Pyodide,
        python1Stepper,
    ],
};
