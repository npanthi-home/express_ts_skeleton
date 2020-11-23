import ProfileEntityGateway from '../gateway/entity/ProfileEntityGateway';
import UserEntityGateway from '../gateway/entity/UserEntityGateway';
import Logger from '../gateway/utils/Logger';
import ProfileService from '../services/ProfileService';
import UserService from '../services/UserService';
import CoreBeans from './CoreBeans';

export default interface CoreContainer {
  [CoreBeans.USER_SERVICE]: UserService,
  [CoreBeans.USER_ENTITY_GATEWAY]: UserEntityGateway,
  [CoreBeans.LOGGER]: Logger,
  [CoreBeans.PROFILE_ENTITY_GATEWAY]: ProfileEntityGateway,
  [CoreBeans.PROFILE_SERVICE]: ProfileService,
}