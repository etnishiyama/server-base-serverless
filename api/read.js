'use strict';

const dynamo = require('../lib/dynamo');
const response = require('../lib/response');

module.exports.getUsers = async (event, context, callback) => {

  return dynamo.scan({}, null)
    .then(docs => {
      response.json(callback, docs.Items);
    }).catch(err => {
      response.json(callback, err, 500);
    });
};