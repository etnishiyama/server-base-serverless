'use strict';

export const readUser = async (event, _context) => {
  console.log('sqs readUser called');
  console.log('posted message: ' + JSON.stringify(event.Records));
};
