import { IEvaluatorDefinition } from "./IEvaluatorDefinition";

interface IEditorConfig {
    /**
     * The id of an [Ace](https://ace.c9.io) mode (e.g. `"python"`, `"javascript"`) that the editor
     * highlights the language with until the selected evaluator has loaded and sent its own mode
     * (and for an evaluator that sends none, for good). The frontend loads Ace's modes on demand by
     * id, so any of Ace's stock modes can be named. Without it, the editor shows plain text until
     * the evaluator's mode arrives.
     */
    readonly aceMode?: string;
    readonly [key: string]: unknown;
}

interface ILanguageDefinition {
    /** The language's identifier. */
    readonly id: string;

    /** The name of the language. */
    readonly name: string;

    /** An array of evaluators that can run the language. */
    readonly evaluators: IEvaluatorDefinition[];

    /** Editor configuration. WIP. */
    readonly editorConfig?: IEditorConfig;

    /** Textbook configuration for this language. */
    readonly textbook?: {
        /** Base URL for the language's textbook JSON files. Must include a trailing slash (e.g. "https://sicp.sourceacademy.org/json_py/"). */
        readonly url: string;
        /** Display name for the textbook (e.g. "SICPy", "SICP JS"). */
        readonly name: string;
        /** Path of the textbook in the frontend, without a trailing slash (e.g. "/sicpy", "/sicpjs"). */
        readonly route: string;
        /** URL of the textbook's title/cover image. */
        readonly titleImageUrl?: string;
        /**
         * The chapters of the textbook (as the textbook numbers them, e.g. `"3"` for chapter 3) that are
         * written in this language: a snippet in one of them runs in this language. At most one language
         * of a textbook (the same `route`) names a given chapter, and a language that is not the
         * language of any chapter (for example an extension of one) leaves this out. Look up the
         * language of a chapter with `getLanguageOfTextbookChapter`.
         */
        readonly chapters?: readonly string[];
    };

    /** Documentation shown in the frontend's Documentation tab for this language. */
    readonly documentation?: {
        /** URL of the language's documentation. */
        readonly languageUrl: string;
        /** URL of the modules documentation for this language. The frontend shows no modules page when omitted. */
        readonly modulesUrl?: string;
    };

    /** Welcome/introduction text shown in the playground when this language is selected. Supports markdown. */
    readonly welcome?: string;

    /** Whether the Playground's multi-file "folder" mode is available for this language. Defaults to `true` when omitted; set `false` for a language/chapter whose evaluator(s) don't support local-file imports (e.g. Python §1, which has no pair/list library to build the exports-transfer structure folder imports rely on). */
    readonly foldersEnabled?: boolean;

    /** File extension (without the leading dot) this language's files use — what the Playground names its default single-file entrypoint tab/file (e.g. "program.py") when none exists yet, and what a newly-created file in folder mode should default to. Defaults to `"js"` when omitted, matching every language predating this field. */
    readonly defaultFileExtension?: string;

    /** Default program to be used in the editor for this language */
    readonly defaultProgram?: string;
}

export type { IEditorConfig, ILanguageDefinition };
