export class APIRequestError extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, APIRequestError.prototype);
  }
}
