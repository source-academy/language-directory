import { IEvaluatorDefinition } from "./IEvaluatorDefinition";

interface ILanguageDefinition {
    /** The language's identifier. */
    readonly id: string;

    /** The name of the language. */
    readonly name: string;

    /** An array of evaluators that can run the language. */
    readonly evaluators?: IEvaluatorDefinition[];

    /** Variants of the language. */
    readonly variants?: ILanguageDefinition[];

    /** Editor configuration. WIP. */
    readonly editorConfig?: any;
}

export type { ILanguageDefinition };
