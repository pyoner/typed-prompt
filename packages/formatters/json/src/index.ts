import type { Format, Formatter } from '@typed-prompt/types';

export class JSONFormatter implements Formatter {
  constructor(
    readonly name: string = 'prompt',
    readonly spacer: string | number = 2,
  ) {}

  format(obj: unknown) {
    return JSON.stringify({ [this.name]: obj }, null, this.spacer);
  }
}

export const jsonFormatter: Format = (obj) => {
  return new JSONFormatter().format(obj);
};
