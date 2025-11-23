import { Controller, Get, Render } from '@nestjs/common';

@Controller('level3')
export class Level3Controller {
  @Get()
  @Render('level3')
  index() {
    return { title: 'Niveau 3' };
  }
}
