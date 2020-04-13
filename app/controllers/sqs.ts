'use strict';

export const readUser = async (event, _context) => {
  console.log('posted message: ' + JSON.stringify(event.Records));
};
