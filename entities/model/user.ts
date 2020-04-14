import {userValidator} from "./user_validator";
import {userSchema} from "./user_schema";
import {User} from "./user_model";
import {InvalidParamsException} from "../../frameworks/error/http_client_error";
import {Promise} from 'bluebird';

const validator = userValidator(userSchema);

/**
 * User builder, validate and build a {@link User} object.
 * @param user {@link User} object.
 */
export const makeUser = (user: User): Promise<User> => {
  return new Promise((resolve, reject) => {
    if (validator(user)) {
      resolve(user);
    }
    reject(new InvalidParamsException(null));
  })
};
