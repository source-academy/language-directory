import { describe, expect, test } from 'vitest';
import languages from '../languages';
import type { ILanguageDefinition } from '../types';
import type { IMonarchLanguage } from '../types/monarchTypes';

function monarchGrammarTests(lang: ILanguageDefinition) {
  const { monarchGrammar } = lang;

  describe.skipIf(typeof monarchGrammar !== 'object')('Monarch Grammar', () => {
    const grammar = monarchGrammar as IMonarchLanguage;
    const illegalKeywords: string[] | undefined = grammar.illegalKeywords;

    test.skipIf(illegalKeywords === undefined)('If it has illegal keywords, they should not also be in the keywords list', () => {
      for (const each of illegalKeywords!) {
        expect(grammar.keywords).not.toContain(each);
      }
    });
  });
}

describe.each(Object.values(languages))('$name', lang => {
  monarchGrammarTests(lang);
});
