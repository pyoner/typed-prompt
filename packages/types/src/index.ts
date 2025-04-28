export type Prompt<V = unknown> = V;
export type Format<P extends Prompt = unknown> = (obj: P) => string;

export interface Formatter<P extends Prompt = unknown> {
  format: Format<P>;
}
