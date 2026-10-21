import { beforeAll, describe, expect, test } from 'vitest';
import * as monaco from 'monaco-editor';
import { pythonLanguage } from '..';
import { tokenizeCode } from '../../__tests__/helpers';

beforeAll(() => {
  pythonLanguage.map(({ id, monarchGrammar }) => {
    if (typeof monarchGrammar !== 'string') {
      monaco.languages.register({ id });
      monaco.languages.setMonarchTokensProvider(id, monarchGrammar);
    }
  });
});

describe.for(pythonLanguage)('$name', ({ id: languageId, monarchGrammar: grammar }) => {
  const keywords: string[] = (typeof grammar === 'string' ? [] : (grammar.keywords ?? []));
  const illegalKeywords: string[] = (typeof grammar === 'string' ? [] : (grammar.illegalKeywords ?? []));

  test('tokenizes the language-specific keywords as keyword', () => {
    const code = keywords.map(keyword => `${keyword} = 1`).join('\n');
    const tokens = tokenizeCode(code, languageId).flat();

    for (const keyword of keywords) {
      const token = tokens.find(each => each.contents === keyword);
      expect(token, `Expected ${keyword} to be tokenized as a keyword in ${languageId}`).toBeDefined();
      expect(token!.type).toBe('keyword.python');
    }
  });

  test('tokenizes illegal keywords as keyword.illegal for this language', () => {
    if (illegalKeywords.length === 0) return;

    const code = illegalKeywords.map(keyword => `${keyword} = 1`).join('\n');
    const tokens = tokenizeCode(code, languageId).flat();

    for (const keyword of illegalKeywords) {
      const token = tokens.find(each => each.contents === keyword);
      expect(token, `Expected ${keyword} to be tokenized as an illegal keyword in ${languageId}`).toBeDefined();
      expect(token!.type).toBe('keyword.illegal.python');
    }
  });
});
