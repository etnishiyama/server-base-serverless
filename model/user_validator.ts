'use strict';

import {InvalidParamsError} from "../helper/error/http_client_error";
import joi from 'joi';

export const userValidator = (schema) => (body) => {
  const result = joi.validate(body, schema, {abortEarly: false});
  if (result.error) throw new InvalidParamsError(result.error.details);
  return true;
};
