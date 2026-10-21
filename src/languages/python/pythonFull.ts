import type { IEvaluatorDefinition, ILanguageDefinition } from '../../types';

const pythonFullPyodide: IEvaluatorDefinition = {
  id: 'pythonFullPyodide',
  name: 'Python',
  path: 'https://source-academy.github.io/py-slang/PyodideEvaluatorFull.js',
  capabilities: [],
  welcome: 'You have chosen the Pyodide evaluator, which runs **Python** using the CPython runtime via WebAssembly. The SICP library is preloaded. **Experimental**: Source Academy\'s own modules (e.g. Runes) are not supported — only packages installable from PyPI. All functions of [**Python §3**](https://docs.sourceacademy.org/python/python_3/) are predeclared, except the interactive functions `input` and `set_timeout`.'
};

export const pythonFullLanguage: ILanguageDefinition = {
  id: 'pythonFull',
  name: 'Python',
  evaluators: [
    pythonFullPyodide
  ],
  defaultFileExtension: 'py',
  monarchGrammar: 'python',
  defaultProgram: '# Type your program in here!\n\n',
  welcome: `Welcome to the Source Academy playground!

This language is [**Python**](https://www.python.org/), run by [**CPython**](https://docs.python.org/3/reference/), its reference implementation. The book [_Structure and Interpretation of Computer Programs, Python Edition_](https://sourceacademy.org/sicpy/) uses sublanguages of Python (Python §1 to §4), which you can choose instead. Read the [Python Style Guide](https://docs.sourceacademy.org/python/python_styleguide.pdf) for how to lay out your programs.`
};
