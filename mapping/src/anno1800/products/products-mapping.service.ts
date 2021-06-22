import { Injectable } from '@nestjs/common';
import { ProductInternal } from '../../interfaces/product.interface';

@Injectable()
export class ProductsMappingService {
  public mapToDTO(product: ProductInternal, language: string) {}
}
