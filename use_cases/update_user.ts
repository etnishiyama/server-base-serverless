'use strict';

import {UserRepository} from "../app/contracts/user_repository";
import {buildUser} from "../entities/model/user";

/**
 * Inactivate one user from a repository.
 * @param repository repository that users will be retrieved.
 */
export const useCaseUpdateUser = (repository: UserRepository) => async (id: string, body: any) => {
  return buildUser(body)
    .then(user => repository.updateItem(id, user))
};
