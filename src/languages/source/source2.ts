import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const source2Default: IEvaluatorDefinition = {
    id: "source2Default",
    name: "Default",
    path: "https://source-academy.github.io/js-slang-lean/evaluator2.js",
    capabilities: [],
    welcome: `You have chosen the **Default** evaluator for Source §2.`
};

export const source2Language: ILanguageDefinition = {
    id: "source2",
    name: "Source 2",
    textbook: { url: "https://sicp.sourceacademy.org/json/", name: "SICP JS", titleImageUrl: "https://source-academy.github.io/sicp/sicpjs.png" },
    evaluators: [
        source2Default
    ],
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, JavaScript Edition_](https://sourceacademy.org/sicpjs/) uses JavaScript sublanguages that we call [_Source_](https://docs.sourceacademy.org/). You have chosen **Source §2**, matching SICP JS §2.`
};
