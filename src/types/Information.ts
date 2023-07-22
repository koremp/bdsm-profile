export interface Information {
  readonly text: string;
  readonly description: string;
};

export function convertInformation2Obj(infos: readonly Information[]) {
  return Object.fromEntries(infos.map((i) => [i.text, i.description]));
}