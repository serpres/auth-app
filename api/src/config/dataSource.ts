import { DataSource } from 'typeorm';
import { ormconfig } from './ormconfig';

export const dataSource = new DataSource(
  Object.assign(ormconfig, {
    host: 'localhost',
  }),
);
