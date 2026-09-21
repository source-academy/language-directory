import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const source3Default: IEvaluatorDefinition = {
    id: "source3Default",
    name: "Default",
    path: "https://source-academy.github.io/js-slang/SourceEvaluator3.js",
    capabilities: [],
    welcome: `You have chosen the **Default** evaluator for Source §3, which compiles your program to JavaScript and runs it on the browser's own JavaScript engine.`
};

const source3Cse: IEvaluatorDefinition = {
    id: "source3Cse",
    name: "CSE machine",
    path: "https://source-academy.github.io/js-slang/SourceCseEvaluator3.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **CSE machine** evaluator for Source §3, which runs your program step by step so the Control, Stash and Environment can be visualised.`
};

export const source3Language: ILanguageDefinition = {
    id: "source3",
    name: "Source §3",
    textbook: { url: "https://sicp.sourceacademy.org/json/", name: "SICP JS", titleImageUrl: "https://source-academy.github.io/sicp/sicpjs.png" },
    evaluators: [
        source3Default,
        source3Cse
    ],
    defaultProgram: "// Type your program in here!\n\n",
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, JavaScript Edition_](https://sourceacademy.org/sicpjs/) uses JavaScript sublanguages that we call [_Source_](https://docs.sourceacademy.org/). You have chosen **Source §3**, matching SICP JS §3.`
};
