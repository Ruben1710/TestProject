import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.aflxroj.mongodb.net/?retryWrites=true&w=majority'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
