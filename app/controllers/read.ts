'use strict';

import {useCaseGetAllUsers} from "../../use_cases/get_all_users";
import {databaseService, localeService, requestService} from '../../config/project_dependencies';
import {BaseHttpError} from "../../frameworks/error/base_http_error";
import {InternalServerException} from "../../frameworks/error/http_server_error";

const getAllUsers = useCaseGetAllUsers(databaseService.userRepository);

export const getUsers = async (event, _context) => {
  localeService.setLocale(event.headers['Accept-Language']);
  const {pageSize, lastIndex, search} = event.queryStringParameters;

  return getAllUsers(pageSize, lastIndex, search)
    .then(result => requestService.successPaginate(result.items, result.total, result.lastEvaluatedKey))
    .catch(error => {
      if (error instanceof BaseHttpError) return requestService.error(error);
      return requestService.error(new InternalServerException(error));
    });
};
