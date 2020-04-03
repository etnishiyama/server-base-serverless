'use strict';

import {errorResponse} from "../lib/response";
import {InvalidJsonError, InvalidParamsError, NullBodyError} from "./error/http_client_error";
import joi from 'joi';

export const validateRequestBody = (body: string, schema) => {

  return new Promise((resolve, reject) => {
    try {
      body = JSON.parse(body);
    } catch {
      reject(errorResponse(null, new InvalidJsonError()));
    }
    console.log('there is an error here1');

    if (body === null) {
      reject(errorResponse({}, new NullBodyError));
    }
    console.log('there is an error here2');

    const result = joi.validate(body, schema);
    if (result.error) reject(errorResponse(result.error.details, new InvalidParamsError));

    console.log('there is an error here3');
    resolve(result.value);
  })
};
