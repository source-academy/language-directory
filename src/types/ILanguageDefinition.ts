import type { IEvaluatorDefinition } from "./IEvaluatorDefinition";
import type { IMonarchLanguage } from "./monarchTypes";

export interface TextbookDefinition {
    /** Base URL for the language's textbook JSON files. Must include a trailing slash (e.g. "https://sicp.sourceacademy.org/json_py/"). */
    readonly url: string;

    /** Display name for the textbook (e.g. "SICPy", "SICP JS"). */
    readonly name: string;

    /** URL of the textbook's title/cover image. */
    readonly titleImageUrl?: string;
}

export interface ILanguageDefinition {
    /** The language's identifier. */
    readonly id: string;

    /** The name of the language. */
    readonly name: string;

    /** An array of evaluators that can run the language. */
    readonly evaluators: IEvaluatorDefinition[];

    /** Editor configuration. WIP. */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly editorConfig?: any;

    /** Textbook configuration for this language. */
    readonly textbook?: TextbookDefinition;

    /** Welcome/introduction text shown in the playground when this language is selected. Supports markdown. */
    readonly welcome?: string;

    /**
     * [Monarch](https://microsoft.github.io/monaco-editor/monarch.html) is the language definition system that the
     * Monaco Editor uses.\
     * If a string is given, then it is assumed that is the name of the language to use when loaded by the Monaco Editor.
     */
    readonly monarchGrammar: string | IMonarchLanguage;
}
