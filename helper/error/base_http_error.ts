'use strict';

export class BaseHttpError extends Error {

  public httpStatus: number;
  public errorCode: number;

  constructor(message: string, httpStatus: number, errorCode: number) {
    super(message);
    this.httpStatus = httpStatus;
    this.errorCode = errorCode;
  }
}