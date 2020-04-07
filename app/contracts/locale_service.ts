'use strict';

import {NotImplementedMethodError} from "../../frameworks/error/http_server_error";

export class LocaleService {

  constructor() {
  }

  translate(_key: string): string {
    throw new NotImplementedMethodError();
  }

  translatePlural(_key: string, _count: number): string {
    throw new NotImplementedMethodError();
  }

  setLocale(_locale: string) {
    throw new NotImplementedMethodError();
  }
}
