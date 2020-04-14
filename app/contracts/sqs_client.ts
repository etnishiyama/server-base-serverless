'use strict';

import {NotImplementedMethodException} from "../../frameworks/error/http_server_error";

/**
 * SQS client contract.
 */
export class SqsClient {

  sqsClient;

  constructor(sqsClient) {
    this.sqsClient = sqsClient;
  }

  /**
   * Send a message to the SQS client.
   * @param _message message to be sent.
   */
  send(_message: any): Promise<any> {
    throw new NotImplementedMethodException();
  }

  /**
   * Get a number of messages from the SQS client.
   * @param _count number of messages that will be retrieved.
   */
  receive(_count: number): Promise<any> {
    throw new NotImplementedMethodException();
  }

  /**
   * Remove messages from the SQS client.
   * @param _message message that will be removed.
   */
  remove(_message: any): Promise<any> {
    throw new NotImplementedMethodException();
  }
}
