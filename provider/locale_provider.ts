'use strict';

import i18n from 'i18n';

i18n.configure({
  locales: ['en-US', 'pt-BR'],
  defaultLocale: 'en-US',
  directory: './locale'
});

export default i18n;
