import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const source1Default: IEvaluatorDefinition = {
    id: "source1Default",
    name: "Default",
    path: "https://source-academy.github.io/js-slang-lean/evaluator1.js",
    capabilities: [],
    welcome: `You have chosen the **Default** evaluator for Source §1.`
};

export const source1Language: ILanguageDefinition = {
    id: "source1",
    name: "Source §1",
    textbook: { url: "https://sicp.sourceacademy.org/json/", name: "SICP JS" },
    evaluators: [
        source1Default
    ],
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, JavaScript Edition_](https://sourceacademy.org/sicpjs/) uses JavaScript sublanguages that we call [_Source_](https://docs.sourceacademy.org/). You have chosen **Source §1**, matching SICP JS §1.`
};
