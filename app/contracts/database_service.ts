import {DynamoRepositoryInterface} from "./dynamo_repository";

/**
 * Database service contract.
 */
export interface DatabaseServiceInterface {
  repository: DynamoRepositoryInterface;
}
