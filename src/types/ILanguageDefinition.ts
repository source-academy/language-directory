import { IEvaluatorDefinition } from "./IEvaluatorDefinition";

interface ILanguageDefinition {
    /** The language's identifier. */
    readonly id: string;

    /** The name of the language. */
    readonly name: string;

    /** An array of evaluators that can run the language. */
    readonly evaluators: IEvaluatorDefinition[];

    /** Editor configuration. WIP. */
    readonly editorConfig?: any;

    /** Base URL for the language's textbook JSON files (e.g. "https://sicp.sourceacademy.org/json_py/"). */
    readonly textbookUrl?: string;
}

export type { ILanguageDefinition };
