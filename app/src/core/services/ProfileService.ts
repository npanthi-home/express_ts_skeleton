import Profile from "../model/Profile";
import ProfileEntityGateway from '../gateway/entity/ProfileEntityGateway';
import CoreBeans from "../config/CoreBeans";

export default class ProfileService {

    gateway: ProfileEntityGateway;

    constructor(container: any) {
        this.gateway = container[CoreBeans.PROFILE_ENTITY_GATEWAY];
    }

    create(profile: Profile) {
        return this.gateway.save(profile);
    }

    get(username: string) {
        return this.gateway.fetch(username);
    }
}