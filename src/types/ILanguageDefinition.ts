import { IEvaluatorDefinition } from "./IEvaluatorDefinition";

interface ILanguageDefinition {
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
    readonly textbook?: {
        /** Base URL for the language's textbook JSON files. Must include a trailing slash (e.g. "https://sicp.sourceacademy.org/json_py/"). */
        readonly url: string;
        /** Display name for the textbook (e.g. "SICPy", "SICP JS"). */
        readonly name: string;
        /** URL of the textbook's title/cover image. */
        readonly titleImageUrl?: string;
    };

    /** Welcome/introduction text shown in the playground when this language is selected. Supports markdown. */
    readonly welcome?: string;

    /** Whether the Playground's multi-file "folder" mode is available for this language. Defaults to `true` when omitted; set `false` for a language/chapter whose evaluator(s) don't support local-file imports (e.g. Python §1, which has no pair/list library to build the exports-transfer structure folder imports rely on). */
    readonly foldersEnabled?: boolean;
}

export type { ILanguageDefinition };
