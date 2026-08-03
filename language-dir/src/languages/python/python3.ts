import { EvaluatorCapability, type IEvaluatorDefinition, type ILanguageDefinition } from '../../types';
import { pythonExtendedMonarch } from './monarch';

const python3Cse: IEvaluatorDefinition = {
  id: 'python3Cse',
  name: 'Python §3',
  path: 'https://source-academy.github.io/py-slang/PyCseEvaluator3.js',
  capabilities: [EvaluatorCapability.CSE],
  welcome: 'You have chosen the **CSE** evaluator, which runs Python §3 using the CSE machine.\n\nThis evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).',
  defaultProgram: 'print("hello world")\n'
};

const python3Py2js: IEvaluatorDefinition = {
  id: 'python3Py2js',
  name: 'Python §3',
  path: 'https://source-academy.github.io/py-slang/Py2JsEvaluator3.js',
  capabilities: [],
  welcome: 'You have chosen the **Py2JS** evaluator, which compiles Python §3 directly to JavaScript and runs it on the browser\'s own JavaScript engine, rather than through an interpreter loop.\n\nThis evaluator supports all [Source Academy modules](https://source-academy.github.io/modules/documentation/).',
  defaultProgram: 'print("hello world")\n'
};

export const python3Language: ILanguageDefinition = {
  id: 'python3',
  name: 'Python §3',
  textbook: { url: 'https://sicp.sourceacademy.org/json_py/', name: 'SICPy', titleImageUrl: 'https://source-academy.github.io/sicp/sicpy.png' },
  evaluators: [
    python3Py2js,
    python3Cse,
  ],
  monarchGrammar: pythonExtendedMonarch,
  defaultFileExtension: 'py',
  welcome: `Welcome to the Source Academy playground!
  
The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses Python sublanguages that match the textbook chapters. You have chosen [**Python §3**](https://docs.sourceacademy.org/python/python_3/), matching [**SICPy §3**](https://sourceacademy.org/sicpy/3).`
};
