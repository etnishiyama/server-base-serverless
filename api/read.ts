'use strict';

import * as dynamo from '../lib/dynamo';
import {response} from '../lib/response';

export const getUsers = async (_event, _context) => {

  return dynamo.scan({}, null)
    .then(docs => {
      return response(docs.Items);
    }).catch(err => {
      return response(err, 500);
    });
};