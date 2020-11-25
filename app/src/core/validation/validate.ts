import AbstractValidationFactory from "./AbstractValidationFactory";
import { Validation } from "./Validation";
import ValidationMetadata from "./ValidationMetadata";

const abstractFactory = new AbstractValidationFactory();

export const validateWith = (metadata: ValidationMetadata) => (...params: any) => (
  entity: any
) => {
  const validation: Validation<any, any> = abstractFactory
    .get(metadata.factory)
    .get(metadata.type);
  const request = validation.buildRequest(entity, params);
  validation.validate(request);
  return entity;
};


export const validate = (metadata: ValidationMetadata) =>  (
  entity: any
) => {
  const validation: Validation<any, any> = abstractFactory
    .get(metadata.factory)
    .get(metadata.type);
  const request = validation.buildRequest(entity);
  validation.validate(request);
  return entity;
};
