import { jsonFormatter } from '@typed-prompt/json-formatter';
import { xmlFormatter } from '@typed-prompt/xml-formatter';
import { markdownFormatter } from '@typed-prompt/markdown-formatter';

console.log(jsonFormatter('test'));
console.log(xmlFormatter('test'));
console.log(markdownFormatter('test'));
