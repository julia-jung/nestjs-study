// import * as mongoose from 'mongoose';

// export const ItemSchema = new mongoose.Schema({
//   name: String,
//   qty: Number,
//   description: String
// });

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Item extends Document {
  @Prop()
  name: string;

  @Prop()
  qty: number;

  @Prop()
  description?: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);