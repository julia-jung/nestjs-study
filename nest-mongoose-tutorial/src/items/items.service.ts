import { Injectable } from '@nestjs/common';
// import { Item } from './interfaces/item.interface';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) { }

  // private readonly items: Item[] = [
  //   {
  //     id: "33232323232",
  //     name: "first item",
  //     qty: 100
  //   },
  //   {
  //     id: "45454545454",
  //     name: "second item",
  //     qty: 200,
  //     description: "this is second item"
  //   }
  // ];

  async findAll(): Promise<Item[]> {
    // return this.items;
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    // return this.items.find(item => item.id === id);
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
