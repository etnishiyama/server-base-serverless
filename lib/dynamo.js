'use strict';

const AWS = require('aws-sdk');
const bluebird = require('bluebird');

const local = {
  region: 'localhost',
  endpoint: "http://localhost:8000",
  accessKeyId: 'MOCK_ACCESS_KEY_ID',
  secretAccessKey: 'MOCK_SECRET_ACCESS_KEY',
  convertEmptyValues: true
};

const prod = {region: process.env.REGION};
const config = process.env.ENV === 'dev' ? local : prod;

AWS.config.update(config);
AWS.config.setPromisesDependency(bluebird);

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const tableUser = process.env.TABLE_USER;

const client = {

  /**
   * Save item to Dynamo DB.
   */
  save: (item, table = tableUser) => {
    const params = {
      TableName: table,
      Item: item
    };

    return dynamoClient.put(params).promise();
  },

  /**
   * Find one row by it`s id.
   */
  find: (where, table = tableUser) => {
    const params = {
      TableName: table,
      Key: where
    };

    return dynamoClient.get(params).promise();
  },

  /**
   * Execute a Raw Select Query on DynamoTable. Must inform the KeyConditionExpression and ExpressionAttributeNames.
   */
  query: (where, table = tableUser) => {
    where.TableName = table;
    return dynamoClient.query(where).promise();
  },

  /**
   * Execute a DynamoDB Scan.
   */
  scan: (params, limit, table = tableUser) => {
    params.TableName = table;

    return dynamoClient.scan(params).promise();
  },

  /**
   * Update expression based on id.
   */
  update: (key, expression, values, table = tableUser) => {
    const params = {
      TableName: table,
      Key: key,
      UpdateExpression: expression,
      ExpressionAttributeValues: values,
      ReturnValues: "UPDATED_NEW"
    };

    return dynamoClient.update(params).promise();
  },

  /**
   * Update item identified by id.
   */
  updateItem: (key, attributes, table = tableUser) => {
    const params = {
      TableName: table,
      Key: key,
      ReturnValues: "ALL_NEW",
      AttributeUpdates: attributes
    };

    return dynamoClient.update(params).promise();
  },

  /**
   * Remove a row from DynamoDB based on id.
   */
  removeRow: (key, table = tableUser) => {
    const params = {
      TableName: table,
      Key: key,
      ReturnValues: "ALL_OLD"
    };

    return dynamoClient.delete(params).promise();
  }
};

module.exports = client;