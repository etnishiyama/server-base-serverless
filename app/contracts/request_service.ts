'use strict';

import {NotImplementedMethodException} from "../../frameworks/error/http_server_error";
import {BaseHttpError} from "../../frameworks/error/base_http_error";

export class RequestService {

  constructor() {
  }

  validateBody(_body: any): Promise<any> {
    throw new NotImplementedMethodException();
  }

  success(_body: any, _httpStatus: number, _message: string): Promise<any> {
    throw new NotImplementedMethodException();
  }

  successPaginate(_body: any, _total: number, _lastEvaluatedIndex: string, _httpStatus: number,
    _message: string): Promise<any> {
    throw new NotImplementedMethodException();
  }

  error(_error: BaseHttpError): Promise<any> {
    throw new NotImplementedMethodException();
  }
}
