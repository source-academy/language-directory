import type { IMonarchLanguage } from '../../types/monarchTypes';

/**
 * Python keywords that are only allowed for Python §3 and Python §4.
 */
export const extendedKeywords = [
  'break',
  'continue',
  'for',
  'global',
  'in',
  'is',
  'nonlocal',
  'pass',
  'while',
];

const baseMonarch = {
  defaultToken: '',
  tokenPostfix: '.python',

  illegalKeywords: [
    'as',
    'assert',
    'async',
    'await',
    'case',
    'class',
    'del',
    'except',
    'finally',
    'match',
    'raise',
    'try',
    'with',
    'yield',
  ],

  keywords: [
    'and',
    'def',
    'elif',
    'else',
    'from',
    'if',
    'import',
    'lambda',
    'not',
    'or',
    'return',
  ],
  
  operators: [
		'+', '-', '//', '/', '*', '**',
		'>', '<', '>=', '<=',
		'==', '!=',
	],

	illegalOperators: [
		'+=', '-=', '/=', '//=', '*=', '**=',
    '|', '|=',
    '&', '&=',
    '^', '^=',
	],

  brackets: [
    { open: '{', close: '}', token: 'delimiter.curly' },
    { open: '[', close: ']', token: 'delimiter.bracket' },
    { open: '(', close: ')', token: 'delimiter.parenthesis' }
  ],

  symbols: /[<>=\/\-+*%^|&!]{1,3}/,

  tokenizer: {
    root: [
      { include: '@whitespace' },
      { include: '@numbers' },
      { include: '@strings' },

      [/[,:;]/, 'delimiter'],
      [/[{}[]()]/, '@brackets'],

      [/@[a-zA-Z]\w*/, 'tag'],
      [/[a-zA-Z]\w*/, {
        cases: {
          '@keywords': 'keyword',
          '@illegalKeywords': 'keyword.illegal',
          '@default': 'identifier'
        }
      }],
      [/@symbols/, {
        cases: {
          '@illegalOperators': 'keyword.illegal',
          '@operators': 'keyword'
        }
      }]
    ],

    // Deal with white space, including single and multi-line comments
    whitespace: [
      [/\s+/, 'white'],
      [/(^#.*$)/, 'comment'],
      [/('''.*''')|(""".*""")/, 'string'],
      [/'''.*$/, 'string', '@endDocString'],
      [/""".*$/, 'string', '@endDblDocString']
    ],
    endDocString: [
      [/\\'/, 'string'],
      [/.*'''/, 'string', '@popall'],
      [/.*$/, 'string']
    ],
    endDblDocString: [
      [/\\"/, 'string'],
      [/.*"""/, 'string', '@popall'],
      [/.*$/, 'string']
    ],

    // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
    numbers: [
      [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
      [/-?(\d*\.)?\d+([eE][+-]?\d+)?[jJ]?[lL]?/, 'number']
    ],

    // Recognize strings, including those broken across lines with \ (but not without)
    strings: [
      [/'$/, 'string.escape', '@popall'],
      [/'/, 'string.escape', '@stringBody'],
      [/"$/, 'string.escape', '@popall'],
      [/"/, 'string.escape', '@dblStringBody']
    ],
    stringBody: [
      [/[^\\']+$/, 'string', '@popall'],
      [/[^\\']+/, 'string'],
      [/\\./, 'string'],
      [/'/, 'string.escape', '@popall'],
      [/\\$/, 'string']
    ],
    dblStringBody: [
      [/[^\\"]+$/, 'string', '@popall'],
      [/[^\\"]+/, 'string'],
      [/\\./, 'string'],
      [/"/, 'string.escape', '@popall'],
      [/\\$/, 'string']
    ]
  }
} satisfies IMonarchLanguage;

/**
 * Simplified Monarch grammar for Python §1 and Python §2.
 */
export const pythonBaseMonarch: IMonarchLanguage = {
  ...baseMonarch,
  illegalKeywords: [
    ...baseMonarch.illegalKeywords,
    ...extendedKeywords
  ]
};

/**
 * Extended Monarch grammar for Python §3 and Python §4.
 */
export const pythonExtendedMonarch: IMonarchLanguage = {
  ...baseMonarch,
  keywords: [
    ...pythonBaseMonarch.keywords,
    ...extendedKeywords
  ]
};
