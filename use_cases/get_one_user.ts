import {DynamoRepositoryInterface} from "../app/contracts/dynamo_repository";
import {DeletedEntityException, UnprocessableEntityException} from "../frameworks/error/http_client_error";
import {Promise} from 'bluebird';

/**
 * Get one user from a repository.
 * @param repository repository that users will be retrieved.
 */
export const useCaseGetOneUser = (repository: DynamoRepositoryInterface) => async (id: string) => {
  return repository.get(id)
    .then(result => {
      if (!result || !Object.prototype.hasOwnProperty.call(result, "Item")) {
        throw new UnprocessableEntityException();
      }

      if (Object.prototype.hasOwnProperty.call(result.Item, "deletedAt")) {
        throw new DeletedEntityException();
      }

      return Promise.resolve(result);
    });
};
