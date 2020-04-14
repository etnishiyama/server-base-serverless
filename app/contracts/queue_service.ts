import {SqsClient} from "./sqs_client";

/**
 * Queue service contract.
 */
export interface QueueService {

  client: SqsClient;
}
