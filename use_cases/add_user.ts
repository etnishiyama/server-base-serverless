'use strict';

import {validateRequestBody} from "../frameworks/common/validation_helper";
import {buildUser} from "../entities/model/user";
import {UserRepository} from "../app/contracts/user_repository";

export const useCaseAddUser = (repository: UserRepository) => (requestBody) => {
  return validateRequestBody(requestBody)
    .then((body: any) => {
      return buildUser(body);
    })
    .then((user: any) => {
      return repository.add(user);
    })
};
