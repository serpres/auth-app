import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { UserEntity } from '@app/entities/user.entity';
import { ExpressRequestInterface } from '@app/types/expressRequest.interface';

export const User = createParamDecorator(
  (data: keyof UserEntity | null, ctx: ExecutionContext) => {
    const request: ExpressRequestInterface = ctx.switchToHttp().getRequest();
    if (!request.user) return null;
    if (data) return request.user[data];
    return request.user;
  },
);
