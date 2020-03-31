'use strict';

import * as aws from 'aws-sdk';
import * as bluebird from 'bluebird';

const local = {
    region: 'localhost',
    endpoint: "http://localhost:8000",
    accessKeyId: 'MOCK_ACCESS_KEY_ID',
    secretAccessKey: 'MOCK_SECRET_ACCESS_KEY',
    convertEmptyValues: true
};

const prod = {region: process.env.REGION};
const config2 = process.env.USE_OFFLINE_DB === 'true' ? local : prod;
aws.config.update(config2);
aws.config.setPromisesDependency(bluebird);
const dynamoClient = new aws.DynamoDB.DocumentClient();
const tableUser = process.env.TABLE_USER;

/**
 * Save item to Dynamo DB.
 */
export const save = (item, table = tableUser) => {
    const params = {
        TableName: table,
        Item: item
    };

    return dynamoClient.put(params).promise();
};

/**
 * Find one row by it`s id.
 */
export const find = (where, table = tableUser) => {
    const params = {
        TableName: table,
        Key: where
    };

    return dynamoClient.get(params).promise();
};

/**
 * Execute a Raw Select Query on DynamoTable. Must inform the KeyConditionExpression and ExpressionAttributeNames.
 */
export const query = (where, table = tableUser) => {
    where.TableName = table;
    return dynamoClient.query(where).promise();
};

/**
 * Execute a DynamoDB Scan.
 */
export const scan = (params, _limit, table = tableUser) => {
    params.TableName = table;

    return dynamoClient.scan(params).promise();
};

/**
 * Update expression based on id.
 */
export const update = (key, expression, values, table = tableUser) => {
    const params = {
        TableName: table,
        Key: key,
        UpdateExpression: expression,
        ExpressionAttributeValues: values,
        ReturnValues: "UPDATED_NEW"
    };

    return dynamoClient.update(params).promise();
};

/**
 * Update item identified by id.
 */
export const updateItem = (key, attributes, table = tableUser) => {
    const params = {
        TableName: table,
        Key: key,
        ReturnValues: "ALL_NEW",
        AttributeUpdates: attributes
    };

    return dynamoClient.update(params).promise();
};

/**
 * Remove a row from DynamoDB based on id.
 */
export const removeItem = (key, table = tableUser) => {
    const params = {
        TableName: table,
        Key: key,
        ReturnValues: "ALL_OLD"
    };

    return dynamoClient.delete(params).promise();
};