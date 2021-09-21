export interface LocaText {
  brazilian: string;
  chinese: string;
  english: string;
  french: string;
  german: string;
  italian: string;
  japanese: string;
  korean: string;
  polish: string;
  portuguese: string;
  russian: string;
  spanish: string;
  taiwanese: string;
}

export interface CommonObject {
  guid: number;
  iconPath: string;
  locaText: LocaText;
  name: string;
}

export interface TotalNeed {
  guid: number;
  tpmin: number;
}

export interface FactorySet {
  guid: number;
  amount: number;
  productivity: number;
  totalTpMin: number;
}
