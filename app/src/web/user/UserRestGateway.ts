import CoreBeans from "../../core/config/CoreBeans";
import UserWebGateway from "../../core/gateway/web/UserWebGateway";
import User from "../../core/model/User";
import UserService from "../../core/services/UserService";

export default class UserRestGateway implements UserWebGateway {
    service: UserService;

    constructor(container: any) {
        this.service = container[CoreBeans.USER_SERVICE];
    }

    create(user: User) {
        return this.service.create(user);
    }

    get(username: string) {
        return this.service.get(username);
    }

    delete(username: string) {
        return this.service.delete(username);
    }

    update(user: User) {
        return this.service.update(user);
    }
}