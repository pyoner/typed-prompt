import type { Format } from '@typed-prompt/types';

export const jsonFormatter: Format = (obj) => {
  return JSON.stringify({ prompt: obj }, null, 2);
};
