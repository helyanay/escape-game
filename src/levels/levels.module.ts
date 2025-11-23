import { Module } from '@nestjs/common';
import { Level1Controller } from './level1.controller';
import { Level2Controller } from './level2.controller';
import { Level3Controller } from './level3.controller';
import { Level4Controller } from './level4.controller';

@Module({
  controllers: [
    Level1Controller,
    Level2Controller,
    Level3Controller,
    Level4Controller,
  ],
})
export class LevelsModule {}
