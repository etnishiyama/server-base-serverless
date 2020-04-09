'use strict';

import {QueueService} from "../../../app/contracts/queue_service";
import {InvalidParamsError} from "../../error/http_client_error";
import * as bluebird from 'bluebird';
import {Promise} from 'bluebird';
import * as aws from 'aws-sdk';

aws.config.setPromisesDependency(bluebird);

const queueUrl = process.env.SQS_QUEUE_URL;
const sqs = new aws.SQS;

export class SqsService extends QueueService {

  constructor() {
    super();
  }

  send(message: any): Promise<any> {
    const params = {
      QueueUrl: queueUrl,
      MessageBody: JSON.stringify(message)
    };

    return sqs.sendMessage(params).promise();
  }

  receive(count: number = 1): Promise<any> {
    const params = {
      QueueUrl: queueUrl,
      MaxNumberOfMessages: count
    };

    return sqs.receiveMessage(params).promise();
  }

  remove(message: any): Promise<any> {
    if (message === null || message === undefined) throw new InvalidParamsError(null);

    const params = {
      QueueUrl: queueUrl,
      ReceiptHandle: message.ReceiptHandle
    };

    return sqs.deleteMessage(params).promise();
  }
}
