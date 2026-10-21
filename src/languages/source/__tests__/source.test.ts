import { beforeAll, describe, expect, test } from 'vitest';
import * as monaco from 'monaco-editor';
import { sourceLanguage } from '..';
import { tokenizeCode } from '../../__tests__/helpers';

beforeAll(() => {
  sourceLanguage.map(({ id, monarchGrammar }) => {
    if (typeof monarchGrammar !== 'string') {
      monaco.languages.register({ id });
      monaco.languages.setMonarchTokensProvider(id, monarchGrammar);
    }
  });
});

describe.for(sourceLanguage)('$name', ({ id: languageId, monarchGrammar: grammar }) => {
  const keywords: string[] = (typeof grammar === 'string' ? [] : (grammar.keywords ?? []));
  const illegalKeywords: string[] = (typeof grammar === 'string' ? [] : (grammar.illegalKeywords ?? []));

  // TODO: Fix as keyword handling?
  describe.todo('Testing the as keyword', () => {
    test('highlights `as` in import alias clauses without highlighting ordinary identifiers', () => {
      const code = 'import { foo as bar, foo2 as bar2 } from "x";\nconst as = 1;';
      const lines = tokenizeCode(code, languageId);

      const asTokens = lines[0].filter(token => token.contents === 'as');
      const identifierToken = lines[1].find(token => token.contents === 'as');

      asTokens.forEach(token => {
        expect(token.type).toBe('keyword.js');
      });

      expect(identifierToken?.type).toBe('identifier.js');
    });

    test('works across multiple lines', () => {
      const code = 'import {\nfoo as bar\n,\nfoo2 as bar2\n} from "x";';
      const codeLines = code.split('\n');
      const lines = monaco.editor.tokenize(code, languageId);

      const importAliasToken = lines[1].find(token => codeLines[1].startsWith('as', token.offset));
      expect(importAliasToken?.type).toBe('keyword.js');

      const importAliasToken2 = lines[2].find(token => codeLines[2].startsWith('as', token.offset));
      expect(importAliasToken2?.type).toBe('keyword.js');
    });
  });

  test('tokenizes the language-specific keywords as keyword', () => {
    const code = keywords.map(keyword => `${keyword} = 1`).join('\n');
    const tokens = tokenizeCode(code, languageId).flat();

    for (const keyword of keywords) {
      const token = tokens.find(each => each.contents === keyword);
      expect(token, `Expected ${keyword} to be tokenized as a keyword in ${languageId}`).toBeDefined();
      expect(token!.type).toBe('keyword.js');
    }

    expect(tokens).not.toContain(expect.objectContaining({ type: 'keyword.illegal.js' }));
  });

  test('tokenizes illegal keywords as keyword.illegal for this language', () => {
    const code = illegalKeywords.map(keyword => `${keyword} = 1`).join('\n');
    const tokens = tokenizeCode(code, languageId).flat();

    if (illegalKeywords.length === 0) {
      expect(tokens).not.toContain(expect.objectContaining({ type: 'keyword.illegal.js' }));
      return;
    }

    for (const keyword of illegalKeywords) {
      const token = tokens.find(each => each.contents === keyword);
      expect(token, `Expected ${keyword} to be tokenized as an illegal keyword in ${languageId}`).toBeDefined();
      expect(token!.type).toBe('keyword.illegal.js');
    }
  });

  test('does not start a multiline comment when a regexp contains a literal /* sequence', () => {
    const snippets = [
      'const re = /a\\/*b/;',
      'const re = /[\\/*]/;',
      'const re = /a\\/\\*b/;',
      'const re = /\\/*/;'
    ];

    for (const code of snippets) {
      const tokens = tokenizeCode(code, languageId).flat();
      const commentTokens = tokens.filter(token => token.type.startsWith('comment'));
      expect(commentTokens, `Regex snippet should not tokenize as comments: ${code}`).toEqual([]);
      expect(tokens.some(token => token.contents.includes('/'))).toBe(true);
    }
  });
});
