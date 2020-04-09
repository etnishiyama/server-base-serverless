'use strict';

import {NotImplementedMethodError} from "../../frameworks/error/http_server_error";

export class SqsClient {

  sqsClient;

  constructor(sqsClient) {
    this.sqsClient = sqsClient;
  }

  send(_message: any): Promise<any> {
    throw new NotImplementedMethodError();
  }

  receive(_count: number): Promise<any> {
    throw new NotImplementedMethodError();
  }

  remove(_message: any): Promise<any> {
    throw new NotImplementedMethodError();
  }
}
