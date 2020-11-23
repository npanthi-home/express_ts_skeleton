import CoreContainer from '../../core/config/CoreContainer';
import Mapper from '../../core/mapper/Mapper';
import User from '../../core/model/User';
import { UserController } from '../user/UserController';
import UserWebDto from '../user/UserWebDto';
import WebBeans from './WebBeans';
import ProfileController from '../profile/ProfileController';

export default interface WebContainer extends CoreContainer {
    [WebBeans.USER_WEB_DTO_TRANSFORMER]: Mapper<User, UserWebDto>,
    [WebBeans.USER_CONTROLLER]: UserController,
    [WebBeans.PROFILE_CONTROLLER]: ProfileController,
}