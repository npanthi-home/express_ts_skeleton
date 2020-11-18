import { asClass, AwilixContainer, createContainer, InjectionMode } from 'awilix';
import CoreBeans from './core/config/CoreBeans';
import CoreContainer from './core/config/CoreContainer';
import UserService from './core/services/UserService';
import RepositoryContainer from './repository/config/RepositoryContainer';
import UserDocumentGateway from './repository/user/UserDocumentGateway';
import WebBeans from './web/config/WebBeans';
import WebContainer from './web/config/WebContainer';
import { UserController } from './web/user/UserController';
import UserRestGateway from './web/user/UserRestGateway';
import UserWebDtoMapper from './web/user/UserWebDtoMapper';


interface ExtendedContainer extends CoreContainer, WebContainer, RepositoryContainer {}

export default class Container {
    container: AwilixContainer<ExtendedContainer>;

    constructor() {
        this.container = createContainer<ExtendedContainer>({
            injectionMode: InjectionMode.PROXY,
        })
        
        this.container.register({
            [CoreBeans.USER_SERVICE]: asClass(UserService).proxy(),
            [CoreBeans.USER_ENTITY_GATEWAY]: asClass(UserDocumentGateway).proxy(),
            [CoreBeans.USER_WEB_GATEWAY]: asClass(UserRestGateway).proxy(),
            [WebBeans.USER_WEB_DTO_TRANSFORMER]: asClass(UserWebDtoMapper).proxy(),
            [WebBeans.USER_CONTROLLER]: asClass(UserController).proxy(),
        })
    }

    get() {
        return this.container;
    }

    dispose() {
        this.container.dispose();
    }
};