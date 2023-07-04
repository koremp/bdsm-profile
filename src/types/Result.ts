interface Result {
  exist: boolean;
  desc: string;
}

export interface MultipleResultProps<T> extends Result {
  results: T[];
  others: string[];
}

export interface SingleResultProps<T> extends Result {
  result: T | undefined;
  other: string;
}