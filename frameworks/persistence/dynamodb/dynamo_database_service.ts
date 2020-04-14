'use strict';

import {DatabaseService} from "../../../app/contracts/database_service";
import {DynamoUserRepository} from "./dynamo_user_repository";
import * as aws from 'aws-sdk';
import * as bluebird from 'bluebird';

/**
 * Implementation of the DynamoDB service.
 */
export class DynamoDatabaseService extends DatabaseService {
  constructor() {
    super();
    aws.config.setPromisesDependency(bluebird);
    const dynamoClient = new aws.DynamoDB.DocumentClient();
    this.userRepository = new DynamoUserRepository(dynamoClient);
  }
}
