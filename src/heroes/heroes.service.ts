import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroesService {
  getAll() {
    return [
      { id: 1, name: 'Superman' },
      { id: 2, name: 'Batman' },
      { id: 3, name: 'Wonder Woman' },
    ];
  }

  create(hero) {
    return { message: 'Hero created', hero };
  }
}
