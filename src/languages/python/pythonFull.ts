import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const pythonFullDefault: IEvaluatorDefinition = {
    id: "pythonFullDefault",
    name: "Default",
    path: "https://source-academy.github.io/py-slang/PyodideEvaluatorFull.js",
    capabilities: [],
    welcome: `You have chosen full, unrestricted Python, running on a real CPython runtime via WebAssembly. **Experimental**: Source Academy's own modules (e.g. Runes) are not supported — only packages installable from PyPI.`
};

export const pythonFullLanguage: ILanguageDefinition = {
    id: "pythonFull",
    name: "Python Full",
    evaluators: [
        pythonFullDefault
    ],
};
