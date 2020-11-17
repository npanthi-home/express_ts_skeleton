import UserEntityGateway from '../gateway/entity/UserEntityGateway';
import UserWebGateway from '../gateway/web/UserWebGateway';
import UserService from '../services/UserService';
import CoreBeans from './CoreBeans';

export default interface CoreContainer {
  [CoreBeans.USER_SERVICE]: UserService,
  [CoreBeans.USER_WEB_GATEWAY]: UserWebGateway,
  [CoreBeans.USER_ENTITY_GATEWAY]: UserEntityGateway,
}