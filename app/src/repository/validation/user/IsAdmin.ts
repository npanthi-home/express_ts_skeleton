import UnauthorizedError from "../../../core/error/UnauthorizedError";
import User from "../../../core/model/User";
import { Validation } from "../Validation";

export interface IsAdminRequest {
  user: User;
}

export default class IsAdmin implements Validation<User, IsAdminRequest> {
  validate(request: IsAdminRequest) {
    if (!request.user.email) {
      throw new UnauthorizedError(
        `${request.user.email} is not authorized for this action.`
      );
    }
  }

  buildRequest(entity: User, params: any) {
    return { user: entity };
  }
}
