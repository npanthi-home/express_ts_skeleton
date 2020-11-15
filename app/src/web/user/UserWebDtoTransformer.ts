import Transformer from '../../core/gateway/transformer/Transformer';
import User from '../../core/model/User';
import UserWebDto from './UserWebDto';

class UserWebDtoTransformer implements Transformer<User, UserWebDto> {
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