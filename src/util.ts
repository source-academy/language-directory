import { ILanguageDefinition } from "./types";

export function generateLanguageMap(languages: ILanguageDefinition[]): Map<string, ILanguageDefinition> {
    return new Map(languages.map(lang => [lang.id, lang]));
}

/**
 * Retrieve by ID a definition for a language from the directory.
 * @param languageMap The language map of the directory.
 * @param languageId The ID of the language to get the definition of.
 * @returns The retrieved language definition, or undefined if not found.
 */
export function getLanguageDefinition(languageMap: Map<string, ILanguageDefinition>, languageId: string) {
    return languageMap.get(languageId);
}

/**
 * Retrieve by ID a definition for an evaluator from a language definition.
 * @param language The language definition to get the evaluator definition from.
 * @param evaluatorId The ID of the evaluator to get the definition of.
 * @returns The retrieved evaluator definition, or undefined if not found.
 */
export function getEvaluatorDefinition(language: ILanguageDefinition, evaluatorId: string) {
    return language.evaluators.find(evalDef => evalDef.id === evaluatorId);
}

/**
 * Retrieve the language that a chapter of a textbook is written in.
 * @param languages The languages of the directory.
 * @param textbookRoute The `route` of the textbook (e.g. "/sicpjs").
 * @param chapter The chapter of the textbook, as the textbook numbers it (e.g. "3").
 * @returns The language, or undefined if no language says that it is the language of that chapter.
 */
export function getLanguageOfTextbookChapter(
    languages: readonly ILanguageDefinition[],
    textbookRoute: string,
    chapter: string,
) {
    return languages.find(
        language => language.textbook?.route === textbookRoute && language.textbook.chapters?.includes(chapter),
    );
}
