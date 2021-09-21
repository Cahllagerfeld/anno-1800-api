import { Test, TestingModule } from '@nestjs/testing';
import { PopulationsService } from './populations.service';

describe('PopulationService', () => {
  let service: PopulationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PopulationsService],
    }).compile();

    service = module.get<PopulationsService>(PopulationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
