import { Test, TestingModule } from '@nestjs/testing';
import { ProductsMappingService } from './products-mapping.service';

describe('ProductsMappingService', () => {
  let service: ProductsMappingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsMappingService],
    }).compile();

    service = module.get<ProductsMappingService>(ProductsMappingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
