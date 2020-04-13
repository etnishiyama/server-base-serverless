'use strict';

import {NotImplementedMethodException} from "../../frameworks/error/http_server_error";

export class SqsClient {

  sqsClient;

  constructor(sqsClient) {
    this.sqsClient = sqsClient;
  }

  send(_message: any): Promise<any> {
    throw new NotImplementedMethodException();
  }

  receive(_count: number): Promise<any> {
    throw new NotImplementedMethodException();
  }

  remove(_message: any): Promise<any> {
    throw new NotImplementedMethodException();
  }
}
