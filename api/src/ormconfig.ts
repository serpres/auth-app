import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'authadmin',
  password: '12345',
  database: 'auth',
  synchronize: false,
};
export default config;
