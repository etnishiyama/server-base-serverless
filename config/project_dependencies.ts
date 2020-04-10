'use strict';

import {I18nLocaleService} from "../frameworks/locale/i18n_locale_service";
import {DynamoDatabaseService} from "../frameworks/persistence/dynamodb/dynamo_database_service";
import {DynamoOfflineDatabaseService} from "../frameworks/persistence/dynamodb/dynamo_offline_database_service";
import {SqsOfflineService} from "../frameworks/queue/sqs/sqs_offline_service";
import {SqsService} from "../frameworks/queue/sqs/sqs_service";
import {HttpResponseService} from "../frameworks/response/http/http_response_service";

export const databaseService = process.env.ENV == 'dev' ? new DynamoOfflineDatabaseService() : new DynamoDatabaseService();
export const localeService = new I18nLocaleService();
export const responseService = new HttpResponseService();
export const queueService = process.env.ENV == 'dev' ? new SqsOfflineService() : new SqsService();
