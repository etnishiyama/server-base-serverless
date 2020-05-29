/**
 * Repository for dynamodb.
 */
export interface DynamoRepositoryInterface {

  databaseClient: any;

  /**
   * Add one item to the repository.
   * @param _item object that will be added.
   */
  add(_item: any): Promise<any>;

  /**
   * Get one item from the repository.
   * @param _id id of an item.
   */
  get(_id: string): Promise<any>;

  /**
   * Scan the whole repository.
   * @param _pageSize number of items for the pagination.
   * @param _search query to search for an item.
   * @param _lastIndex id where the search will start from.
   */
  scan(_pageSize: number, _search: string, _lastIndex: string): Promise<any>;

  /**
   * Update one item.
   * @param _id item id.
   * @param _attributes params and values that will be updated.
   */
  updateItem(_id: string, _attributes: any): Promise<any>;

  /**
   * Remove one item from repository.
   * @param _id item id.
   */
  removeItem(_id: string): Promise<any>;

  /**
   * Inactivate one item from repository.
   * @param _id item id.
   */
  inactivateItem(_id: string): Promise<any>;

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
