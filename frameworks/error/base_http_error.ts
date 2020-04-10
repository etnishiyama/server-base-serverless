'use strict';

export class BaseHttpError extends Error {

  public httpStatus: number;
  public errorCode: number;
  public data: string;

  constructor(message: string, httpStatus: number, errorCode: number, data: string = null) {
    super(message);
    this.data = data;
    this.httpStatus = httpStatus;
    this.errorCode = errorCode;
  }
}
