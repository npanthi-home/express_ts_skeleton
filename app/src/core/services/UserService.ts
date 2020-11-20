import CoreBeans from "../config/CoreBeans";
import UserEntityGateway, * as UserEntityGatewayConfig from "../gateway/entity/UserEntityGateway";
import Logger from "../gateway/utils/Logger";
import User from "../model/User";

export default class UserService {

    gateway: UserEntityGateway;
    logger: Logger;

    constructor(container: any) {
        this.gateway = container[CoreBeans.USER_ENTITY_GATEWAY];
        this.logger = container[CoreBeans.LOGGER];
    }

    create(user: User) {
        this.logger.info(JSON.stringify(user));
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