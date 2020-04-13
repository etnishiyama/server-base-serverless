'use strict';

import {NotImplementedMethodException} from "../../frameworks/error/http_server_error";

export class LocaleService {

  constructor() {
  }

  translate(_key: string): string {
    throw new NotImplementedMethodException();
  }

  translatePlural(_key: string, _count: number): string {
    throw new NotImplementedMethodException();
  }

  setLocale(_locale: string) {
    throw new NotImplementedMethodException();
  }
}
