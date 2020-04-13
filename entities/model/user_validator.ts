'use strict';

import {InvalidParamsException} from "../../frameworks/error/http_client_error";
import joi from 'joi';

export const userValidator = (schema) => (body) => {
  const result = joi.validate(body, schema, {abortEarly: false});
  if (result.error) throw new InvalidParamsException(result.error.details);
  return true;
};
