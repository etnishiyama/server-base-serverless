'use strict';

import {BaseHttpError} from "./base_http_error";

export class NullBodyError extends BaseHttpError {
  constructor() {
    super("Request body is null.", 400, 1);
  }
}

export class InvalidParamsError extends BaseHttpError {
  constructor() {
    super("Request has one or more invalid parameters.", 400, 2);
  }
}
