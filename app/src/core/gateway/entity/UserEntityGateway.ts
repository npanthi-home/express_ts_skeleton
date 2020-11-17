import { Optional } from 'optional-typescript';
import User from '../../model/User';

export default interface UserEntityGateway {
    create: (user: User) => User;
    get: (username: string) => Optional<User>;
    delete: (username: string) => Optional<User>;
    update: (user: User) => Optional<User>;
}
