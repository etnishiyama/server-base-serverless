'use strict';

import {NotImplementedMethodException} from "../../frameworks/error/http_server_error";
import {User} from "../../entities/model/user_model";

export class UserRepository {

  databaseClient;

  constructor(databaseClient) {
    this.databaseClient = databaseClient;
  }

  add(_user: User): Promise<any> {
    throw new NotImplementedMethodException();
  }

  find(_where: any): Promise<any> {
    throw new NotImplementedMethodException();
  }

  query(_where: any): Promise<any> {
    throw new NotImplementedMethodException();
  }

  scan(_pageSize: number, _search: string, _lastIndex: string): Promise<any> {
    throw new NotImplementedMethodException();
  }

  update(_key: string, _expression: any, _values: any): Promise<any> {
    throw new NotImplementedMethodException();
  }

  updateItem(_key: string, _attributes: any): Promise<any> {
    throw new NotImplementedMethodException();
  }

  removeItem(_key: string): Promise<any> {
    throw new NotImplementedMethodException();
  }
}
