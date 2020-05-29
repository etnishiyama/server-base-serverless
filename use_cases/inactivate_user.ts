import {DynamoRepositoryInterface} from "../app/contracts/dynamo_repository";
import {BaseHttpError} from "../frameworks/error/base_http_error";
import {UnprocessableEntityException} from "../frameworks/error/http_client_error";

/**
 * Inactivate one user from a repository.
 * @param repository repository that users will be retrieved.
 */
export const useCaseInactivateUser = (repository: DynamoRepositoryInterface) => async (id: string) => {
  return repository.inactivateItem(id)
    .catch(error => {
      if (error instanceof BaseHttpError) throw error;
      throw new UnprocessableEntityException();
    });
};
