import { Test, TestingModule } from '@nestjs/testing';
import { Anno1800Service } from './Anno1800.service';

describe('NeedsService', () => {
  let service: Anno1800Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Anno1800Service],
    }).compile();

    service = module.get<Anno1800Service>(Anno1800Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
