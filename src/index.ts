import { pythonLanguage } from "./languages/python";
import { sourceLanguage } from "./languages/source";
import { ILanguage } from "./types";

const languages: ILanguage[] = [
    sourceLanguage,
    pythonLanguage
];

export { languages };
