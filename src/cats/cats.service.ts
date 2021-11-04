import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { FindByIdAndUpdateCatDto } from './dto/update-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = await this.catModel.create(createCatDto);
    return createdCat;
  }

  async find(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findById(_id: string): Promise<Cat> {
    const findByIdCat = await this.catModel.findById(_id).exec();
    return findByIdCat;
  }

  async findByIdAndUpdate(
    _id: string,
    findByIdAndUpdateCatDto: FindByIdAndUpdateCatDto,
  ): Promise<Cat> {
    const findByIdAndUpdateCat = await this.catModel.findByIdAndUpdate(
      _id,
      findByIdAndUpdateCatDto,
    );
    return findByIdAndUpdateCat;
  }

  async findByIdAndDelete(_id: string): Promise<Cat> {
    const findByIdAndDeleteCat = await this.catModel.findByIdAndDelete(_id);
    return findByIdAndDeleteCat;
  }
}
