import { Injectable } from '@nestjs/common';
import { Need, PopulationLevel } from './interfaces/population.interface';
import { Product } from './interfaces/product.interface';
import { FactoryService } from './services/factory.service';
import { PopulationService } from './services/population.service';
import { ProductsService } from './services/products.service';

@Injectable()
export class AppService {}
