import { pythonLanguage } from './python';
import { schemeLanguage } from './scheme';
import type { ILanguageDefinition } from '../types';
import { generateLanguageMap } from '../util';

export const languages: ILanguageDefinition[] = [
  ...pythonLanguage,
  schemeLanguage,
];

export const languageMap: Map<string, ILanguageDefinition> = /*#__PURE__*/ generateLanguageMap(languages);
