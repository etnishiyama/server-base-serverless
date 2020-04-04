'use strict';

import {InvalidParamsError} from "../helper/error/http_client_error";

export const buildUser = (validator) => ({fullName, email}) => {
  return new Promise((resolve, reject) => {
    if (validator({fullName, email})) {
      resolve({
        fullName: fullName,
        email: email
      })
    }
    reject(new InvalidParamsError(null));
  })
};
