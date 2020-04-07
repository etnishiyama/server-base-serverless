'use strict';

import {response} from '../frameworks/common/response';
import {useCaseGetAllUsers} from "../use_cases/get_all_users";
import {databaseService, localeService} from '../config/project_dependencies';

const getAllUsers = useCaseGetAllUsers(databaseService.userRepository);

export const getUsers = async (event, _context) => {
  localeService.setLocale(event.headers['Accept-Language']);

  return getAllUsers()
    .then(docs => {
      return response(docs.Items);
    }).catch(err => {
      return response(err, 500);
    });
};