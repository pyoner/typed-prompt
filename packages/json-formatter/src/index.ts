import type { Formatter } from '@typed-prompt/types';

export const jsonFormatter: Formatter = (obj) => {
  return JSON.stringify({ prompt: obj }, null, 2);
};
