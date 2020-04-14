'use strict';

import {UserRepository} from "../../../app/contracts/user_repository";
import {dynamoDocumentBuilder} from "./dynamo_document_builder";
import {User} from "../../../entities/model/user_model";

const tableUser = process.env.TABLE_USER;

/**
 * Implementation of the DynamoDB user repository.
 */
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
  async scan(pageSize, search, lastIndex) {
    const params: any = {};
    params.TableName = tableUser;
    params.Limit = process.env.PAGINATION_DEFAULT_SIZE;

    if (search) {
      params.FilterExpression = 'contains(#fullName, :search) or contains(#email, :search)';
      params.ExpressionAttributeValues = {':search': search};
      params.ExpressionAttributeNames = {
        '#fullName': 'fullName',
        '#email': 'email'
      };
    }

    return Promise.resolve(this.paginate(params, pageSize, lastIndex));
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
  }

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

  /**
   * DynamoDB pagination.
   * @param params dynamodb query params.
   * @param pageSize nmax umber of items to be returned.
   * @param lastIndex id to start database scan.
   */
  async paginate(params, pageSize, lastIndex) {
    let results: any = [];

    while (results.length < pageSize) {
      if (lastIndex) params.ExclusiveStartKey = {id: lastIndex};
      const docs: any = await this.databaseClient.scan(params).promise();
      results = results.concat(docs.Items.slice(0, pageSize - results.length));
      if (!docs.LastEvaluatedKey) break;
      lastIndex = docs.LastEvaluatedKey.id;
    }

    return {
      lastEvaluatedKey: results.length > 0 ? results[results.length - 1].id : null,
      items: results,
      total: results.length
    };
  }
}
