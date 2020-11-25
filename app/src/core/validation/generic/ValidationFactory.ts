import NotFoundError from "../../error/types/NotFoundError";
import { Validation } from "../Validation";
import { create } from "../ValidationMetadata";
import DoFieldsExist from "./DoFieldsExist";

export default class ValidationFactory {
  static factoryName:string = "Generic";
  protected validations: Map<string, Validation<any, any>> = new Map();

  constructor() {
    this.validations.set(
      GenericValidations.DoFieldsExist.type,
      new DoFieldsExist()
    );
  }

  get(type: string): Validation<any, any> {
    const validation = this.validations.get(type);
    if (!validation) {
      throw new NotFoundError("Invalid validation type");
    }
    return validation;
  }
}

const createMetadata = create(ValidationFactory.factoryName);

export class GenericValidations {
  static DoFieldsExist = createMetadata("DoFieldsExist");
}
