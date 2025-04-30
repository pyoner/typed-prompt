import type { Format, Formatter, Prompt } from '@typed-prompt/types';

export function prompt<P extends Prompt>(
  obj: P,
  formatter: Formatter<P> | Format<P>,
): string {
  const func = typeof formatter === 'function' ? formatter : formatter.format;
  return func(obj);
}
