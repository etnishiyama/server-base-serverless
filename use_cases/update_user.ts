import {DynamoRepositoryInterface} from "../app/contracts/dynamo_repository";
import {makeUser} from "../entities/model/user";

/**
 * Inactivate one user from a repository.
 * @param repository repository that users will be retrieved.
 */
export const useCaseUpdateUser = (repository: DynamoRepositoryInterface) => async (id: string, body: any) => {
  return makeUser(body)
    .then(user => repository.updateItem(id, user))
};
