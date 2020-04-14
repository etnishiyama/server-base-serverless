'use strict';

import * as uuid from 'uuid';

/**
 * Builder that adds necessary info for the dynamoDB document.
 * @param model model to be saved on DB.
 */
export const dynamoDocumentBuilder = (model: any) => {
  const currentTimestamp = new Date().getTime();
  const dynamoDocument = model;

  dynamoDocument.id = model.id || uuid.v1();
  dynamoDocument.createdAt = currentTimestamp;
  dynamoDocument.updatedAt = currentTimestamp;

  return dynamoDocument;
};
