import CoreBeans from "../config/CoreBeans";
import UserEntityGateway from "../gateway/entity/UserEntityGateway";
import Logger from "../gateway/utils/Logger";
import User from "../model/User";
import { compose } from "../utils/compose";
import { GenericValidations } from "../validation/generic/ValidationFactory";
import { UserValidations } from "../validation/user/UserValidationFactory";
import { validate, validateWith } from "../validation/validate";
import CrudService from "./CrudService";

export default class UserService implements CrudService<User, string> {
  gateway: UserEntityGateway;
  logger: Logger;

  constructor(container: any) {
    this.gateway = container[CoreBeans.USER_ENTITY_GATEWAY];
    this.logger = container[CoreBeans.LOGGER];
  }

  async create(user: User) {
    compose(
      validateWith(GenericValidations.DoFieldsExist)("username", "email"),
      validate(UserValidations.IsAdmin),
    )(user);

    this.logger.info(JSON.stringify(user));
    return await this.gateway.create(user);
  }

  async get(username: string) {
    return await this.gateway.get(username);
  }

  async delete(username: string) {
    return await this.gateway.delete(username);
  }

  async update(user: User) {
    return await this.gateway.update(user);
  }
}
