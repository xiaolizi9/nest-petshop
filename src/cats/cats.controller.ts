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
    return this.catsService.find();
  }

  @Get(':_id')
  findById(@Param('_id') _id: string) {
    return this.catsService.findById(_id);
  }

  @Patch(':_id')
  findByIdAndUpdate(
    @Param('_id') _id: string,
    @Body() findByIdAndUpdateCatDto: FindByIdAndUpdateCatDto,
  ) {
    return this.catsService.findByIdAndUpdate(_id, findByIdAndUpdateCatDto);
  }

  @Delete(':_id')
  findByIdAndDelete(@Param('_id') _id: string) {
    return this.catsService.findByIdAndDelete(_id);
  }
}
