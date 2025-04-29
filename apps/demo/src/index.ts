import { jsonFormatter } from '@typed-prompt/json-formatter';
import { xmlFormatter } from '@typed-prompt/xml-formatter';
import { markdownFormatter } from '@typed-prompt/markdown-formatter';
import { prompt } from '@typed-prompt/core';

const formatters = [jsonFormatter, xmlFormatter, markdownFormatter];
const complexPrompt = {
  title: 'Data Processing Wizard',
  instructions: [
    'Analyze the input and return the structured version.',
    'Highlight any inconsistencies you find.',
    'Format your output according to the selected formatter.',
  ],
  inputs: {
    userData: {
      name: 'string',
      age: 'number',
      email: 'string',
      interests: ['string'],
    },
    meta: {
      timestamp: 'Date',
      source: 'string',
      flags: ['string'],
    },
  },
  outputs: [
    {
      type: 'success',
      description: 'Structured data with formatter-specific syntax.',
    },
    {
      type: 'error',
      description: 'Error object with reason for failure.',
    },
  ],
  example: {
    userData: {
      name: 'Alice Example',
      age: 34,
      email: 'alice@example.com',
      interests: ['reading', 'gardening'],
    },
    meta: {
      timestamp: '2024-06-22T20:00:00Z',
      source: 'test-suite',
      flags: [],
    },
  },
};

const hr = '-'.repeat(20);
for (const formatter of formatters) {
  const result = prompt(complexPrompt, formatter);
  console.log(hr);
  console.log(formatter.name);
  console.log(hr);
  console.log(result);
  console.log(hr);
  console.log('');
}
