'use strict';

import * as uuid from 'uuid';

export const dynamoBuildUser = ({fullName, email}) => {
  const currentTimestamp = new Date().getTime();

  return {
    id: uuid.v1(),
    fullName: fullName,
    email: email,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp,
  };
};
