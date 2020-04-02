'use strict';

import * as uuid from 'uuid';
import * as dynamo from '../lib/dynamo';
import {errorResponse, response} from '../lib/response';
import {InvalidParamsError, NullBodyError} from "../helper/error/http_client_error";

export const postUser = async (event, _context) => {
  const body = JSON.parse(event.body);

  if (body === null) {
    console.error('Body is null');
    return errorResponse({}, new NullBodyError);
  }
  const fullname = body.fullname;
  const email = body.email;

  if (typeof fullname !== 'string' || typeof email !== 'string') {
    console.error('Validation failed');
    return errorResponse({}, new InvalidParamsError);
  }

  const user = buildUser(fullname, email);

  return dynamo.save(user)
    .then(success => {
      return response(success, 201);
    })
    .catch(err => {
      return response(err, 500);
    });
};

const buildUser = (fullname, email) => {
  const currentTimestamp = new Date().getTime();

  return {
    id: uuid.v1(),
    fullname: fullname,
    email: email,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp,
  };
};