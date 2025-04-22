import type { Formatter } from '@typed-prompt/types';
import { toXML } from 'jstoxml';

export const xmlFormatter: Formatter = (obj) => {
  return toXML({ prompt: obj });
};
