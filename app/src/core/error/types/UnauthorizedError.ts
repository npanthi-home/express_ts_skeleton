export default class UnauthorizedError extends Error {
  static errorName = 'UnauthorizedError';

  constructor(message: string) {
    super(`${UnauthorizedError.errorName}: ${message}`);
  }
}
