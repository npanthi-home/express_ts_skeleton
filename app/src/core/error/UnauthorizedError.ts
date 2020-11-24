export default class UnauthorizedError extends Error {
  name: string;

  constructor(message: string) {
    const name = "UnauthorizedError";
    super(`${name}: ${message}`);
    this.name = name;
  }
}
