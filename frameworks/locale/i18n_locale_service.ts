'use strict';

import {LocaleService} from "../../app/contracts/locale_service";
import i18n from 'i18n';
import config from '../../config/locales/locale-service.json'

i18n.configure(config);

/**
 * Implementation of i18n as the locale service.
 */
export class I18nLocaleService extends LocaleService {

  constructor() {
    super();
  }

  translate(key: string) {
    return i18n.__(key);
  }

  translatePlural(key: string, count: number) {
    return i18n.__N(key, count);
  }

  setLocale(locale: string) {
    i18n.setLocale(locale);
  }
}
