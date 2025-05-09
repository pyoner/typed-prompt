# @typed-prompt Monorepo

A set of modular TypeScript packages for composable, strongly-typed prompt engineering in AI applications.

This monorepo provides foundational types, core utilities, and flexible formatters for transforming prompt values into various serializations (JSON, Markdown, XML), designed for seamless integration and reliable workflows.

## Why This Project Exists

This project exists to provide a standardized, type-safe framework for managing and formatting prompts in AI applications. As the use of large language models continues to evolve, ensuring consistency and flexibility in prompt generation has become critical. The project addresses the challenges of interoperability among different formats—such as JSON, Markdown, and XML—each with its own benefits and token cost implications, while meeting the varying requirements of diverse LLMs. By offering a cohesive set of utilities and formatters, developers can effortlessly integrate robust prompt engineering into their workflows, optimize performance, and minimize unnecessary overhead, ultimately fostering greater reliability and expressiveness in AI-driven experiences.

## Packages

### [@typed-prompt/types](./packages/types)

Core TypeScript type definitions for prompt values, formatters, and formatting functions used across the ecosystem.


### [@typed-prompt/core](./packages/core)

Essential utilities for formatting and handling prompt values with strong type safety and flexibility.
Relies on `@typed-prompt/types` for type definitions.


### [@typed-prompt/json-formatter](./packages/formatters/json)

Formatter package to serialize prompt values as pretty-printed JSON strings for easy integration and processing.


### [@typed-prompt/markdown-formatter](./packages/formatters/markdown)

Formatter package to convert prompt values into well-formatted Markdown for presentation or communication with AI agents.


### [@typed-prompt/xml-formatter](./packages/formatters/xml)

Formatter package to serialize prompt values as XML strings with customizable tags and indentation for workflow integration.


## Installation

Each package can be installed individually via npm:

```sh
npm install <package-name>
```

Replace `<package-name>` with any of the packages listed above.


## Example

```typescript
import { prompt } from '@typed-prompt/core';
import { jsonFormatter } from '@typed-prompt/json-formatter';
import { markdownFormatter } from '@typed-prompt/markdown-formatter';
import { xmlFormatter } from '@typed-prompt/xml-formatter';

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

```


## Output

```sh
--------------------
jsonFormatter
--------------------
{
  "prompt": {
    "title": "Data Processing Wizard",
    "instructions": [
      "Analyze the input and return the structured version.",
      "Highlight any inconsistencies you find.",
      "Format your output according to the selected formatter."
    ],
    "inputs": {
      "userData": {
        "name": "string",
        "age": "number",
        "email": "string",
        "interests": [
          "string"
        ]
      },
      "meta": {
        "timestamp": "Date",
        "source": "string",
        "flags": [
          "string"
        ]
      }
    },
    "outputs": [
      {
        "type": "success",
        "description": "Structured data with formatter-specific syntax."
      },
      {
        "type": "error",
        "description": "Error object with reason for failure."
      }
    ],
    "example": {
      "userData": {
        "name": "Alice Example",
        "age": 34,
        "email": "alice@example.com",
        "interests": [
          "reading",
          "gardening"
        ]
      },
      "meta": {
        "timestamp": "2024-06-22T20:00:00Z",
        "source": "test-suite",
        "flags": []
      }
    }
  }
}
--------------------

--------------------
xmlFormatter
--------------------
<prompt>
 <title>Data Processing Wizard</title>
 <instructions>Analyze the input and return the structured version.</instructions>
 <instructions>Highlight any inconsistencies you find.</instructions>
 <instructions>Format your output according to the selected formatter.</instructions>
 <inputs>
  <userData>
   <name>string</name>
   <age>number</age>
   <email>string</email>
   <interests>string</interests>
  </userData>
  <meta>
   <timestamp>Date</timestamp>
   <source>string</source>
   <flags>string</flags>
  </meta>
 </inputs>
 <outputs>
  <type>success</type>
  <description>Structured data with formatter-specific syntax.</description>
  <type>error</type>
  <description>Error object with reason for failure.</description>
 </outputs>
 <example>
  <userData>
   <name>Alice Example</name>
   <age>34</age>
   <email>alice@example.com</email>
   <interests>reading</interests>
   <interests>gardening</interests>
  </userData>
  <meta>
   <timestamp>2024-06-22T20:00:00Z</timestamp>
   <source>test-suite</source>
  </meta>
 </example>
</prompt>
--------------------

--------------------
markdownFormatter
--------------------
## Prompt

- **title**: Data Processing Wizard
- **instructions**:
  - Analyze the input and return the structured version.
  - Highlight any inconsistencies you find.
  - Format your output according to the selected formatter.
- **inputs**:
  - **userData**:
    - **name**: string
    - **age**: number
    - **email**: string
    - **interests**:
      - string
  - **meta**:
    - **timestamp**: Date
    - **source**: string
    - **flags**:
      - string
- **outputs**:
  -
    - **type**: success
    - **description**: Structured data with formatter-specific syntax.
  -
    - **type**: error
    - **description**: Error object with reason for failure.
- **example**:
  - **userData**:
    - **name**: Alice Example
    - **age**: 34
    - **email**: alice@example.com
    - **interests**:
      - reading
      - gardening
  - **meta**:
    - **timestamp**: 2024-06-22T20:00:00Z
    - **source**: test-suite
    - **flags**:

--------------------
```

## Requirements

- TypeScript ^5.x
- Node.js or compatible JavaScript runtime


## Repository

Hosted at [https://github.com/pyoner/typed-prompt](https://github.com/pyoner/typed-prompt)


## License

MIT


Developed and maintained by [Askar Yusupov](https://github.com/pyoner).
