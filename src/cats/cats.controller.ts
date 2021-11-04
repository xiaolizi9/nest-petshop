import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { FindByIdAndUpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return await this.catsService.create(createCatDto);
  }

  @Get()
  async find(): Promise<Cat[]> {
    return await this.catsService.find();
  }

  @Get(':_id')
  async findById(@Param('_id') _id: string) {
    return await this.catsService.findById(_id);
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: string,
    @Body() findByIdAndUpdateCatDto: FindByIdAndUpdateCatDto,
  ) {
    return await this.catsService.findByIdAndUpdate(
      _id,
      findByIdAndUpdateCatDto,
    );
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: string) {
    return await this.catsService.findByIdAndDelete(_id);
  }
}
