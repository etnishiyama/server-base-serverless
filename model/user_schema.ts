'use strict';

import joi from 'joi';

export const userSchema = joi.object().keys({
  fullname: joi.string().min(3).max(30).required(),
  email: joi.string().email().min(5).max(200).required(),
});
