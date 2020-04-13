'use strict';

import {UserRepository} from "../app/contracts/user_repository";

export const useCaseGetAllUsers = (repository: UserRepository) => async (pageSize: number, lastIndex: string,
  search: string) => {
  return repository.scan(pageSize, search, lastIndex);
};
