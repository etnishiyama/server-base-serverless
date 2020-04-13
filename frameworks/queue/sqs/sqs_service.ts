'use strict';

import {QueueService} from "../../../app/contracts/queue_service";
import * as bluebird from 'bluebird';
import * as aws from 'aws-sdk';
import {SqsAwsClient} from "./sqs_aws_client";

export class SqsService extends QueueService {
  constructor() {
    super();
    aws.config.setPromisesDependency(bluebird);
    const sqs = new aws.SQS;
    this.client = new SqsAwsClient(sqs);
  }
}
