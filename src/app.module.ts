import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CarRidesModule } from './car-rides/car-rides.module';

@Module({
  imports: [UsersModule, CarRidesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
