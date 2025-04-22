export type Prompt<V = unknown> = Record<string | number, V>;
export type Formatter = <P extends Prompt>(obj: P) => string;
