import * as c from '@nestjs/common';
import { userDto } from './dto/dto';
import { UserService } from './user.service';

@c.Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @c.Post()
    created(@c.Body() inputDto: userDto.inputs.CreateUserInput) {
        return this.userService.create(inputDto);
    }

    @c.Get()
    findAll() {
        return this.userService.findAll();
    }

    @c.Get(':id')
    async findOne(@c.Param('id') id: string) {
        return this.userService.findOne(id);
    }
}
