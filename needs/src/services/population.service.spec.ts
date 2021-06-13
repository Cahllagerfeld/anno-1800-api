import { Test, TestingModule } from '@nestjs/testing';
import { PopulationService } from './population.service';

describe('PopulationService', () => {
  let service: PopulationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PopulationService],
    }).compile();

    service = module.get<PopulationService>(PopulationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
