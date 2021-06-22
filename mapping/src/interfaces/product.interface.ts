import { CommonObject } from './commons.interface';

export interface ProductInternal extends CommonObject {
  exchangeWeight: number;
  mainFactory?: number;
  producers?: number[];
}

export interface ProductDTO {}
