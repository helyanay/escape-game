import { Controller, Get, Post, Body } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDto } from './dto/create-hero.dto';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}


  //TODO Niveau 1
  getAll() {
    return this.heroesService.getAll();
  }

  //TODO Niveau 2
  add(@Body() body: CreateHeroDto) {
    return null; //TODO Niveau 1
  }
}
