import { editor } from 'monaco-editor';

export interface Token {
  type: string;
  contents: string;
}

/**
 * Use `monaco-editor` to convert the provided code into tokens that can be
 * checked for token type and content.
 *
 * The returned array is a 2D array where the outer array represents the lines in the
 * code and the inner array represents the tokens for that line.
 */
export function tokenizeCode(code: string, languageId: string) {
  const codeLines = code.split('\n');
  const lines = editor.tokenize(code, languageId);

  return lines.map((line, lineIndex) => {
    if (line.length === 0) return [];

    const tokens: Token[] = [];
    const lineText = codeLines[lineIndex];

    for (let i = 0; i < line.length - 1; i++) {
      const nextToken = line[i + 1];

      tokens.push({
        type: line[i].type,
        // Each token spans from its offset to the offset of the next token (exclusive)
        contents: lineText.substring(line[i].offset, nextToken.offset)
      });
    }

    const lastToken = line[line.length - 1];
    tokens.push({
      type: lastToken.type,
      contents: lineText.substring(lastToken.offset)
    });

    return tokens;
  });
}
