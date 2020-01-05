import { Module, DynamicModule } from '@nestjs/common';
import { FirestoreService, Config } from './firestore.service';

@Module({})
export class FirestoreModule {
    static register(options: Config): DynamicModule {
        const { collectionName } = options;
        return {
            module: FirestoreModule,
            providers: [
                {
                    provide: 'FIRESTORE_CONFIG',
                    useValue: { collectionName }
                },
                FirestoreService,
            ],
            exports: [FirestoreService],
        };
    }
}
