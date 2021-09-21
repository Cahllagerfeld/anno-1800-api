import { CommonObject } from './commons.interface';

export interface UnlockCondition {
  amount: number;
  populationLevel: number;
}

export interface Need {
  guid: number;
  residents: number;
  tpmin?: number;
  unlockCondition: UnlockCondition;
  happiness?: number;
}

export interface PopulationLevel extends CommonObject {
  fullHouse: number;
  needs: Need[];
  region: number;
  residence: number;
}
