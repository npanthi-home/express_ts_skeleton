import { Optional } from 'optional-typescript';
import UserEntityGateway from '../../core/gateway/entity/UserEntityGateway';
import User from '../../core/model/User';

export default class UserDocumentGateway implements UserEntityGateway {
    users: Map<string, User>;

    constructor() {
        this.users = new Map<string, User>();
    }

    create(user: User) {
        this.users.set(user.username, user);
        console.log('Created User', user);
        return user;
    }

    get(username: string) {
        let user: Optional<User> = new Optional(this.users.get(username));
        console.log('Fetched User', user);
        return user;
    }

    delete(username: string) {
        let user: Optional<User> = new Optional(this.users.get(username));
        console.log('Deleted User', user);
        this.users.delete(username);
        return user;
    }

    update(user: User) {
        this.users.set(user.username, user);
        console.log('Updated User', user);
        return new Optional<User>(user);
    }
}