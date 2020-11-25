export const compose = (...fns: Array<Function>) => (x: any) => fns.reduceRight((v, f) => f(v), x);