import { Controller, Post, Body } from '@nestjs/common';
import { CreateCatDto, createCatSchema } from './dto/create-cat.dto';
import { JoiValidationPipe } from './pipes/joi-validation.pipe';

@Controller('cats')
export class CatsController {
  constructor() {}

  @Post('validated-by-joi')
  createValidatedByJoi(
    @Body('test', new JoiValidationPipe(createCatSchema))
    createCatDto: CreateCatDto,
  ) {
    return createCatDto;
  }
}
