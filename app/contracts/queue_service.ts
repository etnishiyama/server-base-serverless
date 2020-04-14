'use strict';

import {SqsClient} from "./sqs_client";

/**
 * Queue service contract.
 */
export class QueueService {

  client: SqsClient;

  constructor() {
    this.client = null;
  }
}
