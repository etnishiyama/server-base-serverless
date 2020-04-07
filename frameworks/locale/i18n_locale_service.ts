'use strict';

import {LocaleService} from "../../app/contracts/locale_service";
import i18n from 'i18n';

i18n.configure({
  locales: ['en-US', 'pt-BR'],
  defaultLocale: 'en-US',
  directory: './config/locales',
  updateFiles: false
});

export class I18nLocaleService extends LocaleService {

  constructor() {
    super();
  }

  translate(key: string): string {
    return i18n.__(key);
  }

  translatePlural(key: string, count: number): string {
    return i18n.__N(key, count);
  }

  setLocale(locale: string) {
    i18n.setLocale(locale);
  }
}
