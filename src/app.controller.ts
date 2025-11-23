import { Controller, Get, Render, UseGuards } from '@nestjs/common';
//import { AuthGuard } from './guards/auth.guard';  ///TODO Niveau 4

@Controller()
export class AppController {

  @Get()
  @Render('escape')
  home() {
    return {
      title: "Escape Game NestJS",
      level: 1
    };
  }

  @Get('level1')
  @Render('level1')
  level1() {
    return { title: "Niveau 1" };
  }

  @Get('level2')
  @Render('level2')
  level2() {
    return { title: "Niveau 2" };
  }

  @Get('level3')
  @Render('level3')
  level3() {
    return { title: "Niveau 3" };
  }

  @Get('level4')
  @Render('level4')
  level4() {
    return { title: "Niveau 4" };
  }


  @Get('protected')
  ///TODO Niveau = 4
  protectedRoute() {
    return "Accès autorisé à la zone secrète.";
  }

  @Get('final')
  @Render('final')
  final() {
  return { title: "Mission Accomplie" };
  }
}
