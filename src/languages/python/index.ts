import { ILanguageDefinition } from "../../types";
import { pythonSourceLanguage } from "./source";
import { pythonPyodideLanguage } from "./pyodide";

export const pythonLanguage: ILanguageDefinition[] = [
    pythonSourceLanguage,
    pythonPyodideLanguage
];
