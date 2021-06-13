import { Injectable } from '@nestjs/common';
import data from '../data/annoData';
import { Product } from '../interfaces/product.interface';

@Injectable()
export class ProductsService {
  private products: Product[];
  constructor() {
    this.products = data.products as Product[];
  }

  public getAll(): Product[] {
    return this.products;
  }

  public findById(guid: number): Product {
    return this.products.find((product: Product) => product.guid === guid);
  }
}
