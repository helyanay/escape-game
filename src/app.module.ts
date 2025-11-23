import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HeroesModule } from './heroes/heroes.module';
import { LevelsModule } from './levels/levels.module';


@Module({
  imports: [
    HeroesModule,
    LevelsModule,
  ],
  
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
