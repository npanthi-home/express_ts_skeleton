import Mapper from "../../core/mapper/Mapper";
import User from "../../core/model/User";
import UserWebDto from "./UserWebDto";

export default class UserWebDtoMapper implements Mapper<User, UserWebDto> {
  async to(model: User) {
    const { username, email, firstName, lastName } = model;
    return {
      username,
      email,
      firstName,
      lastName,
    };
  }

  async from(dto: UserWebDto) {
    const { username, email, firstName, lastName, isAdmin } = dto;
    return {
      username,
      email,
      firstName,
      lastName,
      isAdmin,
    };
  }
}
