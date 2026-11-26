import { javaLanguage } from "./languages/java";
import { ocamlLanguage } from "./languages/ocaml";
import { pythonLanguage } from "./languages/python";
import { sourceLanguage } from "./languages/source";
import { schemeLanguage } from "./languages/scheme";
import { ILanguageDefinition } from "./types";
import { generateLanguageMap } from "./util";

export const languages: ILanguageDefinition[] = [
    ...pythonLanguage,
    ...sourceLanguage,
    schemeLanguage,
    javaLanguage,
    ocamlLanguage,
];

export const languageMap: Map<string, ILanguageDefinition> = /*#__PURE__*/ generateLanguageMap(languages);

if (languages.length !== languageMap.size) {
    console.warn("Non-unique language ID in language directory");
}

// A chapter of a textbook is the language of one language only.
const chapterClaims = languages.flatMap(language =>
    (language.textbook?.chapters ?? []).map(chapter => `${language.textbook?.route} ${chapter}`),
);
if (chapterClaims.length !== new Set(chapterClaims).size) {
    console.warn("A chapter of a textbook is claimed by more than one language in the language directory");
}

export default languages;
