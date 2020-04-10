'use strict';

import {NotImplementedMethodError} from "../../frameworks/error/http_server_error";
import {BaseHttpError} from "../../frameworks/error/base_http_error";

export class ResponseService {

  constructor() {
  }

  success(_body: any, _httpStatus: number, _message: string, _errorCode: number): Promise<any> {
    throw new NotImplementedMethodError();
  }

  error(_error: BaseHttpError): Promise<any> {
    throw new NotImplementedMethodError();
  }
}
