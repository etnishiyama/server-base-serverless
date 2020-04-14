import {DatabaseService} from "../../../app/contracts/database_service";
import {DynamoUserRepository} from "./dynamo_user_repository";
import * as aws from 'aws-sdk';
import * as bluebird from 'bluebird';
import {UserRepository} from "../../../app/contracts/user_repository";

/**
 * Implementation of the DynamoDB service.
 */
export class DynamoDatabaseService implements DatabaseService {

  userRepository: UserRepository = null;

  constructor() {
    aws.config.setPromisesDependency(bluebird);
    const dynamoClient = new aws.DynamoDB.DocumentClient();
    this.userRepository = new DynamoUserRepository(dynamoClient);
  }
}
