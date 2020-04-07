'use strict';

import {UserRepository} from "../app/contracts/user_repository";

export const useCaseGetAllUsers = (repository: UserRepository) => () => {
  return repository.scan({}, null);
};
