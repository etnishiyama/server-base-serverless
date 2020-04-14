import joi from 'joi';

/**
 * User validation schema.
 */
export const userSchema = joi.object().keys({
  fullName: joi.string().min(3).max(30).required(),
  email: joi.string().email().min(5).max(200).required(),
});
