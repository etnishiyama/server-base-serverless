'use strict';

import * as uuid from 'uuid';
import * as dynamo from '../lib/dynamo';
import {response} from '../lib/response';
import i18n from '../provider/locale_provider'
import {userSchema} from "../model/user_schema";
import {validateRequestBody} from "../helper/validation_helper";

export const postUser = async (event, _context) => {
  i18n.setLocale(event.headers['Accept-Language']);

  return validateRequestBody(event.body, userSchema)
    .then(body => {
      const user = buildUser(body.fullname, body.email);
      return dynamo.save(user);
    })
    .then(success => {
      return response(success, 201);
    })
    .catch(err => {
      if (err.headers)
        return err;
      return response({}, 500);
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