import {DatabaseService} from "../../../app/contracts/database_service";
import {DynamoUserRepository} from "./dynamo_user_repository";
import * as aws from 'aws-sdk';
import * as bluebird from 'bluebird';
import config from '../../../config/dynamodb/dynamodb-offline.json';
import {UserRepository} from "../../../app/contracts/user_repository";

/**
 * Implementation of the DynamoDB offline service.
 */
export class DynamoOfflineDatabaseService implements DatabaseService {

  userRepository: UserRepository = null;

  constructor() {
    aws.config.update(config);
    aws.config.setPromisesDependency(bluebird);
    const dynamoClient = new aws.DynamoDB.DocumentClient();
    this.userRepository = new DynamoUserRepository(dynamoClient);
  }
}
