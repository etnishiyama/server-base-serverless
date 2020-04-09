'use strict';

import {validateRequestBody} from "../frameworks/common/validation_helper";
import {buildUser} from "../entities/model/user";
import {UserRepository} from "../app/contracts/user_repository";
import {Promise} from 'bluebird';
import * as uuid from 'uuid';
import {SqsClient} from "../app/contracts/sqs_client";

export const useCaseAddUser = (repository: UserRepository, sqsClient: SqsClient) => (requestBody): Promise<any> => {
  return validateRequestBody(requestBody)
    .then(body => buildUser(body))
    .then(user => {
      user.id = uuid.v1();
      return Promise.all([
        repository.add(user),
        sqsClient.send({id: user.id})
      ])
    })
};
