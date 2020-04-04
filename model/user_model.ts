'use strict';

import {buildUser} from "./user";
import {userValidator} from "./user_validator";
import {userSchema} from "./user_schema";

const validator = userValidator(userSchema);
export const makeUser = buildUser(validator);
