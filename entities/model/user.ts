'use strict';

import {userValidator} from "./user_validator";
import {userSchema} from "./user_schema";
import {User} from "./user_model";
import {InvalidParamsException} from "../../frameworks/error/http_client_error";
import {Promise} from 'bluebird';

const validator = userValidator(userSchema);

/**
 * User builder, validate and build a {@link User} object.
 * @param fullName the full name of the user.
 * @param email the email of the user.
 */
export const buildUser = ({fullName, email}): Promise<User> => {
  return new Promise((resolve, reject) => {
    if (validator({fullName, email})) {
      resolve(new User(fullName, email));
    }
    reject(new InvalidParamsException(null));
  })
};
