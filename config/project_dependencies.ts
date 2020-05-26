import {I18nLocaleService} from "../frameworks/locale/i18n_locale_service";
import {I18nLocaleServiceMocha} from "../frameworks/locale/i18n_locale_service_mocha";
import {DynamoDatabaseService} from "../frameworks/persistence/dynamodb/dynamo_database_service";
import {DynamoOfflineDatabaseService} from "../frameworks/persistence/dynamodb/dynamo_offline_database_service";
import {SqsOfflineService} from "../frameworks/queue/sqs/sqs_offline_service";
import {SqsService} from "../frameworks/queue/sqs/sqs_service";
import {HttpRequestService} from "../frameworks/request/http/http_request_service";

export const databaseService = process.env.ENV == 'dev' ? new DynamoOfflineDatabaseService() : new DynamoDatabaseService();
export const localeService = process.env.ENV == 'test'? new I18nLocaleServiceMocha(): new I18nLocaleService();
export const requestService = new HttpRequestService();
export const queueService = process.env.ENV == 'dev' ? new SqsOfflineService() : new SqsService();
