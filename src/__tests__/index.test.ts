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

    const illegalOperators: string[] | undefined = grammar.illegalOperators;
    test.skipIf(illegalOperators === undefined)('If it has illegal operators, they should not also be in the operators list', () => {
      for (const each of illegalOperators!) {
        expect(grammar.operators).not.toContain(each);
      }
    });
  });
}

test('Every language should have a unique id', () => {
  const idMap = Object.values(languages).reduce<Record<string, ILanguageDefinition[]>>((res, lang) => {
    if (lang.id in res) {
      return {
        ...res,
        [lang.id]: [...res[lang.id], lang]
      };
    }

    return {
      ...res,
      [lang.id]: [lang]
    };
  }, {});

  Object.entries(idMap).forEach(([id, langs]) => {
    if (langs.length === 1) return;

    const langStr = langs.map(({ name }) => name).join(', ');
    expect.fail(`There are ${langs.length} languages with id ${id}: ${langStr}`);
  });
});

describe.each(Object.values(languages))('$name', lang => {
  monarchGrammarTests(lang);
});
