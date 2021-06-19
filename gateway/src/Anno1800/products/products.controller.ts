import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  @Get()
  getAllProducts() {}

  @Get(':id')
  getById() {}
}
