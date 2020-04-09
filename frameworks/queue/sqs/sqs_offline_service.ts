'use strict';

import {QueueService} from "../../../app/contracts/queue_service";
import * as bluebird from 'bluebird';
import * as aws from 'aws-sdk';
import {SqsAwsClient} from "./sqs_aws_client";

const dev = {
  apiVersion: '2012-11-05',
  region: process.env.REGION || null,
  endpoint: process.env.SQS_ADDRESS || null,
  sslEnabled: false,
  accessKeyId: 'MOCK_ACCESS_KEY_ID',
  secretAccessKey: 'MOCK_SECRET_ACCESS_KEY',
}; // TODO: Remove from here.

export class SqsOfflineService extends QueueService {

  constructor() {
    super();
    aws.config.setPromisesDependency(bluebird);
    const sqs = new aws.SQS(dev);
    this.client = new SqsAwsClient(sqs);
  }
}
