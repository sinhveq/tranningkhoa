import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TeacherApiService implements InMemoryDbService {
    createDb() {
        const teachers = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
        ];
        return {teachers};
    }
}
