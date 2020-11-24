import ValidationFactory from "./generic/ValidationFactory";
import UserValidationFactory from "./user/UserValidationFactory";

class FactoryNames {
  static Generic = ValidationFactory.factoryName;
  static User = UserValidationFactory.factoryName;
}

export default class AbstractValidationFactory {
  factories: Map<string, ValidationFactory>;
  private genericFactory: ValidationFactory;

  constructor() {
    this.factories = new Map();
    this.genericFactory = new ValidationFactory();
    this.factories.set(FactoryNames.User, new UserValidationFactory());
    this.factories.set(FactoryNames.Generic, this.genericFactory);
  }

  get(type: string) {
    const validationFactory = this.factories.get(type);
    if (!validationFactory) {
      return this.genericFactory;
    }
    return validationFactory;
  }
}
