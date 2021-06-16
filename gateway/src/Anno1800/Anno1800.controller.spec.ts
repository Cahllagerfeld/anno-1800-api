import { Test, TestingModule } from '@nestjs/testing';
import { Anno1800Controller } from './Anno1800.controller';

describe('NeedsController', () => {
  let controller: Anno1800Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Anno1800Controller],
    }).compile();

    controller = module.get<Anno1800Controller>(Anno1800Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
