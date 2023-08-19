import { Test, TestingModule } from '@nestjs/testing';
import { UserGradesController } from './user-grades.controller';
import { UserGradesService } from './user-grades.service';

describe('UserGradesController', () => {
  let controller: UserGradesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserGradesController],
      providers: [UserGradesService],
    }).compile();

    controller = module.get<UserGradesController>(UserGradesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
