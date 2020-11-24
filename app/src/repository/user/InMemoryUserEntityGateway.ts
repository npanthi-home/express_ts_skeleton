import NotFoundError from "../../core/error/NotFoundError";
import UserEntityGateway from "../../core/gateway/entity/UserEntityGateway";
import User, { NullUser } from "../../core/model/User";
import { compose } from '../../core/utils/compose';
import { GenericValidations } from '../validation/generic/ValidationFactory';
import { UserValidations } from '../validation/user/UserValidationFactory';
import { validate } from '../validation/validate';

export default class InMemoryUserEntityGateway implements UserEntityGateway {
  users: Map<string, User>;

  constructor() {
    this.users = new Map<string, User>();
  }

  async create(user: User) {
    compose(
        validate(GenericValidations.DoFieldsExist)('username', 'email'),
        validate(UserValidations.IsAdmin)(),
    )(user);

    this.users.set(user.username, user);
    console.log("Created User", user);
    return user;
  }

  async get(username: string) {
    return await Promise.resolve(this.users.get(username) || NullUser);
  }

  async delete(username: string) {
    const user = await Promise.resolve(this.users.get(username) || NullUser);
    if (user === NullUser) {
      throw new NotFoundError("user not found");
    } else {
      console.log("Deleted User", user);
      this.users.delete(username);
      return user;
    }
  }

  async update(user: User) {
    const savedUser = await Promise.resolve(this.users.get(user.username) || NullUser);
    if (savedUser === NullUser) {
      throw new NotFoundError("user not found");
    } else {
      this.users.set(user.username, user);
      console.log("Updated User", user);
      return user;
    }
  }
}
