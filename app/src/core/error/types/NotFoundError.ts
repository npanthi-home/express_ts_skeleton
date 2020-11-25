export default class NotFoundError extends Error {
  name: string;

  constructor(message: string) {
    const name = "NotFoundError";
    super(`${name}: ${message}`);
    this.name = name;
  }
}
