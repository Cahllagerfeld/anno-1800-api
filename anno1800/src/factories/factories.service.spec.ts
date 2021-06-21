import { Test, TestingModule } from '@nestjs/testing';
import { FactoriesService } from './factories.service';

describe('FactoryService', () => {
  let service: FactoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactoriesService],
    }).compile();

    service = module.get<FactoriesService>(FactoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
