import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';

import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '@app/user/user.module';

import { ormconfig } from '@app/config/ormconfig';
import { AuthMiddleware } from './middleware/auth.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.local', '.env.development'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
