import {User} from "../../entities/model/user_model";

/**
 * Repository for the user model.
 */
export interface UserRepository {

  databaseClient: any;

  /**
   * Add one user to the repository.
   * @param _user user that will be added.
   */
  add(_user: User): Promise<any>;

  /**
   * Get one user from the repository.
   * @param _id id of a user.
   */
  get(_id: string): Promise<any>;

  /**
   * Scan the whole repository.
   * @param _pageSize number of items for the pagination.
   * @param _search query to search for a user.
   * @param _lastIndex id where the search will start from.
   */
  scan(_pageSize: number, _search: string, _lastIndex: string): Promise<any>;

  /**
   * Update one user.
   * @param _id user id.
   * @param _attributes params and values that will be updated.
   */
  updateItem(_id: string, _attributes: any): Promise<any>;

  /**
   * Remove one item from repository.
   * @param _id user id.
   */
  removeItem(_id: string): Promise<any>;

  /**
   * Inactivate one user from repository.
   * @param _id user id.
   */
  inactivateUser(_id: string): Promise<any>;

  /**
   * Add new item to array.
   * @param _id user id.
   * @param _attributes params and values that will be updated.
   */
  addItemsToArray(_id: string, _attributes: any): Promise<any>;

  /**
   * Remove item from array.
   * @param _id user id.
   * @param _attributes params and values that will be updated.
   */
  removeItemsFromArray(_id: string, _attributes: any): Promise<any>;
}
