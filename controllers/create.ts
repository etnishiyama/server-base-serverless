'use strict';

import {errorResponse, response} from '../frameworks/common/response';
import {BaseHttpError} from "../frameworks/error/base_http_error";
import {databaseService, localeService, queueService} from '../config/project_dependencies';
import {useCaseAddUser} from "../use_cases/add_user";

const addUser = useCaseAddUser(databaseService.userRepository, queueService);

export const postUser = async (event, _context) => {
  localeService.setLocale(event.headers['Accept-Language']);

  return addUser(event.body)
    .then(() => response({}, 201))
    .catch(error => {
      if (error instanceof BaseHttpError) return errorResponse(error);
      return response({}, 500);
    });
};
