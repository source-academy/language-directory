import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const source4Default: IEvaluatorDefinition = {
    id: "source4Default",
    name: "Default",
    path: "https://source-academy.github.io/js-slang/SourceEvaluator4.js",
    capabilities: [],
    welcome: `You have chosen the **Default** evaluator for Source §4, which compiles your program to JavaScript and runs it on the browser's own JavaScript engine.`
};

const source4Cse: IEvaluatorDefinition = {
    id: "source4Cse",
    name: "CSE machine",
    path: "https://source-academy.github.io/js-slang/SourceCseEvaluator4.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **CSE machine** evaluator for Source §4, which runs your program step by step so the Control, Stash and Environment can be visualised.`
};

export const source4Language: ILanguageDefinition = {
    id: "source4",
    name: "Source §4",
    textbook: { url: "https://sicp.sourceacademy.org/json/", name: "SICP JS", titleImageUrl: "https://source-academy.github.io/sicp/sicpjs.png" },
    evaluators: [
        source4Default,
        source4Cse
    ],
    defaultProgram: "// Type your program in here!\n\n",
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, JavaScript Edition_](https://sourceacademy.org/sicpjs/) uses JavaScript sublanguages that we call [_Source_](https://docs.sourceacademy.org/). You have chosen **Source §4**, matching SICP JS §4.`
};
