import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateCatDto, createCatSchema } from './dto/create-cat.dto';
import { JoiValidationPipe } from './pipes/joi-validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post('validated-by-joi')
  createValidatedByJoi(
    @Body('test', new JoiValidationPipe(createCatSchema))
    createCatDto: CreateCatDto,
  ) {
    return createCatDto;
  }
}
