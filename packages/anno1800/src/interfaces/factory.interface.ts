import { CommonObject } from './commons.interface';

export interface Entry {
  Index: number;
  TemplateName: string;
}

export interface InheritanceMapV2 {
  Entry: Entry;
}

export interface VectorElement {
  InheritanceMapV2: InheritanceMapV2;
}

export interface Maintenance {
  Amount: number;
  InactiveAmount: number;
  Product: number;
  ShutdownThreshold?: number;
  VectorElement: VectorElement;
}

export interface Output {
  Amount: number;
  Product: number;
  StorageAmount: number;
  VectorElement?: any;
}

export interface Input {
  Amount: number;
  Product: number;
  StorageAmount: number;
  VectorElement?: any;
}

export interface Factory extends CommonObject {
  maintenances: Maintenance[];
  module: number;
  modulesLimit: number;
  modulesSize: number;
  outputs: Output[];
  palaceBuff: number;
  region: number;
  tpmin: number;
  freeArea?: number;
  inputs?: Input[];
}
