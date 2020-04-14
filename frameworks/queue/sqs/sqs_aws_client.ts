'use strict';

import {InvalidParamsException} from "../../error/http_client_error";
import {Promise} from 'bluebird';
import {SqsClient} from "../../../app/contracts/sqs_client";

const queueUrl = process.env.SQS_QUEUE_URL;

/**
 * Implementation of the AWS SQS Queue client.
 */
export class SqsAwsClient extends SqsClient {

  constructor(sqsClient) {
    super(sqsClient);
  }

  send(message: any): Promise<any> {
    const params = {
      QueueUrl: queueUrl,
      MessageBody: JSON.stringify(message)
    };

    return this.sqsClient.sendMessage(params).promise();
  }

  receive(count: number = 1): Promise<any> {
    const params = {
      QueueUrl: queueUrl,
      MaxNumberOfMessages: count
    };

    return this.sqsClient.receiveMessage(params).promise();
  }

  remove(message: any): Promise<any> {
    if (message === null || message === undefined) throw new InvalidParamsException(null);

    const params = {
      QueueUrl: queueUrl,
      ReceiptHandle: message.ReceiptHandle
    };

    return this.sqsClient.deleteMessage(params).promise();
  }
}
