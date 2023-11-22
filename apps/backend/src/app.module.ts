import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { PrismaService } from './prisma.service';
import { FormController } from './form/form.controller';
import { FormService } from './form/form.service';
import { FormModule } from './form/form.module';

@Module({
  imports: [ConfigModule.forRoot(), PostModule, FormModule],
  controllers: [AppController, FormController],
  providers: [AppService, PrismaService, FormService],
})
export class AppModule {}
