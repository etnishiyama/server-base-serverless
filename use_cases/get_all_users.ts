import {UserRepository} from "../app/contracts/user_repository";

/**
 * Get users from a repository.
 * @param repository repository that users will be retrieved.
 */
export const useCaseGetAllUsers = (repository: UserRepository) => async (pageSize: number, lastIndex: string,
  search: string) => {
  return repository.scan(pageSize, search, lastIndex);
};
