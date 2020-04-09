'use strict';

import {UserRepository} from "../../../app/contracts/user_repository";
import {dynamoDocumentBuilder} from "./dynamo_document_builder";
import {User} from "../../../entities/model/user_model";

const tableUser = process.env.TABLE_USER;

export class DynamoUserRepository extends UserRepository {

  constructor(databaseClient) {
    super(databaseClient);
  }

  // Add new user document.
  add(user: User) {
    const doc = dynamoDocumentBuilder(user);
    const params = {
      TableName: tableUser,
      Item: doc
    };

    return this.databaseClient.put(params).promise();
  }

  // Find one row by it`s id.
  find(where) {
    const params = {
      TableName: tableUser,
      Key: where
    };

    return this.databaseClient.get(params).promise();
  }

  // Execute a Raw Select Query on DynamoTable. Must inform the KeyConditionExpression and ExpressionAttributeNames.
  query(where) {
    where.TableName = tableUser;
    return this.databaseClient.query(where).promise();
  }

  // Execute a DynamoDB Scan.
  scan(params, _limit) {
    params.TableName = tableUser;
    return this.databaseClient.scan(params).promise();
  }

  // Update expression based on id.
  update(key, expression, values) {
    const params = {
      TableName: tableUser,
      Key: key,
      UpdateExpression: expression,
      ExpressionAttributeValues: values,
      ReturnValues: "UPDATED_NEW"
    };

    return this.databaseClient.update(params).promise();
  };

  // Update item identified by id.
  updateItem(key, attributes) {
    const params = {
      TableName: tableUser,
      Key: key,
      ReturnValues: "ALL_NEW",
      AttributeUpdates: attributes
    };

    return this.databaseClient.update(params).promise();
  }

  // Remove a row from DynamoDB based on id.
  removeItem(key) {
    const params = {
      TableName: tableUser,
      Key: key,
      ReturnValues: "ALL_OLD"
    };

    return this.databaseClient.delete(params).promise();
  }
}
