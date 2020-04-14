'use strict';

import {BaseHttpError} from "./base_http_error";
import {localeService} from "../../config/project_dependencies";

/**
 * Exception for requests without body.
 */
export class NullBodyException extends BaseHttpError {
  constructor() {
    super(localeService.translate('HTTP_ERROR_NULL_BODY'), 400, 1);
  }
}

/**
 * Exception for requests with invalid parameters.
 */
export class InvalidParamsException extends BaseHttpError {
  constructor(data: string) {
    super(localeService.translate('HTTP_ERROR_INVALID_PARAMS'), 400, 2, data);
  }
}

/**
 * Exception for requests with invalid JSON body.
 */
export class InvalidJsonException extends BaseHttpError {
  constructor() {
    super(localeService.translate('HTTP_ERROR_INVALID_JSON'), 422, 3);
  }
}
