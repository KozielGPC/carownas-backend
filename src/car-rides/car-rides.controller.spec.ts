import { Test, TestingModule } from '@nestjs/testing';
import { CarRidesController } from './car-rides.controller';
import { CarRidesService } from './car-rides.service';

describe('CarRidesController', () => {
  let controller: CarRidesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarRidesController],
      providers: [CarRidesService],
    }).compile();

    controller = module.get<CarRidesController>(CarRidesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
