# Source Academy Languages Directory

This repository acts as a directory for languages officially supported by Source Academy.

## Language definitions

Language definitions should follow the `ILanguageDefinition` interface.

Languages consist of an ID, a name, an array of evaluators capable of running the given language,
and an optional editor configuration.

To add a new language to the languages directory, define your language according to the interface,
and add the definition to the `languages` array in `src/index.ts`.

## Evaluator definitions

Evaluator definitions should follow the `IEvaluatorDefinition` interface.

Evaluators consist of an ID, a name, a URL to the evaluator's entrypoint file, and an array of its capabilities.
