'use strict';

import {BaseHttpError} from "./base_http_error";
import locale from '../../provider/locale_provider'

export class NullBodyError extends BaseHttpError {
  constructor() {
    super(locale.__('HTTP_ERROR_NULL_BODY'), 400, 1);
  }
}

export class InvalidParamsError extends BaseHttpError {
  constructor() {
    super(locale.__('HTTP_ERROR_INVALID_PARAMS'), 400, 2);
  }
}

export class InvalidJsonError extends BaseHttpError {
  constructor() {
    super(locale.__('HTTP_ERROR_INVALID_JSON'), 422, 3);
  }
}
