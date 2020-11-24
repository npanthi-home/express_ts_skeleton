import ValidationFactory from "../generic/ValidationFactory";
import IsAdmin from "./IsAdmin";
import ValidationMetadata from "../ValidationMetadata";
import { create } from "../ValidationMetadata";

export default class UserValidationFactory extends ValidationFactory {
  static factoryName = "User";
  constructor() {
    super();
    this.validations.set(UserValidations.IsAdmin.type, new IsAdmin());
  }
}

const createMetadata = create(UserValidationFactory.factoryName);

export class UserValidations {
  static IsAdmin: ValidationMetadata = createMetadata("IsAdmin");
}
