'use strict';

const uuid = require('uuid');
const dynamo = require('../lib/dynamo');
const response = require('../lib/response');

module.exports.postUser = async (event, context, callback) => {
  const body = JSON.parse(event.body);

  if (body === null) {
    console.error('Body is null');
    callback(new Error('Null body'));
  }

  const fullname = body.fullname;
  const email = body.email;

  if (typeof fullname !== 'string' || typeof email !== 'string') {
    console.error('Validation failed');
    callback(new Error('Validation error'));
  }

  const user = buildUser(fullname, email);

  return dynamo.save(user)
    .then(success => {
      response.json(callback, success, 201);
    })
    .catch(err => {
      response.json(callback, err, 500);
    });
};

const buildUser = (fullname, email) => {
  const currentTimestamp = new Date().getTime();

  return {
    id: uuid.v1(),
    fullname: fullname,
    email: email,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp,
  };
};