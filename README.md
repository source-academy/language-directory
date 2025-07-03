# Source Academy Languages Directory

This repository acts as a directory for languages officially supported by Source Academy.

## Language definitions

Language definitions should follow the `ILanguageDefinition` interface.

Languages consist of a name, an optional array of evaluators capable of running the given language,
an optional array of language variants (or "sublanguages"), and an optional editor configuration.

Languages without evaluators may not be selected in the Source Academy frontend;
however, they may be used to group several related variants together.

To add a new language to the languages directory, define your language according to the above,
and add the definition to the `languages` array in `src/index.ts`.

## Evaluator definitions

Evaluator definitions should follow the `IEvaluatorDefinition` interface.

Evaluators consist of a name, a URL to the evaluator's entrypoint file, and an array of its capabilities.
