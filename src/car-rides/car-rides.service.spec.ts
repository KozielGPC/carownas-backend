import { Test, TestingModule } from '@nestjs/testing';
import { CarRidesService } from './car-rides.service';

describe('CarRidesService', () => {
  let service: CarRidesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarRidesService],
    }).compile();

    service = module.get<CarRidesService>(CarRidesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
