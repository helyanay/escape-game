import { Controller, Get, Render } from '@nestjs/common';

@Controller('level1')
export class Level1Controller {
  @Get()
  @Render('level1')
  index() {
    return { title: 'Niveau 1' };
  }
}
