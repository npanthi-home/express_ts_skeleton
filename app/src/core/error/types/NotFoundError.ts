export default class NotFoundError extends Error {
  static errorName = "NotFoundError";

  constructor(message: string) {
    super(`${NotFoundError.errorName}: ${message}`);
  }
}
