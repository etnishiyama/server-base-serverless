import {DynamoRepositoryInterface} from "../app/contracts/dynamo_repository";

/**
 * Get users from a repository.
 * @param repository repository that users will be retrieved.
 */
export const useCaseGetAllUsers = (repository: DynamoRepositoryInterface) => async (pageSize: number, lastIndex: string,
  search: string) => {
  return repository.scan(pageSize, search, lastIndex);
};
