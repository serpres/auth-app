import { DataSourceOptions } from 'typeorm';

export const ormconfig: DataSourceOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'auth',
  entities: ['dist/entities/**/*{.js,.ts}'],
  migrations: ['dist/migrations/**/*{.js,.ts}'],
  subscribers: ['dist/subscribers/**/*{.js,.ts}'],
  migrationsTableName: 'migrations',
  synchronize: false,
  dropSchema: false,
};
