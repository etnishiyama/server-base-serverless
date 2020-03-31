'use strict';

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