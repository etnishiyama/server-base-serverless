'use strict';

import {validateRequestBody} from "../frameworks/common/validation_helper";
import {buildUser} from "../entities/model/user";
import {UserRepository} from "../app/contracts/user_repository";
import {QueueService} from "../app/contracts/queue_service";
import {Promise} from 'bluebird';
import * as uuid from 'uuid';

export const useCaseAddUser = (repository: UserRepository, queueService: QueueService) => (requestBody): Promise<any> => {
  return validateRequestBody(requestBody)
    .then(body => buildUser(body))
    .then(user => {
      user.id = uuid.v1();
      return Promise.all([
        repository.add(user),
        queueService.send({id: user.id})
      ])
    })
};
