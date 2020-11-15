import UserEntityGateway from "../../core/gateway/entity/UserEntityGateway";
import User from "../../core/model/User";

class UserDocumentGateway implements UserEntityGateway {
    create: () => User;
    get: (id: string) => User;
    delete: (id: string) => User;
    update: (user: User) => User;
}