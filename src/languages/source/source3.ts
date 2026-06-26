import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const source3Default: IEvaluatorDefinition = {
    id: "source3Default",
    name: "Default",
    path: "https://source-academy.github.io/js-slang-lean/evaluator3.js",
    capabilities: [],
    welcome: `You have chosen the **Default** evaluator for Source §3.`
};

export const source3Language: ILanguageDefinition = {
    id: "source3",
    name: "Source 3",
    textbook: { url: "https://sicp.sourceacademy.org/json/", name: "SICP JS" },
    evaluators: [
        source3Default
    ],
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, JavaScript Edition_](https://sourceacademy.org/sicpjs/) uses JavaScript sublanguages that we call [_Source_](https://docs.sourceacademy.org/). You have chosen **Source §3**, matching SICP JS §3.`
};
