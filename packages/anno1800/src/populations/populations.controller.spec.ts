import { Test, TestingModule } from '@nestjs/testing';
import { PopulationsController } from './populations.controller';

describe('PopulationsController', () => {
  let controller: PopulationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PopulationsController],
    }).compile();

    controller = module.get<PopulationsController>(PopulationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
