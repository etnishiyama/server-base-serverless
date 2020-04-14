import {QueueService} from "../../../app/contracts/queue_service";
import * as bluebird from 'bluebird';
import * as aws from 'aws-sdk';
import {SqsAwsClient} from "./sqs_aws_client";
import {SqsClient} from "../../../app/contracts/sqs_client";

/**
 * Implementation of the AWS SQS Queue client.
 */
export class SqsService implements QueueService {

  client: SqsClient = null;

  constructor() {
    aws.config.setPromisesDependency(bluebird);
    const sqs = new aws.SQS;
    this.client = new SqsAwsClient(sqs);
  }
}
