import { EvaluatorCapability, type IEvaluatorDefinition, type ILanguageDefinition } from '../../types';
import { pythonBaseMonarch } from './monarch';

const python1Py2js: IEvaluatorDefinition = {
  id: 'python1Py2js',
  name: 'Python §1',
  path: 'https://source-academy.github.io/py-slang/Py2JsEvaluator1.js',
  capabilities: [],
  welcome: 'You have chosen the **Py2JS** evaluator, which compiles Python §1 directly to JavaScript and runs it on the browser\'s own JavaScript engine, rather than through an interpreter loop.\n\nThis evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).'
};

const python1Stepper: IEvaluatorDefinition = {
  id: 'python1Stepper',
  name: 'Python §1',
  path: 'https://source-academy.github.io/py-slang/PyStepperEvaluator1.js',
  capabilities: [EvaluatorCapability.STEPPER]
};

export const python1Language: ILanguageDefinition = {
  id: 'python1',
  name: 'Python §1',
  textbook: { url: 'https://sicp.sourceacademy.org/json_py/', name: 'SICPy', titleImageUrl: 'https://source-academy.github.io/sicp/sicpy.png' },
  evaluators: [
    python1Py2js,
    python1Stepper,
  ],
  monarchGrammar: pythonBaseMonarch,
  // §1 has no pair/list library, which local-file imports need to build
  // the exports-transfer structure they pass between files.
  foldersEnabled: false,
  defaultFileExtension: 'py',
  welcome: `Welcome to the Source Academy playground!
  
The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen [**Python §1**](https://docs.sourceacademy.org/python/python_1/), matching [**SICPy §1**](https://sourceacademy.org/sicpy/1).`
};
