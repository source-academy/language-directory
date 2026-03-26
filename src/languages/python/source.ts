import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const pythonSourceDefault: IEvaluatorDefinition = {
    id: "pythonSourceDefault",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/python-evaluator.cjs",
    capabilities: []
};

export const pythonSourceLanguage: ILanguageDefinition = {
    id: "pythonSource",
    name: "Python Source",
    evaluators: [
        pythonSourceDefault
    ],
};
