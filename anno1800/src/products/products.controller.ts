import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @MessagePattern({ message: 'getAllProducts' })
  getAllProducts() {
    return this.productsService.getAll();
  }

  @MessagePattern({ message: 'getProductById' })
  getProductById(@Payload() payload: number) {
    return this.productsService.findById(payload);
  }
}
