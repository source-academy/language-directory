import type { languages } from 'monaco-editor';
import type { IEvaluatorDefinition } from './IEvaluatorDefinition';

export interface TextbookConfig {
  /** Base URL for the language's textbook JSON files. Must include a trailing slash (e.g. "https://sicp.sourceacademy.org/json_py/"). */
  readonly url: string;
  /** Display name for the textbook (e.g. "SICPy", "SICP JS"). */
  readonly name: string;
  /** URL of the textbook's title/cover image. */
  readonly titleImageUrl?: string;
};

export interface ILanguageDefinition {
  /** The language's identifier. */
  readonly id: string;

  /** The name of the language. */
  readonly name: string;

  /** An array of evaluators that can run the language. */
  readonly evaluators: IEvaluatorDefinition[];

  /** Editor configuration. WIP. */

  readonly editorConfig?: any;

  /** Textbook configuration for this language. */
  readonly textbook?: TextbookConfig;

  /** Welcome/introduction text shown in the playground when this language is selected. Supports markdown. */
  readonly welcome?: string;

  /** Whether the Playground's multi-file "folder" mode is available for this language. Defaults to `true` when omitted; set `false` for a language/chapter whose evaluator(s) don't support local-file imports (e.g. Python §1, which has no pair/list library to build the exports-transfer structure folder imports rely on). */
  readonly foldersEnabled?: boolean;

  /** File extension (without the leading dot) this language's files use — what the Playground names its default single-file entrypoint tab/file (e.g. "program.py") when none exists yet, and what a newly-created file in folder mode should default to. Defaults to `"js"` when omitted, matching every language predating this field. */
  readonly defaultFileExtension?: string;

  /** Default program to be used in the editor for this language */
  readonly defaultProgram?: string;

  /**
   * Monarch grammar used for tokenizing this language in the `monaco-editor`.\
   * If a string is given the string is used by the editor to identify the language.
   */
  readonly monarchGrammar: string | languages.IMonarchLanguage;
}
