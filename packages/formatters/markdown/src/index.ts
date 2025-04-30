import type { Format, Formatter } from '@typed-prompt/types';

function toMarkdown(data: unknown, indent = 0): string {
  let md = '';
  const prefix = '  '.repeat(indent);

  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      if (typeof item === 'object' && item !== null) {
        md += `${prefix}- \n${toMarkdown(item, indent + 1)}`;
      } else {
        md += `${prefix}- ${item}\n`;
      }
    });
  } else if (typeof data === 'object' && data !== null) {
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'object' && value !== null) {
        md += `${prefix}- **${key}**:\n${toMarkdown(value, indent + 1)}`;
      } else {
        md += `${prefix}- **${key}**: ${value}\n`;
      }
    }
  } else {
    md += `${prefix}${data}\n`;
  }

  return md;
}

export class MarkdownFormatter implements Formatter {
  constructor(readonly name: string = 'Prompt') {}

  format(obj: unknown): string {
    return `## ${this.name}\n\n${toMarkdown(obj)}`;
  }
}

export const markdownFormatter: Format = (obj) =>
  new MarkdownFormatter().format(obj);
