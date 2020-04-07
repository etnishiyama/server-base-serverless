'use strict';

import {I18nLocaleService} from "../frameworks/locale/i18n_locale_service";
import {DynamoDatabaseService} from "../frameworks/persistance/dynamo/dynamo_database_service";
import {DynamoOfflineDatabaseService} from "../frameworks/persistance/dynamo/dynamo_offline_database_service";

export const databaseService = process.env.ENV == 'dev' ? new DynamoOfflineDatabaseService() : new DynamoDatabaseService();
export const localeService = new I18nLocaleService();
