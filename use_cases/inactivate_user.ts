import {DynamoRepositoryInterface} from "../app/contracts/dynamo_repository";

/**
 * Inactivate one user from a repository.
 * @param repository repository that users will be retrieved.
 */
export const useCaseInactivateUser = (repository: DynamoRepositoryInterface) => async (id: string) => {
  return repository.inactivateItem(id);
};
