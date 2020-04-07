'use strict';

import {BaseHttpError} from "./base_http_error";
import {localeService} from "../../config/project_dependencies";

export class NullBodyError extends BaseHttpError {
  constructor() {
    super(localeService.translate('ERROR_HTTP_NULL_BODY'), 400, 1);
  }
}

export class InvalidParamsError extends BaseHttpError {
  constructor(data: string) {
    super(localeService.translate('ERROR_HTTP_INVALID_PARAMS'), 400, 2, data);
  }
}

export class InvalidJsonError extends BaseHttpError {
  constructor() {
    super(localeService.translate('ERROR_HTTP_INVALID_JSON'), 422, 3);
  }
}
