import type { IEvaluatorDefinition, ILanguageDefinition } from '../../types';
import { schemeBaseMonarch } from './monarch';

const schemeEvaluator: IEvaluatorDefinition = {
  id: 'schemeDefault',
  name: 'Default',
  path: 'https://source-academy.github.io/scm-slang/scm-slang-evaluator.js',
  capabilities: []
};

export const schemeLanguage: ILanguageDefinition = {
  id: 'scheme',
  name: 'Scheme',
  evaluators: [schemeEvaluator],
  defaultFileExtension: 'scm',
  monarchGrammar: schemeBaseMonarch
};
