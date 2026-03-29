import { ILanguageDefinition } from "../../types";
import { pythonFullLanguage } from "./pythonFull";
import { python1Language } from "./python1";
import { python2Language } from "./python2";
import { python3Language } from "./python3";
import { python4Language } from "./python4";

export const pythonLanguage: ILanguageDefinition[] = [
    pythonFullLanguage,
    python1Language,
    python2Language,
    python3Language,
    python4Language,
];
