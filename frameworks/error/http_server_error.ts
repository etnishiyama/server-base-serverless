'use strict';

import {BaseHttpError} from "./base_http_error";
import {localeService} from "../../config/project_dependencies";

export class NotImplementedMethodError extends BaseHttpError {
  constructor() {
    super(localeService.translate('ERROR_SERVER_NOT_IMPLEMENTED_METHOD'), 500, 1);
  }
}
