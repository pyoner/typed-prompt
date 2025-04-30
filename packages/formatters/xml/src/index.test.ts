import { describe, expect, it } from 'bun:test';
import { xmlFormatter } from './index';

describe('xmlFormatter', () => {
  it('converts a flat object to XML wrapped in <prompt>', () => {
    const input = { foo: 'bar', value: 42 };
    const xml = xmlFormatter(input);

    expect(xml).toContain('<prompt>');
    expect(xml).toContain('<foo>bar</foo>');
    expect(xml).toContain('<value>42</value>');
    expect(xml).toContain('</prompt>');
  });

  it('handles an empty object gracefully', () => {
    const xml = xmlFormatter({});
    // jstoxml outputs <prompt/>
    expect(xml.trim()).toBe('<prompt/>');
  });

  it('serializes nested objects and arrays correctly', () => {
    const input = {
      question: 'What?',
      options: ['A', 'B'],
      extra: { flag: true, num: 1 },
    };
    const xml = xmlFormatter(input);

    expect(xml).toMatch(/<question>What\?<\/question>/);
    expect(xml).toContain('<options>A</options>');
    expect(xml).toContain('<options>B</options>');
    expect(xml).toContain('<extra>');
    expect(xml).toContain('<flag>true</flag>');
    expect(xml).toContain('<num>1</num>');
    expect(xml).toContain('</extra>');
  });
});
