import User from '../../model/User';

export default interface UserEntityGateway {
    create: (user: User) => User;
    get: (username: string) => User;
    delete: (username: string) => User;
    update: (user: User) => User;
}