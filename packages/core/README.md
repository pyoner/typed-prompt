# @typed-prompt/core

A core package for building strongly-typed, composable prompts in AI applications.
Provides utilities and type definitions for reliable and flexible prompt engineering in TypeScript.

---

## Installation

```sh
npm install @typed-prompt/core
```

This package requires TypeScript ^5.x as a peer dependency.

---

## Overview

`@typed-prompt/core` enables concise creation and formatting of prompts with type safety.
It provides core utilities to work with prompts and format them using customizable formatters.

This package is designed to interoperate with [`@typed-prompt/types`](https://github.com/pyoner/typed-prompt), supplying the essential tools for composing prompt-based systems in TypeScript.

---

## Exports

### `prompt`

```ts
function prompt<P extends Prompt>(
  obj: P,
  formatter: Formatter<P> | Format<P>,
): string
```

Formats a prompt value using either a formatter object or a formatting function.

- **`obj`**: a prompt value of type `P`
- **`formatter`**: either a `Formatter<P>` object or a `Format<P>` function

This function centralizes prompt rendering to a typed and consistent utility, supporting custom formatting logic.

---

## Scripts

- `build`: Generate type definitions using `tsdown`.

---

## License

MIT

---
