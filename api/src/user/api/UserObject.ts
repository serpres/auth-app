import { ApiProperty } from '@nestjs/swagger';

export class UserObject {
  @ApiProperty({ example: 1, description: 'Primary generated user id' })
  id: number;
  @ApiProperty({ example: 'User', description: 'Username' })
  username: string;
  @ApiProperty({
    example: 'http://images.com/image.jpg',
    description: 'User pic',
  })
  image: string;
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlck5hbWUiOiJORVdVU0VSTkFNRSIsImVtYWlsIjoibWFpbDEyM0BtYWlsLnJ1IiwiaWF0IjoxNjY4Mjc2MzgxfQ.oOKDo7RBPannzPntz8GAIl5LTbe5G27eTuFObgvQd3g',
    description: 'token',
  })
  token: string;
  @ApiProperty({
    example: 'some@email.com',
    description: 'User email',
  })
  email: string;
}
