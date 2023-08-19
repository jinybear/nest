import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();
const configService = new ConfigService();
export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'dlsekdtlqdjrdnjs',
  database: 'postgres',
  synchronize: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrationsRun: false,
  migrations: [__dirname + '/**/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
