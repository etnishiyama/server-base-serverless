'use strict';

import {useCaseGetAllUsers} from "../use_cases/get_all_users";
import {databaseService, localeService, responseService} from '../config/project_dependencies';
import {BaseHttpError} from "../frameworks/error/base_http_error";
import {InternalServerError} from "../frameworks/error/http_server_error";

const getAllUsers = useCaseGetAllUsers(databaseService.userRepository);

export const getUsers = async (event, _context) => {
  localeService.setLocale(event.headers['Accept-Language']);

  return getAllUsers()
    .then(docs => responseService.success(docs.Items))
    .catch(error => {
      if (error instanceof BaseHttpError) return responseService.error(error);
      return responseService.error(new InternalServerError());
    });
};
