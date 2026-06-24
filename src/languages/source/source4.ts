import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const source4Default: IEvaluatorDefinition = {
    id: "source4Default",
    name: "Default",
    path: "https://source-academy.github.io/js-slang-lean/evaluator4.js",
    capabilities: [],
    welcome: `You have chosen the **Default** evaluator for Source §4.`
};

export const source4Language: ILanguageDefinition = {
    id: "source4",
    name: "Source 4",
    textbook: { url: "https://sicp.sourceacademy.org/json/", name: "SICP JS" },
    evaluators: [
        source4Default
    ],
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, JavaScript Edition_](https://sourceacademy.org/sicpjs/) uses JavaScript sublanguages that we call [_Source_](https://docs.sourceacademy.org/). You have chosen **Source §4**, matching SICP JS §4.`
};
