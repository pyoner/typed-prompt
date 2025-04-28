import type { Format } from '@typed-prompt/types';
import { toXML } from 'jstoxml';

export const xmlFormatter: Format = (obj) => {
  return toXML({ prompt: obj }, { indent: ' ' });
};
