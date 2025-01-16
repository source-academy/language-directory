import { IAvailableEvaluator } from "./IAvailableEvaluator";

interface ILanguage {
    /** The name of the language. */
    readonly name: string;

    /** An array of evaluators that can run the language. */
    readonly evaluators?: IAvailableEvaluator[];

    /** Variants of the language. */
    readonly variants?: ILanguage[];

    /** Editor configuration. WIP. */
    readonly editorConfig?: any;
}

export type { ILanguage };
