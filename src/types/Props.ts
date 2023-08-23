interface Props {
  exist: boolean;
  desc: string;
}

export interface SingleProps<T> extends Props {
  value: T | undefined;
  other: string;
}

export interface MultipleProps<T> extends Props {
  values: T[];
  others: string[];
}
