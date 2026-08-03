import { EvaluatorCapability, type IEvaluatorDefinition, type ILanguageDefinition } from "../../types";
import { pythonExtendedMonarch } from "./monarch";

const python4Cse: IEvaluatorDefinition = {
    id: "python4Cse",
    name: "Python §4",
    path: "https://source-academy.github.io/py-slang/PyCseEvaluator4.js",
    capabilities: [EvaluatorCapability.CSE],
    welcome: `You have chosen the **CSE** evaluator, which runs Python §4 using the CSE machine.\n\nThis evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`,
    defaultProgram: `print("hello world")\n`
};

const python4Py2js: IEvaluatorDefinition = {
    id: "python4Py2js",
    name: "Python §4",
    path: "https://source-academy.github.io/py-slang/Py2JsEvaluator4.js",
    capabilities: [],
    welcome: `You have chosen the **Py2JS** evaluator, which compiles Python §4 directly to JavaScript and runs it on the browser's own JavaScript engine, rather than through an interpreter loop.\n\nThis evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).`,
    defaultProgram: `print("hello world")\n`
};

export const python4Language: ILanguageDefinition = {
    id: "python4",
    name: "Python §4",
    textbook: { url: "https://sicp.sourceacademy.org/json_py/", name: "SICPy", titleImageUrl: "https://source-academy.github.io/sicp/sicpy.png" },
    evaluators: [
        python4Py2js,
        python4Cse,
    ],
    monarchGrammar: pythonExtendedMonarch,
    defaultFileExtension: "py",
    welcome: `Welcome to the Source Academy playground!

The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen [**Python §4**](https://docs.sourceacademy.org/python/python_4/), matching [**SICPy §4**](https://sourceacademy.org/sicpy/4).`
};
