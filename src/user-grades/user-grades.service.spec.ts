import { Test, TestingModule } from '@nestjs/testing';
import { UserGradesService } from './user-grades.service';

describe('UserGradesService', () => {
  let service: UserGradesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserGradesService],
    }).compile();

    service = module.get<UserGradesService>(UserGradesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
