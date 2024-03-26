//taste description according to Alko's taste categorization
export interface TasteDescription {
  readonly taste: string;
  readonly tipsForUse: string;
  readonly howToServe: string;
}

export interface GenericWineDescription {
  readonly type: WineType;
  readonly taste?: WineTaste;
  readonly tasteDescription: TasteDescription;
}

export type WineTaste = string;

export type WineType = "red" | "white" | "default";
