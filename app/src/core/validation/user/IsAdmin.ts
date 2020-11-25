import User from "../../model/User";
import { Validation } from "../Validation";
import UnauthorizedError from '../../error/types/UnauthorizedError';

export interface IsAdminRequest {
  user: User;
}

export default class IsAdmin implements Validation<User, IsAdminRequest> {
  validate(request: IsAdminRequest) {
    if (!request.user.isAdmin) {
      throw new UnauthorizedError(
        `${request.user.username} is not authorized for this action.`
      );
    }
  }

  buildRequest(entity: User) {
    return { user: entity };
  }
}
