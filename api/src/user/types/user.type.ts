import { UserEntity } from '@app/entities/user.entity';

export type UserType = Omit<UserEntity, 'hashPassword'>;
