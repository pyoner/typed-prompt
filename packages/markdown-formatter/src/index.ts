import type { Formatter } from '@typed-prompt/types';

function toMarkdown(value: unknown, indent = 0): string {
  const pad = '  '.repeat(indent);

  if (value === null) {
    return '`null`';
  }
  if (value === undefined) {
    return '`undefined`';
  }
  if (typeof value === 'string') {
    return `\`${value}\``;
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return `\`${value}\``;
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return '_empty array_';
    return value
      .map((item) => `${pad}- ${toMarkdown(item, indent + 1)}`)
      .join('\n');
  }
  if (typeof value === 'object') {
    const entries = Object.entries(value as object);
    if (entries.length === 0) return '_empty object_';
    return entries
      .map(
        ([key, val]) =>
          `${pad}- **${key}**: ${toMarkdown(val, indent + 1)}`
      )
      .join('\n');
  }
  return `\`${String(value)}\``;
}

export const markdownFormatter: Formatter = (obj) => {
  return `## Prompt\n\n${toMarkdown(obj)}`;
};
