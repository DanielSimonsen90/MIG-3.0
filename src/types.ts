export type RemoveReadonly<T> = T extends ReadonlyArray<infer U> ? Array<U> : never;
export type Nullable<T> = T | null;