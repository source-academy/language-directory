import { pythonLanguage } from "./languages/python";
import { sourceLanguage } from "./languages/source";
import { ILanguageDefinition } from "./types";

const languages: ILanguageDefinition[] = [
    sourceLanguage,
    pythonLanguage
];

export { languages };
