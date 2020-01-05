import { Test, TestingModule } from '@nestjs/testing';
import { FirestoreService } from './firestore.service';
import { FirestoreModule } from './firestore.module';

describe('FirestoreService', () => {
  let service: FirestoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FirestoreModule.register({ collectionName: 'games' })],
      providers: [
        {
          provide: 'FIRESTORE_CONFIG',
          useValue: { collectionName: 'games' }
        },
        FirestoreService
      ],
    }).compile();

    service = module.get<FirestoreService>(FirestoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('...', async () => {
    const options = { collectionName: 'games' };
    const result = await service.fecthMany();
    console.log(JSON.stringify(result, null, 4));
  });
});
