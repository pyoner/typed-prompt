import type { Prompt, Formatter } from '@typed-prompt/types';

export function prompt<P extends Prompt>(obj: P, formatter: Formatter): string {
  return formatter(obj)
}
