import Mapper from '../../core/mapper/Mapper';
import User from '../../core/model/User';
import UserWebDto from './UserWebDto';

export default class UserWebDtoMapper implements Mapper<User, UserWebDto> {
    to(model: User) {
        const { username, email, firstName, lastName } = model;
        return {
            username,
            email,
            firstName,
            lastName,
        }
    }

    from(dto: UserWebDto) {
        const { username, email, firstName, lastName } = dto;
        return {
            id: '',
            username,
            email,
            firstName,
            lastName,
        }
    };
}