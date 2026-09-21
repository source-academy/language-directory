import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const source2Default: IEvaluatorDefinition = {
    id: "source2Default",
    name: "Default",
    path: "https://source-academy.github.io/js-slang/SourceEvaluator2.js",
    capabilities: [],
    welcome: `You have chosen the **Default** evaluator for Source §2, which compiles your program to JavaScript and runs it on the browser's own JavaScript engine.`
};

const source2Stepper: IEvaluatorDefinition = {
    id: "source2Stepper",
    name: "Stepper",
    path: "https://source-academy.github.io/js-slang/SourceStepperEvaluator2.js",
    capabilities: [EvaluatorCapability.STEPPER]
};

export const source2Language: ILanguageDefinition = {
    id: "source2",
    name: "Source §2",
    textbook: { url: "https://sicp.sourceacademy.org/json/", name: "SICP JS", titleImageUrl: "https://source-academy.github.io/sicp/sicpjs.png" },
    evaluators: [
        source2Default,
        source2Stepper
    ],
    defaultProgram: "// Type your program in here!\n\n",
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, JavaScript Edition_](https://sourceacademy.org/sicpjs/) uses JavaScript sublanguages that we call [_Source_](https://docs.sourceacademy.org/). You have chosen **Source §2**, matching SICP JS §2.`
};
