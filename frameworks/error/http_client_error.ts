import {BaseHttpError} from "./base_http_error";
import {localeService} from "../../config/project_dependencies";

/**
 * Exception for requests without body.
 */
export class NullBodyException extends BaseHttpError {
  constructor(data: any) {
    super(localeService.translate('HTTP_ERROR_NULL_BODY'), 400, 1, data);
  }
}

/**
 * Exception for requests with invalid parameters.
 */
export class InvalidParamsException extends BaseHttpError {
  constructor(data: any) {
    super(localeService.translate('HTTP_ERROR_INVALID_PARAMS'), 400, 2, data);
  }
}

/**
 * Exception for requests with invalid JSON body.
 */
export class InvalidJsonException extends BaseHttpError {
  constructor(data: any) {
    super(localeService.translate('HTTP_ERROR_INVALID_JSON'), 400, 3, data);
  }
}

/**
 * Exception for entity not found error.
 */
export class UnprocessableEntityException extends BaseHttpError {
  constructor(data: any) {
    super(localeService.translate('HTTP_ERROR_ENTITY_NOT_FOUND'), 422, 4, data);
  }
}

/**
 * Exception for entity is deleted.
 */
export class DeletedEntityException extends BaseHttpError {
  constructor(data: any) {
    super(localeService.translate('HTTP_ERROR_ENTITY_DELETED'), 422, 5, data);
  }
}
