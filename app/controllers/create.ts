'use strict';

import {BaseHttpError} from "../../frameworks/error/base_http_error";
import {databaseService, localeService, queueService, requestService} from '../../config/project_dependencies';
import {useCaseAddUser} from "../../use_cases/add_user";
import {InternalServerException} from "../../frameworks/error/http_server_error";

const addUser = useCaseAddUser(databaseService.userRepository, queueService.client);

export const postUser = async (event, _context): Promise<any> => {
  localeService.setLocale(event.headers['Accept-Language']);

  return requestService.validateBody(event.body)
    .then(body => addUser(body))
    .then(() => requestService.success({}, 201))
    .catch(error => {
      if (error instanceof BaseHttpError) return requestService.error(error);
      return requestService.error(new InternalServerException());
    });
};
