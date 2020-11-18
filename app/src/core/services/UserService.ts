import CoreBeans from "../config/CoreBeans";
import UserEntityGateway, * as UserEntityGatewayConfig from "../gateway/entity/UserEntityGateway";
import User from "../model/User";

export default class UserService {

    gateway: UserEntityGateway;

    constructor(container: any) {
        this.gateway = container[CoreBeans.USER_ENTITY_GATEWAY];
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