import {DynamoRepositoryInterface} from "../app/contracts/dynamo_repository";

/**
 * Get one user from a repository.
 * @param repository repository that users will be retrieved.
 */
export const useCaseGetOneUser = (repository: DynamoRepositoryInterface) => async (id: string) => {
  return repository.get(id);
};
