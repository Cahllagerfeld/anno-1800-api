import { Test, TestingModule } from '@nestjs/testing';
import { FactoriesController } from './factories.controller';

describe('FactoriesController', () => {
  let controller: FactoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactoriesController],
    }).compile();

    controller = module.get<FactoriesController>(FactoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
