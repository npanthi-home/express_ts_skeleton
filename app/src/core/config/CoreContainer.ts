import UserEntityGateway from '../gateway/entity/UserEntityGateway';
import Logger from '../gateway/utils/Logger';
import UserWebGateway from '../gateway/web/UserWebGateway';
import UserService from '../services/UserService';
import CoreBeans from './CoreBeans';
import ProfileEntityGateway from '../gateway/entity/ProfileEntityGateway';
import ProfileService from '../services/ProfileService';

export default interface CoreContainer {
  [CoreBeans.USER_SERVICE]: UserService,
  [CoreBeans.USER_WEB_GATEWAY]: UserWebGateway,
  [CoreBeans.USER_ENTITY_GATEWAY]: UserEntityGateway,
  [CoreBeans.LOGGER]: Logger,
  [CoreBeans.PROFILE_ENTITY_GATEWAY]: ProfileEntityGateway,
  [CoreBeans.PROFILE_SERVICE]: ProfileService,
}