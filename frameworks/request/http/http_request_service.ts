'use strict';

import {RequestService} from "../../../app/contracts/request_service";
import {BaseHttpError} from "../../error/base_http_error";
import {localeService} from "../../../config/project_dependencies";
import {InvalidJsonException, NullBodyException} from "../../error/http_client_error";

const headers = {"Access-Control-Allow-Origin": "*"};

export class HttpRequestService extends RequestService {

  constructor() {
    super();
  }

  validateBody(body: any): Promise<any> {
    if (body === null) {
      throw new NullBodyException;
    }

    try {
      body = JSON.parse(body);
    } catch {
      throw new InvalidJsonException();
    }

    return Promise.resolve(body);
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
