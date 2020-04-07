'use strict';

import {NotImplementedMethodError} from "../../frameworks/error/http_server_error";
import {UserRepository} from "./user_repository";

export class DatabaseService {

  userRepository: UserRepository;

  constructor() {
    this.userRepository = null;
  }

  initDatabase() {
    throw new NotImplementedMethodError();
  }
}
