export default interface ValidationMetadata {
  type: string;
  factory: string;
}

export const create = (factory: string) => (type: string) => ({
  type,
  factory,
});
