'use strict';

import {BaseHttpError} from "../frameworks/error/base_http_error";
import {databaseService, localeService, queueService, responseService} from '../config/project_dependencies';
import {useCaseAddUser} from "../use_cases/add_user";
import {InternalServerError} from "../frameworks/error/http_server_error";

const addUser = useCaseAddUser(databaseService.userRepository, queueService.client);

export const postUser = async (event, _context) => {
  localeService.setLocale(event.headers['Accept-Language']);

  return addUser(event.body)
    .then(() => responseService.success({}, 201))
    .catch(error => {
      if (error instanceof BaseHttpError) return responseService.error(error);
      return responseService.error(new InternalServerError());
    });
};
