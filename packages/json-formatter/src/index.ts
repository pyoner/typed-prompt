import type { Formatter } from '@typed-prompt/types';

export const jsonFormatter: Formatter = (obj) => {
  return JSON.stringify(obj, null, 2);
};
