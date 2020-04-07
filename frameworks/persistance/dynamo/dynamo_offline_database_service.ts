'use strict';

import {DatabaseService} from "../../../app/contracts/database_service";
import {DynamoUserRepository} from "./dynamo_user_repository";
import * as aws from 'aws-sdk';
import * as bluebird from 'bluebird';

const config = {
  region: 'localhost',
  endpoint: "http://localhost:8000",
  accessKeyId: 'MOCK_ACCESS_KEY_ID',
  secretAccessKey: 'MOCK_SECRET_ACCESS_KEY',
  convertEmptyValues: true
}; // TODO: Remove from here

export class DynamoOfflineDatabaseService extends DatabaseService {

  constructor() {
    super();
    aws.config.update(config);
    aws.config.setPromisesDependency(bluebird);
    const dynamoClient = new aws.DynamoDB.DocumentClient();
    this.userRepository = new DynamoUserRepository(dynamoClient);
  }

  initDatabase() {
    // Do nothing
  }
}
