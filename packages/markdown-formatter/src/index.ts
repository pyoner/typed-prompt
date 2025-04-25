import type { Formatter } from '@typed-prompt/types';

function toMarkdown(value: unknown, indent = 0): string {
  const pad = '  '.repeat(indent);

  if (Array.isArray(value)) {
    return value
      .map((item) => `${pad}- ${toMarkdown(item, indent + 1)}`)
      .join('\n');
  }

  if (typeof value === 'object') {
    return Object.entries(value)
      .map(([key, val]) => `${pad}- **${key}**: ${toMarkdown(val, indent + 1)}`)
      .join('\n');
  }

  return `${value}`;
}

export const markdownFormatter: Formatter = (obj) => {
  return `## Prompt\n\n${toMarkdown(obj)}`;
};
