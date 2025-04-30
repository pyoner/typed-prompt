
# @typed-prompt/json-formatter

A JSON formatter for the `@typed-prompt` ecosystem.
Enables strongly-typed prompt values to be formatted as JSON strings for flexible serialization and integration with AI workflows.

---

## Installation

```sh
npm install @typed-prompt/json-formatter
```

Requires TypeScript ^5.x as a peer dependency.

---

## Overview

`@typed-prompt/json-formatter` provides a simple way to serialize prompt values into pretty-printed JSON format.
It is designed to work seamlessly within the `@typed-prompt` family, supporting type-safe and composable prompt engineering.

---

## Exports

- **`JSONFormatter`**: A class implementing the `Formatter` interface, allowing customization of the property name under which the prompt is stored, as well as the spacing of the JSON output.
- **`jsonFormatter`**: A function for formatting prompt values as JSON using default settings.

---

## Scripts

- `build`: Generate type definitions using `tsdown`.

---

## License

MIT

---
