import { describe, test, expect } from 'bun:test';
import { markdownFormatter } from '../src/index';

describe('markdownFormatter', () => {
  test('formats a simple primitive', () => {
    const input = 'hello';
    expect(markdownFormatter(input)).toBe(`## Prompt

hello
`);
  });

  test('formats a simple object', () => {
    const input = { foo: 'bar', baz: 42 };
    expect(markdownFormatter(input)).toBe(`## Prompt

- **foo**: bar
- **baz**: 42
`);
  });

  test('formats an array of primitives', () => {
    const input = [1, 2, 'hi'];
    expect(markdownFormatter(input)).toBe(`## Prompt

- 1
- 2
- hi
`);
  });

  test('handles an array of objects', () => {
    const input = [{ a: 1 }, { b: 2 }];
    expect(markdownFormatter(input)).toBe(`## Prompt

-\x20
  - **a**: 1
-\x20
  - **b**: 2
`);
  });

  test('handles nested objects', () => {
    const input = { top: { mid: { bottom: 'leaf' } } };
    expect(markdownFormatter(input)).toBe(`## Prompt

- **top**:
  - **mid**:
    - **bottom**: leaf
`);
  });

  test('handles mixed arrays and objects', () => {
    const input = {
      foo: [1, { bar: [2, 3] }],
    };
    expect(markdownFormatter(input)).toBe(
      `## Prompt

- **foo**:
  - 1
  -\x20
    - **bar**:
      - 2
      - 3
`,
    );
  });

  test('handles null and undefined values', () => {
    const input = { a: null, b: undefined };
    expect(markdownFormatter(input)).toBe(`## Prompt

- **a**: null
- **b**: undefined
`);
  });
});
