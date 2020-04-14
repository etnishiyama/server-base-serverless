import {DatabaseService} from "../../../app/contracts/database_service";
import {DynamoUserRepository} from "./dynamo_user_repository";
import * as aws from 'aws-sdk';
import * as bluebird from 'bluebird';
import config from '../../../config/dynamodb/dynamodb-offline.json';

/**
 * Implementation of the DynamoDB offline service.
 */
export class DynamoOfflineDatabaseService extends DatabaseService {
  constructor() {
    super();
    aws.config.update(config);
    aws.config.setPromisesDependency(bluebird);
    const dynamoClient = new aws.DynamoDB.DocumentClient();
    this.userRepository = new DynamoUserRepository(dynamoClient);
  }
}
