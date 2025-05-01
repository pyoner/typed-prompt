# @typed-prompt Monorepo

A set of modular TypeScript packages for composable, strongly-typed prompt engineering in AI applications.

This monorepo provides foundational types, core utilities, and flexible formatters for transforming prompt values into various serializations (JSON, Markdown, XML), designed for seamless integration and reliable workflows.

---

## Packages

### [@typed-prompt/types](./packages/types)

Core TypeScript type definitions for prompt values, formatters, and formatting functions used across the ecosystem.

---

### [@typed-prompt/core](./packages/core)

Essential utilities for formatting and handling prompt values with strong type safety and flexibility.
Relies on `@typed-prompt/types` for type definitions.

---

### [@typed-prompt/json-formatter](./packages/formatters/json)

Formatter package to serialize prompt values as pretty-printed JSON strings for easy integration and processing.

---

### [@typed-prompt/markdown-formatter](./packages/formatters/markdown)

Formatter package to convert prompt values into well-formatted Markdown for presentation or communication with AI agents.

---

### [@typed-prompt/xml-formatter](./packages/formatters/xml)

Formatter package to serialize prompt values as XML strings with customizable tags and indentation for workflow integration.

---

## Installation

Each package can be installed individually via npm:

```sh
npm install <package-name>
```

Replace `<package-name>` with any of the packages listed above.

---

## Requirements

- TypeScript ^5.x
- Node.js or compatible JavaScript runtime

---

## Repository

Hosted at [https://github.com/pyoner/typed-prompt](https://github.com/pyoner/typed-prompt)

---

## License

MIT

---

Developed and maintained by [Askar Yusupov](https://github.com/pyoner).
