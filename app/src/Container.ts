import { asClass, asValue, AwilixContainer, createContainer, InjectionMode } from 'awilix';
import CoreBeans from './core/config/CoreBeans';
import CoreContainer from './core/config/CoreContainer';
import ProfileService from './core/services/ProfileService';
import UserService from './core/services/UserService';
import RepositoryBeans from './repository/config/RepositoryBeans';
import RepositoryContainer from './repository/config/RepositoryContainer';
import ConnectionManager from './repository/ConnectionManager';
import MongoProfileEntityGateway from './repository/profile/MongoProfileEntityGateway';
import InMemoryUserEntityGateway from './repository/user/InMemoryUserEntityGateway';
import ConsoleLogger from './utils/ConsoleLogger';
import WebBeans from './web/config/WebBeans';
import WebContainer from './web/config/WebContainer';
import ProfileController from './web/profile/ProfileController';
import { UserController } from './web/user/UserController';
import UserWebDtoMapper from './web/user/UserWebDtoMapper';
import CountOneToHundredAsGuest from './core/usecase/user/CountOneToHundredAsGuest';
import UseCases from './core/config/UseCases';
import ProfileDocumentMapper from './repository/profile/ProfileDocumentMapper';


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
            [CoreBeans.USER_ENTITY_GATEWAY]: asClass(InMemoryUserEntityGateway).singleton(),
            [CoreBeans.LOGGER]: asClass(ConsoleLogger).singleton(),
            [CoreBeans.PROFILE_ENTITY_GATEWAY]: asClass(MongoProfileEntityGateway).singleton(),
            [CoreBeans.PROFILE_SERVICE]: asClass(ProfileService).singleton(),
            [UseCases.COUNT_ONE_TO_HUNDRED_AS_GUEST]: asClass(CountOneToHundredAsGuest).singleton(),
            [WebBeans.USER_WEB_DTO_TRANSFORMER]: asClass(UserWebDtoMapper).singleton(),
            [WebBeans.USER_CONTROLLER]: asClass(UserController).singleton(),
            [WebBeans.PROFILE_CONTROLLER]: asClass(ProfileController).singleton(),
            [RepositoryBeans.CONNECTION_MANAGER]: asValue(connectionManager),
            [RepositoryBeans.PROFILE_DOCUMENT_MAPPER]: asClass(ProfileDocumentMapper).singleton(),
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