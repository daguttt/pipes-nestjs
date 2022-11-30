import * as Joi from 'joi';

export class CreateCatDto {}

export const createCatSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required(),
}).required();
