export const readUser = async (event, _context): Promise<any> => {
  // eslint-disable-next-line no-console
  console.log('SQS handler received message: ' + JSON.stringify(event.Records));
};
