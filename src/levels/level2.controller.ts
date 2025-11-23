import { Controller, Get, Render } from '@nestjs/common';

@Controller('level2')
export class Level2Controller {
  @Get()
  @Render('level2')
  index() {
    return { title: 'Niveau 2' };
  }
}
