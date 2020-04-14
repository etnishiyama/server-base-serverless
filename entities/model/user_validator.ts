'use strict';

import {InvalidParamsException} from "../../frameworks/error/http_client_error";
import joi from 'joi';

/**
 * User validator.
 * @param schema validation schema.
 */
export const userValidator = (schema) => (body): boolean => {
  const result = joi.validate(body, schema, {abortEarly: false});
  if (result.error) throw new InvalidParamsException(result.error.details);
  return true;
};
