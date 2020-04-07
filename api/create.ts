'use strict';

import * as uuid from 'uuid';
import * as dynamo from '../lib/dynamo';
import {errorResponse, response} from '../lib/response';
import i18n from '../provider/locale_provider'
import {validateRequestBody} from "../helper/validation_helper";
import {BaseHttpError} from "../helper/error/base_http_error";
import {makeUser} from "../model/user";

export const postUser = async (event, _context) => {
  i18n.setLocale(event.headers['Accept-Language']);

  return validateRequestBody(event.body)
    .then((body: any) => {
      return makeUser(body);
    })
    .then((user: any) => {
      return dynamo.save(buildUser(user));
    })
    .then(success => {
      return response(success, 201);
    })
    .catch(error => {
      if (error instanceof BaseHttpError) return errorResponse(error);
      return response({}, 500);
    });
};

const buildUser = ({fullName, email}) => {
  const currentTimestamp = new Date().getTime();

  return {
    id: uuid.v1(),
    fullName: fullName,
    email: email,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp,
  };
};