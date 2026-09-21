import { pythonLanguage } from "./languages/python";
import { sourceLanguage } from "./languages/source";
import { schemeLanguage } from "./languages/scheme";
import { ILanguageDefinition } from "./types";
import { generateLanguageMap } from "./util";

export const languages: ILanguageDefinition[] = [
    ...pythonLanguage,
    ...sourceLanguage,
    schemeLanguage,
];

export const languageMap: Map<string, ILanguageDefinition> = /*#__PURE__*/ generateLanguageMap(languages);

if (languages.length !== languageMap.size) {
    console.warn("Non-unique language ID in language directory");
}

export default languages;
