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
