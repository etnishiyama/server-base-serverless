'use strict';

import {UserRepository} from "./user_repository";

export class DatabaseService {

  userRepository: UserRepository;

  constructor() {
    this.userRepository = null;
  }
}
