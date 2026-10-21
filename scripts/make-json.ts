import { languages } from '../dist/index.js';

function stringifier(_k: string, value: any) {
  if (!(value instanceof RegExp)) return value;
  return value.source;
}

console.log(JSON.stringify(languages, stringifier));
