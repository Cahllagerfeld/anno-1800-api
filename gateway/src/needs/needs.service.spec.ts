import { Test, TestingModule } from '@nestjs/testing';
import { NeedsService } from './needs.service';

describe('NeedsService', () => {
  let service: NeedsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeedsService],
    }).compile();

    service = module.get<NeedsService>(NeedsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
