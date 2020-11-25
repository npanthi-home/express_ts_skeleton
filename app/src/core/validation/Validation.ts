export interface Validation<E, R> {
  validate: (request: R) => void;
  buildRequest: (entity: E, params?: any) => R;
}
