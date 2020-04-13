'use strict';

import {BaseHttpError} from "./base_http_error";
import {localeService} from "../../config/project_dependencies";

export class InternalServerException extends BaseHttpError {
  constructor(data: any = {}) {
    super(localeService.translate('HTTP_ERROR_DEFAULT'), 500, 1, data);
  }
}

export class NotImplementedMethodException extends BaseHttpError {
  constructor() {
    super(localeService.translate('HTTP_ERROR_NOT_IMPLEMENTED_METHOD'), 500, 2);
  }
}
