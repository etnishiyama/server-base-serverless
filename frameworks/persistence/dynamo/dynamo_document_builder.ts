'use strict';

import * as uuid from 'uuid';

export const dynamoDocumentBuilder = (model: any) => {
  const currentTimestamp = new Date().getTime();
  const dynamoDocument = model;

  dynamoDocument.id = uuid.v1();
  dynamoDocument.createdAt = currentTimestamp;
  dynamoDocument.updatedAt = currentTimestamp;

  return dynamoDocument;
};
