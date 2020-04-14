'use strict';

import {UserRepository} from "./user_repository";

/**
 * Database service contract.
 */
export class DatabaseService {

  userRepository: UserRepository;

  constructor() {
    this.userRepository = null;
  }
}
