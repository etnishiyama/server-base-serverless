'use strict';

import {ResponseService} from "../../../app/contracts/response_service";
import {BaseHttpError} from "../../error/base_http_error";
import {localeService} from "../../../config/project_dependencies";

const headers = {"Access-Control-Allow-Origin": "*"};

export class HttpResponseService extends ResponseService {

  constructor() {
    super();
  }

  success(body: any = {}, httpStatus: number = 200,
    message: string = localeService.translate('HTTP_SUCCESS_DEFAULT')): any {
    return {
      statusCode: httpStatus,
      headers: headers,
      body: JSON.stringify({
        message: message,
        data: body,
      })
    };
  }

  error(error: BaseHttpError): any {
    return {
      headers: headers,
      statusCode: error.httpStatus,
      body: JSON.stringify({
        message: error.message,
        errorCode: error.errorCode,
        data: error.data,
      })
    };
  }

  successPaginate(body: any = {}, total: number, lastEvaluatedIndex: string, httpStatus: number = 200,
    message: string = localeService.translate('HTTP_SUCCESS_DEFAULT')): any {
    return {
      statusCode: httpStatus,
      headers: headers,
      body: JSON.stringify({
        message: message,
        total: total,
        lastEvaluatedIndex: lastEvaluatedIndex,
        data: body,
      })
    };
  }
}
