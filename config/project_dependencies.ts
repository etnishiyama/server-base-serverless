'use strict';

import {I18nLocaleService} from "../frameworks/locale/i18n_locale_service";
import {DynamoDatabaseService} from "../frameworks/persistence/dynamo/dynamo_database_service";
import {DynamoOfflineDatabaseService} from "../frameworks/persistence/dynamo/dynamo_offline_database_service";
import {SqsService} from "../frameworks/queue/sqs/sqs_service";

export const databaseService = process.env.ENV == 'dev' ? new DynamoOfflineDatabaseService() : new DynamoDatabaseService();
export const localeService = new I18nLocaleService();
export const queueService = new SqsService();
