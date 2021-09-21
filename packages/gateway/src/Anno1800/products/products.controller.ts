import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Filter } from '../../decorators/filter.decorator';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(
    @Inject('ANNO1800_SERVICE') private readonly anno1800Service: ClientProxy,
  ) {}
  @Get()
  getAllProducts() {
    return this.anno1800Service.send({ message: 'getAllProducts' }, '');
  }

  @Get(':id')
  @ApiQuery({ name: 'filter', required: false })
  getById(@Param('id', ParseIntPipe) guid: number, @Filter() filter: any) {
    console.log(filter);
    return this.anno1800Service.send({ message: 'getProductById' }, guid);
  }
}
