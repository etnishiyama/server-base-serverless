'use strict';

import {NotImplementedMethodException} from "../../frameworks/error/http_server_error";
import {BaseHttpError} from "../../frameworks/error/base_http_error";

/**
 * RESTful api request contract.
 */
export class RequestService {

  constructor() {
  }

  /**
   * Validate the request body.
   * @param _body request body.
   */
  validateBody(_body: any): Promise<any> {
    throw new NotImplementedMethodException();
  }

  /**
   * Successful response for a request.
   * @param _body response body.
   * @param _httpStatus response http status that will be returned.
   * @param _message localized message.
   */
  success(_body: any, _httpStatus: number, _message: string): Promise<any> {
    throw new NotImplementedMethodException();
  }

  /**
   * Successful response for a request with pagination.
   * @param _body response body.
   * @param _total total number of items in the body.
   * @param _lastEvaluatedIndex last id that was evaluated on the paginated response.
   * @param _httpStatus response http status that will be returned.
   * @param _message localized message.
   */
  successPaginate(_body: any, _total: number, _lastEvaluatedIndex: string, _httpStatus: number,
    _message: string): Promise<any> {
    throw new NotImplementedMethodException();
  }

  /**
   * Error response for a request.
   * @param _error a {@link BaseHttpError} that will be returned after the request was processed.
   */
  error(_error: BaseHttpError): Promise<any> {
    throw new NotImplementedMethodException();
  }
}
