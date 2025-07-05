import { pythonLanguage } from "./languages/python";
import { sourceLanguage } from "./languages/source";
import { ILanguageDefinition } from "./types";

export const languages: ILanguageDefinition[] = [
    ...sourceLanguage,
    pythonLanguage
];

export const languageMap: Map<string, ILanguageDefinition> = new Map(languages.map(lang => [lang.id, lang]));

/**
 * Retrieve by ID a definition for an evaluator from a language definition.
 * @param language The language definition to get the evaluator definition from.
 * @param evaluatorId The ID of the evaluator to get the definition of.
 * @returns The retrieved evaluator definition, or undefined if not found.
 */
export function getEvaluatorDefinition(language: ILanguageDefinition, evaluatorId: string) {
    return language.evaluators.find(evalDef => evalDef.id === evaluatorId);
}

export * from "./types";

if (languages.length !== languageMap.size) {
    console.warn("Non-unique language ID in language directory");
}
