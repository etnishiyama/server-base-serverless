'use strict';

import {BaseHttpError} from "../error/base_http_error";

export const response = (body = {}, httpStatus = 200, message = 'Sucesso', errorCode = 0) => {
  return {
    statusCode: httpStatus,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      message: message,
      errorCode: errorCode,
      data: body,
    })
  };
};

export const errorResponse = (error: BaseHttpError) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    statusCode: error.httpStatus,
    body: JSON.stringify({
      message: error.message,
      errorCode: error.errorCode,
      data: error.data,
    })
  };
};