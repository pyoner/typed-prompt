export type Prompt <K extends string | number = string | number, V = unknown> = Record<K, V>
export type Formatter<P extends Prompt> = (obj: P) => string

export function prompt<P extends Prompt>(obj: P, formatter: Formatter<P>): string {
  return formatter(obj)
}
