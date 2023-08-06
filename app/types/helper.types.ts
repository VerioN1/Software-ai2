export type Nullish = null | undefined | '' | 0 | false
export type Nullable<T> = T | Nullish;
export type Valueof<T> = T[keyof T];
