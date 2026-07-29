import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const pythonFullPyodide: IEvaluatorDefinition = {
    id: "pythonFullPyodide",
    name: "Python",
    path: "https://source-academy.github.io/py-slang/PyodideEvaluatorFull.js",
    capabilities: [],
    welcome: `You have chosen the Pyodide evaluator, which runs **Python** using the CPython runtime via WebAssembly. The SICP library is preloaded. **Experimental**: Source Academy's own modules (e.g. Runes) are not supported — only packages installable from PyPI. All functions of [**Python §3**](https://docs.sourceacademy.org/python/python_3/) are predeclared, except the interactive functions \`input\` and \`set_timeout\`.`
};

export const pythonFullLanguage: ILanguageDefinition = {
    id: "pythonFull",
    name: "Python",
    evaluators: [
        pythonFullPyodide
    ],
};
