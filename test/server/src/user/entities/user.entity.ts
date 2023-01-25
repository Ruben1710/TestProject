import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & mongoose.Document

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, enum: [0, 1] })
  gender: number;

  @Prop({ required: false })
  links: Array<string>;

  @Prop({ default: Date.now })
  created_at: Date;
}


export const UserSchema = SchemaFactory.createForClass(User)