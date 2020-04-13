'use strict';

import {userValidator} from "./user_validator";
import {userSchema} from "./user_schema";
import {User} from "./user_model";
import {InvalidParamsException} from "../../frameworks/error/http_client_error";
import {Promise} from 'bluebird';

const validator = userValidator(userSchema);

export const buildUser = ({fullName, email}): Promise<User> => {
  return new Promise((resolve, reject) => {
    if (validator({fullName, email})) {
      resolve(new User(fullName, email));
    }
    reject(new InvalidParamsException(null));
  })
};
