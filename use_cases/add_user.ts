'use strict';

import {buildUser} from "../entities/model/user";
import {UserRepository} from "../app/contracts/user_repository";
import {Promise} from 'bluebird';
import * as uuid from 'uuid';
import {SqsClient} from "../app/contracts/sqs_client";

/**
 * Use case to add a user to the repository.
 * @param repository repository that the user needs to be saved.
 * @param sqsClient queue that the id of the user will be sent.
 */
export const useCaseAddUser = (repository: UserRepository, sqsClient: SqsClient) => (body): Promise<any> => {
  return buildUser(body)
    .then(user => {
      user.id = uuid.v1();
      return Promise.all([
        repository.add(user),
        sqsClient.send({id: user.id})
      ])
    })
};
