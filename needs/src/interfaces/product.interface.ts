import { CommonObject } from './commons.interface';

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

export interface Product extends CommonObject {
  exchangeWeight: number;
  mainFactory?: number;
  producers?: number[];
}
