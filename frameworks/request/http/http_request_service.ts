import {RequestServiceInterface} from "../../../app/contracts/request_service";
import {BaseHttpError} from "../../error/base_http_error";
import {localeService} from "../../../config/project_dependencies";
import {InvalidJsonException, NullBodyException} from "../../error/http_client_error";
import {Promise} from 'bluebird';

const headers = {"Access-Control-Allow-Origin": "*"};

/**
 * Implementation of the request service for HTTP protocol.
 */
export class HttpRequestService implements RequestServiceInterface {

  validateBody(body: any): Promise<any> {
    return new Promise((resolve) => {
      if (body === null) {
        throw new NullBodyException;
      }

      try {
        body = JSON.parse(body);
      } catch {
        throw new InvalidJsonException();
      }

      resolve(body);
    })
  }

  success(body: any = {}, httpStatus = 200,
    message: string = localeService.translate('HTTP_SUCCESS_DEFAULT')): Promise<any> {
    return Promise.resolve({
      statusCode: httpStatus,
      headers: headers,
      body: JSON.stringify({
        message: message,
        data: body,
      })
    })
  }

  error(error: BaseHttpError): Promise<any> {
    return Promise.resolve({
      headers: headers,
      statusCode: error.httpStatus,
      body: JSON.stringify({
        message: error.message,
        errorCode: error.errorCode,
        data: error.data,
      })
    });
  }

  successPaginate(body: any = {}, total: number, lastIndex: string, httpStatus = 200,
    message: string = localeService.translate('HTTP_SUCCESS_DEFAULT')): Promise<any> {
    return Promise.resolve({
      statusCode: httpStatus,
      headers: headers,
      body: JSON.stringify({
        message: message,
        total: total,
        lastEvaluatedIndex: lastIndex,
        data: body,
      })
    });
  }
}
