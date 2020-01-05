import { Injectable, Inject } from '@nestjs/common';
import { CollectionReference, Firestore } from '@google-cloud/firestore';

export interface Config { collectionName: string; }

@Injectable()
export class FirestoreService {

    private readonly client: CollectionReference;

    constructor(@Inject('FIRESTORE_CONFIG') private options: Config) {
        const { collectionName } = options;
        this.client = new Firestore().collection(collectionName);
    }

    public async fecthMany(_?: any) {
        const docRefs = await this.client.listDocuments();
        const collection = await Promise.all(
            docRefs.map(async d => (await d.get()).data()),
        );
        return { data: collection };
    }
}
