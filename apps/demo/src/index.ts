import { jsonFormatter } from '@typed-prompt/json-formatter';
import { xmlFormatter } from '@typed-prompt/xml-formatter';
import { markdownFormatter } from '@typed-prompt/markdown-formatter';
import { prompt } from '@typed-prompt/core';

const formatters = [jsonFormatter, xmlFormatter, markdownFormatter];

const hr = '-'.repeat(20);
for (const formatter of formatters) {
  const result = prompt('test', formatter);
  console.log(hr);
  console.log(formatter.name);
  console.log(hr);
  console.log(result);
  console.log(hr);
  console.log('');
}
