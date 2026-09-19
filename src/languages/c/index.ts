import { EvaluatorCapability, IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const cDefaultEvaluator: IEvaluatorDefinition = {
    id: "cDefault",
    name: "Default",
    path: "https://source-academy.github.io/c-slang/CEvaluator.js",
    capabilities: [],
    welcome: `You have chosen the **Default** evaluator, which runs your program through a step-by-step C interpreter built for teaching.`,
};

const cCseEvaluator: IEvaluatorDefinition = {
    id: "cCse",
    name: "CSE",
    path: "https://source-academy.github.io/c-slang/CCseEvaluator.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **CSE** evaluator. CSE Machine step-by-step visualization for C isn't built yet, so this currently behaves identically to the Default evaluator.`,
};

export const cLanguage: ILanguageDefinition = {
    id: "c",
    name: "C",
    evaluators: [cDefaultEvaluator, cCseEvaluator],
    defaultFileExtension: "c",
    foldersEnabled: false,
    // ILanguageDefinition#editorConfig is still WIP and no other language populates it yet --
    // real (semantic, evaluator-driven) highlighting is the autocomplete/highlight-rules protocol
    // AutocompletePlugin exposes, which c-interpreter's evaluators don't implement.
    // This is the cheaper, static fallback: ace-builds' bundled generic C/C++ mode 
    // (already registered app-side via AceHelper.ts's import of ace-builds/src-noconflict/mode-c_cpp), 
    // picked up by Editor.tsx's own directoryAceMode fallback whenever no evaluator-pushed mode is live. 
    // Lexical, not semantic -- it doesn't know c-interpreter only accepts a subset of C.
    editorConfig: { aceMode: "c_cpp" },
    welcome: `Welcome to the Source Academy playground!

You have chosen **C**. This is an early, actively-developed subset of the language, running through a step-by-step interpreter built for teaching — not a full ISO C implementation yet.`,
};
