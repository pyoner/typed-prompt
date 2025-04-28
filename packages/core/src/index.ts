import type { Prompt, Formatter, Format } from '@typed-prompt/types';

export function prompt<P extends Prompt>(
  obj: P,
  formatter: Formatter | Format,
): string {
  const func = typeof formatter === 'function' ? formatter : formatter.format;
  return func(obj);
}
