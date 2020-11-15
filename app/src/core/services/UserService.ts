import UserEntityGateway from "../gateway/entity/UserEntityGateway";
import User from "../model/User";

export default class UserService {
    gateway: UserEntityGateway;

    constructor(gateway: UserEntityGateway) {
        this.gateway = gateway;
    }

    create(user: User) {
        return this.gateway.create(user);
    }

    get(username: string) {
        return this.gateway.get(username);
    }

    delete(username: string) {
        return this.gateway.delete(username);
    }

    update(user: User) {
        return this.gateway.update(user);
    }
}