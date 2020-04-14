'use strict';

export const readUser = async (event, _context): Promise<any> => {
  // eslint-disable-next-line no-console
  console.log('posted message: ' + JSON.stringify(event.Records));
};
