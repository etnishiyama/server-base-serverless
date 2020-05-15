# Serverless base RESTful API
Base serverless RESTful API structure following clean architecture patterns. Technologies used:
  - Serverless framework with AWS Cloud Platform;
  - Node.js;
  - Typescript;
  - DynamoDB;
  - SQS;
  - Internationalization;

## Pre-requisites
To get the project up and running you will need:
 - Aws account;
 - Docker;
 - Node.js and npm;
 - Aws IAM user credentials with all necessary permissions;
 - aws-sdk installed and configured with credentials;
 - Serverless framework installed and configured;
 - Java SDK for the SQS offline service;

## Install dependencies and run
 - $ npm install
 - $ sls create_domain (if necessary, also create a certificate for the custom domain)
 - $ sls dynamodb install
 - $ ./start_local_services.sh
 - $ npm start
 
 ## Additional
 Medium post: https://medium.com/@etnishiyama/going-serverless-with-node-js-and-clean-architecture-a365208816ba
