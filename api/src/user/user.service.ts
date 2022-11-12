import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

import { UserEntity } from '@app/entities/user.entity';
import { CreateUserDto } from './dto/createUser.dto';

import { UserResponseInterface } from './types/userResponse.interface';

import { JWT_SECRET_KEY } from '@app/config/config';
import { LoginUserDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userByEmail = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });
    if (userByEmail) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const userByUsername = await this.userRepository.findOneBy({
      username: createUserDto.username,
    });
    if (userByUsername) {
      throw new HttpException(
        'User with this username already exists',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);
    return await this.userRepository.save(newUser);
  }

  async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const user = await this.userRepository
      .createQueryBuilder()
      .select('*')
      .where('email = :email', { email: loginUserDto.email })
      .getRawOne();

    if (!user)
      throw new HttpException(
        'Credentials are not valid',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );

    const isPasswordCorrect = await compare(
      loginUserDto.password,
      user.password,
    );
    if (!isPasswordCorrect)
      throw new HttpException(
        'Credentials are not valid',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );

    delete user.password;
    return user;
  }

  generateJwt(user: UserEntity): string {
    return sign(
      {
        id: user.id,
        userName: user.username,
        email: user.email,
      },
      JWT_SECRET_KEY,
    );
  }

  buildUserResponse(user: UserEntity): UserResponseInterface {
    return {
      user: {
        ...user,
        token: this.generateJwt(user),
      },
    };
  }

  findById(id: number): Promise<UserEntity> {
    return this.userRepository.findOneBy({ id });
  }

  async updateUser(
    userId: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const user = await this.findById(userId);
    Object.assign(user, updateUserDto);
    console.log('USER!!!!', updateUserDto);
    return await this.userRepository.save(user);
  }
}
