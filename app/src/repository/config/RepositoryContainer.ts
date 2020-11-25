import CoreContainer from "../../core/config/CoreContainer";
import ConnectionManager from "../ConnectionManager";
import RepositoryBeans from './RepositoryBeans';
import ProfileDocument from '../profile/ProfileDocument';
import Mapper from '../../core/mapper/Mapper';
import Profile from '../../core/model/Profile';

export default interface RepositoryContainer extends CoreContainer {
    [RepositoryBeans.CONNECTION_MANAGER]: ConnectionManager,
    [RepositoryBeans.PROFILE_DOCUMENT_MAPPER]: Mapper<Profile, ProfileDocument>,
}