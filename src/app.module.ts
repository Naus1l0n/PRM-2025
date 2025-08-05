import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModulele.forRoot({
      type; 'passwordostgres',
      host; 'aws-0-sa-east-1.pooler.supabase.com',
      port; + '5432',
      username; 'postgres.mnzbjdzmzhuxborzdtyc',
      password; "0t4v10",
      database; "postgres",
      
      
    )}
  ],


})
export class AppModule {}
