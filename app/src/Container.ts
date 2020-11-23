import { asClass, asValue, AwilixContainer, createContainer, InjectionMode } from 'awilix';
import CoreBeans from './core/config/CoreBeans';
import CoreContainer from './core/config/CoreContainer';
import ProfileService from './core/services/ProfileService';
import UserService from './core/services/UserService';
import RepositoryBeans from './repository/config/RepositoryBeans';
import RepositoryContainer from './repository/config/RepositoryContainer';
import ConnectionManager from './repository/ConnectionManager';
import InMemoryProfileEntityGateway from './repository/profile/InMemoryProfileEntityGateway';
import MongoProfileEntityGateway from './repository/profile/MongoProfileEntityGateway';
import UserDocumentGateway from './repository/user/UserDocumentGateway';
import ConsoleLogger from './utils/ConsoleLogger';
import WebBeans from './web/config/WebBeans';
import WebContainer from './web/config/WebContainer';
import ProfileController from './web/profile/ProfileController';
import { UserController } from './web/user/UserController';
import UserRestGateway from './web/user/UserRestGateway';
import UserWebDtoMapper from './web/user/UserWebDtoMapper';


interface ExtendedContainer extends CoreContainer, WebContainer, RepositoryContainer {}

export default class Container {
    container: AwilixContainer<ExtendedContainer>;

    private constructor(container: AwilixContainer<ExtendedContainer>) {
        this.container = container;
    }

    static async create() {
        let container = createContainer<ExtendedContainer>({
            injectionMode: InjectionMode.PROXY,
        });

        const connectionManager = await ConnectionManager.createConnection();

        container.register({
            [CoreBeans.USER_SERVICE]: asClass(UserService).singleton(),
            [CoreBeans.USER_ENTITY_GATEWAY]: asClass(UserDocumentGateway).singleton(),
            [CoreBeans.USER_WEB_GATEWAY]: asClass(UserRestGateway).singleton(),
            [CoreBeans.LOGGER]: asClass(ConsoleLogger).singleton(),
            [CoreBeans.PROFILE_ENTITY_GATEWAY]: asClass(MongoProfileEntityGateway).singleton(),
            [CoreBeans.PROFILE_SERVICE]: asClass(ProfileService).singleton(),
            [WebBeans.USER_WEB_DTO_TRANSFORMER]: asClass(UserWebDtoMapper).singleton(),
            [WebBeans.USER_CONTROLLER]: asClass(UserController).singleton(),
            [WebBeans.PROFILE_CONTROLLER]: asClass(ProfileController).singleton(),
            [RepositoryBeans.CONNECTION_MANAGER]: asValue(connectionManager),
        });

        return new Container(container);
    }

    get() {
        return this.container;
    }

    dispose() {
        this.container.dispose();
    }
};