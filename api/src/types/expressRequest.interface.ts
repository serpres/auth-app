import { UserEntity } from '@app/entities/user.entity';
import { Request } from 'express';

export interface ExpressRequestInterface extends Request {
  user?: UserEntity;
}
