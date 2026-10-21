import { expect, test } from 'vitest';
import { tokenizeCode } from './helpers';

test('tokenizeCode', () => {
  const result = tokenizeCode('const x = 0;\nconst y = window.document;', 'javascript');
  expect(result).toMatchInlineSnapshot(`
    [
      [
        {
          "contents": "const x = 0;",
          "type": "",
        },
      ],
      [
        {
          "contents": "const y = window.document;",
          "type": "",
        },
      ],
    ]
  `);
});
