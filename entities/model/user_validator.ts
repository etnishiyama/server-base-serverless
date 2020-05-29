import {InvalidParamsException} from "../../frameworks/error/http_client_error";
import joi from 'joi';
import {User} from "./user_model";

/**
 * User validator.
 * @param schema validation schema.
 */
export const userValidator = (schema) => (user: User): boolean => {
  const result = joi.validate(user, schema, {abortEarly: false});
  if (result.error) throw new InvalidParamsException(result.error);
  return true;
};
