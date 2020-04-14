'use strict';

import {UserRepository} from "../app/contracts/user_repository";

/**
 * Get one user from a repository.
 * @param repository repository that users will be retrieved.
 */
export const useCaseGetOneUser = (repository: UserRepository) => async (id: string) => {
  return repository.get(id);
};
