'use strict';

import {NotImplementedMethodException} from "../../frameworks/error/http_server_error";
import {User} from "../../entities/model/user_model";

/**
 * Repository for the user model.
 */
export class UserRepository {

  databaseClient;

  constructor(databaseClient) {
    this.databaseClient = databaseClient;
  }

  /**
   * Add one user to the repository.
   * @param _user user that will be added.
   */
  add(_user: User): Promise<any> {
    throw new NotImplementedMethodException();
  }

  /**
   * Get one user from the repository.
   * @param _where query to search for a user.
   */
  find(_where: any): Promise<any> {
    throw new NotImplementedMethodException();
  }

  /**
   * Search for primary key operators, faster search.
   * @param _where query to search for a user.
   */
  query(_where: any): Promise<any> {
    throw new NotImplementedMethodException();
  }

  /**
   * Scan the whole repository.
   * @param _pageSize number of items for the pagination.
   * @param _search query to search for a user.
   * @param _lastIndex id where the search will start from.
   */
  scan(_pageSize: number, _search: string, _lastIndex: string): Promise<any> {
    throw new NotImplementedMethodException();
  }

  /**
   * Update user.
   * @param _key user id.
   * @param _expression expression to update.
   * @param _values values to update.
   */
  update(_key: string, _expression: any, _values: any): Promise<any> {
    throw new NotImplementedMethodException();
  }

  /**
   * Update one user.
   * @param _key user id.
   * @param _attributes params and values that will be updated.
   */
  updateItem(_key: string, _attributes: any): Promise<any> {
    throw new NotImplementedMethodException();
  }

  /**
   * Remove one item from repository.
   * @param _key user id.
   */
  removeItem(_key: string): Promise<any> {
    throw new NotImplementedMethodException();
  }
}
