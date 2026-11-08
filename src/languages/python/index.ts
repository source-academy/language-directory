import { ILanguageDefinition } from "../../types";
import { pythonFullLanguage } from "./pythonFull";
import { python1Language } from "./python1";
import { python2Language } from "./python2";
import { python3Language } from "./python3";
import { python4Language } from "./python4";
import { python4TypedLanguage } from "./python4Typed";

export const pythonLanguage: ILanguageDefinition[] = [
    python1Language,
    python2Language,
    python3Language,
    python4Language,
    python4TypedLanguage,
    pythonFullLanguage,
];
