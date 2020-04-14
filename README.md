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
 - $ ./start_local_services.sh
 - $ npm start