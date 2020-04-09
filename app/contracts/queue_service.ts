'use strict';

import {SqsClient} from "./sqs_client";

export class QueueService {

  client: SqsClient;

  constructor() {
    this.client = null;
  }
}
