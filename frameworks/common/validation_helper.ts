'use strict';

import {InvalidJsonError, NullBodyError} from "../error/http_client_error";

export const validateRequestBody = (body: string) => {

  return new Promise((resolve) => {
    try {
      body = JSON.parse(body);
    } catch {
      throw new InvalidJsonError();
    }

    if (body === null) {
      throw new NullBodyError;
    }

    resolve(body);
  })
};
