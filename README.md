# Source Academy Languages Directory

This repository acts as a directory for languages officially supported by Source Academy.

## Using this directory

### As a static asset

You may import the `languages` array directly after installing this repository
(as `import { languages } from 'language-directory'`). This will cause the array
to be bundled together at build time.

Caution: when including this repository as a dependency in your `package.json`,
**be sure to specify a specific commit hash or tag**.
Failure to do this may cause problems with CI/CD due to lockfile issues when this
directory is updated.

### Retrieved dynamically

The `languages` array is available dynamically at
[`https://source-academy.github.io/language-directory/directory.json`](https://source-academy.github.io/language-directory/directory.json).

In this case, you probably do not want to bundle the array at build time. You may
bundle only the utility functions by importing from `'language-directory/dist/util'` instead.

You can reconstruct the `languageMap` using the `generateLanguageMap` utility function.

## Language definitions

Language definitions should follow the `ILanguageDefinition` interface.

Languages consist of an ID, a name, an array of evaluators capable of running the given language,
and an optional editor configuration.

To add a new language to the languages directory, define your language according to the interface,
and add the definition to the `languages` array in `src/languages.ts`.

## Evaluator definitions

Evaluator definitions should follow the `IEvaluatorDefinition` interface.

Evaluators consist of an ID, a name, a URL to the evaluator's entrypoint file, and an array of its capabilities.

## Local testing

You may test any changes (e.g. adding your new language) locally by running `yarn start`.
This starts a development server and compiles the directory in watch mode (recompiling on any changes).

The directory will be available at [`http://localhost:8125/directory.json`](http://localhost:8125/directory.json).
On the Source Academy frontend, set the feature flag `langdir.url` to point to this location.
