import {SqsClientInterface} from "./sqs_client";

/**
 * Queue service contract.
 */
export interface QueueServiceInterface {

  client: SqsClientInterface;
}
