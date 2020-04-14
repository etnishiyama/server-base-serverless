'use strict';

import {UserRepository} from "../app/contracts/user_repository";

/**
 * Inactivate one user from a repository.
 * @param repository repository that users will be retrieved.
 */
export const useCaseInactivateUser = (repository: UserRepository) => async (id: string) => {
  return repository.inactivateUser(id);
};