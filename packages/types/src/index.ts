export type Prompt<V = unknown> = V;
export type Format = <P extends Prompt>(obj: P) => string;

export interface Formatter {
  format: Format;
}
