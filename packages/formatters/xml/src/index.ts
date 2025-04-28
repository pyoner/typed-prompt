import type { Format, Formatter } from '@typed-prompt/types';
import { toXML } from 'jstoxml';

export class XMLFormatter implements Formatter {
  constructor(
    readonly name: string = 'prompt',
    readonly indent: string = ' ',
  ) {}

  format(obj: unknown) {
    return toXML({ [this.name]: obj }, { indent: this.indent });
  }
}

export const xmlFormatter: Format = (obj) => new XMLFormatter().format(obj);
