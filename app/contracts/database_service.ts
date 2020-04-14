import {UserRepository} from "./user_repository";

/**
 * Database service contract.
 */
export interface DatabaseService {
  userRepository: UserRepository;
}
