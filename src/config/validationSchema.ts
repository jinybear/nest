import * as Joi from 'joi';

export const validationSchema = Joi.object({
  DB_IP: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
});
