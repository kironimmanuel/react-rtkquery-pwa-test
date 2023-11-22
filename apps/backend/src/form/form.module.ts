import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FormController } from './form.controller';
import { FormService } from './form.service';

@Module({
  providers: [FormService, PrismaService],
  controllers: [FormController],
})
export class FormModule {}
