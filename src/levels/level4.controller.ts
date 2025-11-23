import { Controller, Get, Render } from '@nestjs/common';

@Controller('level4')
export class Level4Controller {
  @Get()
  @Render('level4')
  index() {
    return { title: 'Niveau 4' };
  }
}
