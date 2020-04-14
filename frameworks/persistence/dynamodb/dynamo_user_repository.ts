import {UserRepository} from "../../../app/contracts/user_repository";
import {dynamoDocumentBuilder} from "./dynamo_document_builder";
import {User} from "../../../entities/model/user_model";

const tableUser = process.env.TABLE_USER;

/**
 * Implementation of the DynamoDB user repository.
 */
export class DynamoUserRepository implements UserRepository {

  databaseClient: any = null;

  constructor(databaseClient) {
    this.databaseClient = databaseClient;
  }

  add(user: User) {
    const doc = dynamoDocumentBuilder(user);
    const params = {
      TableName: tableUser,
      Item: doc
    };

    return this.databaseClient.put(params).promise();
  }

  get(id) {
    const params = {
      TableName: tableUser,
      Key: {id: id}
    };

    return this.databaseClient.get(params).promise();
  }

  async scan(pageSize, search, lastIndex) {
    const params: any = {};
    params.TableName = tableUser;
    params.Limit = process.env.PAGINATION_DEFAULT_SIZE;

    if (search) {
      params.FilterExpression = 'attribute_not_exists(deletedAt) and (contains(#fullName, :search) or contains(#email, :search))';
      params.ExpressionAttributeValues = {':search': search};
      params.ExpressionAttributeNames = {
        '#fullName': 'fullName',
        '#email': 'email'
      };
    }

    return Promise.resolve(this.paginate(params, pageSize, lastIndex));
  }

  updateItem(key, item) {
    const updateParams = this.buildDynamoUpdateExpression(item);
    const params = {
      TableName: tableUser,
      Key: {id: key},
      ReturnValues: "ALL_NEW",
      UpdateExpression: updateParams.UpdateExpression,
      ExpressionAttributeValues: updateParams.ExpressionAttributeValues,
    };

    return this.databaseClient.update(params).promise();
  }

  removeItem(id) {
    const params = {
      TableName: tableUser,
      Key: {id: id},
      ReturnValues: "ALL_OLD"
    };

    return this.databaseClient.delete(params).promise();
  }

  inactivateUser(key: string) {
    const currentTimestamp = new Date().getTime();
    const newUser = {
      deletedAt: currentTimestamp
    };

    return this.updateItem(key, newUser);
  }

  buildDynamoUpdateExpression(modifiedItem): any {
    let updateExpression = "";
    const attributeValues = {};

    for (const [key, value] of Object.entries(modifiedItem)) {
      if (updateExpression === "") {
        updateExpression = 'set ';
      } else {
        updateExpression = updateExpression + ', ';
      }

      updateExpression = updateExpression + key + ' = :' + key;
      attributeValues[':' + key] = value;
    }

    updateExpression = updateExpression + ', updatedAt = :updatedAt';
    attributeValues[':updatedAt'] = new Date().getTime();

    return {
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: attributeValues
    }
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
