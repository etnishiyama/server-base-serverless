import * as uuid from 'uuid';

/**
 * Builder that adds necessary info for the dynamoDB document.
 * @param model model to be saved on DB.
 */
export const dynamoDocumentBuilder = (model: any) => {
  const currentDate = new Date().toISOString();
  const dynamoDocument = model;

  dynamoDocument.id = model.id || uuid.v1();
  dynamoDocument.isActive = model.isActive || true;
  dynamoDocument.createdAt = currentDate;
  dynamoDocument.updatedAt = currentDate;

  return dynamoDocument;
};
