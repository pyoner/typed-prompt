export type Prompt<V = unknown> = V;
export type Formatter = <P extends Prompt>(obj: P) => string;
