export const compose = (...fns: Array<Function>) => (x: any) =>
  fns.reduce((v, f) => f(v), x);