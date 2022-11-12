import { UserEntity } from '@app/entities/user.entity';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { User } from './decorators/user.decorator';

import { UserService } from './user.service';
import { AuthGuard } from './guards/auth.guard';

import { CreateUserDto } from './dto/createUser.dto';
import { LoginUserDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserResponseInterface } from './types/userResponse.interface';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserObject } from './api/UserObject';

@ApiBearerAuth()
@ApiTags('user')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @ApiOperation({ summary: 'Registration' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User entity',
    type: UserObject,
  })
  @ApiBody({ type: CreateUserDto })
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserResponse(user);
  }

  @Get('user')
  @ApiOperation({ summary: 'Get current user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User entity',
    type: UserObject,
  })
  @UseGuards(AuthGuard)
  async user(@User() user: UserEntity) {
    return this.userService.buildUserResponse(user);
  }

  @ApiOperation({ summary: 'Update current user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User entity',
    type: UserObject,
  })
  @Put('user')
  @ApiBody({ type: UpdateUserDto })
  @UseGuards(AuthGuard)
  async updateCurrentUser(
    @User('id') userId: number,
    @Body('user') updateUserDto: UpdateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.updateUser(userId, updateUserDto);
    return this.userService.buildUserResponse(user);
  }
  @ApiOperation({ summary: 'Login via email and password' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User',
    type: UserObject,
  })
  @Post('users/login')
  @ApiBody({ type: LoginUserDto })
  @UsePipes(new ValidationPipe())
  async login(
    @Body('user') loginUserDto: LoginUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.login(loginUserDto);
    return this.userService.buildUserResponse(user);
  }
}
