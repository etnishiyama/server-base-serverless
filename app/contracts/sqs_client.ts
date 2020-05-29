/**
 * SQS client contract.
 */
export interface SqsClientInterface {

  sqsClient: any;

  /**
   * Send a message to the SQS client.
   * @param _message message to be sent.
   */
  send(_message: any): Promise<any>;

  /**
   * Get a number of messages from the SQS client.
   * @param _count number of messages that will be retrieved.
   */
  receive(_count: number): Promise<any>;

  /**
   * Remove messages from the SQS client.
   * @param _message message that will be removed.
   */
  remove(_message: any): Promise<any>;
}
