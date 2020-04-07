'use strict';

import {DynamoOfflineDatabaseService} from "../frameworks/persistance/dynamo/dynamo_offline_database_service";
import {I18nLocaleService} from "../frameworks/locale/i18n_locale_service";

export const databaseService = new DynamoOfflineDatabaseService();
export const localeService = new I18nLocaleService();
