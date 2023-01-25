import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { userDto } from './dto/dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('user') private readonly userModel: Model<UserDocument>
    ) { }

    async create(inputDto: userDto.inputs.CreateUserInput): Promise<User> {
        const newUser = new this.userModel(inputDto)
        return newUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find();
    }

    async findOne(id): Promise<{} | null> {
        return this.userModel.findOne({ _id: id });
    }

}
