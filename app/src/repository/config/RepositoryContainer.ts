import CoreContainer from "../../core/config/CoreContainer";
import ConnectionManager from "../ConnectionManager";
import RepositoryBeans from "./RepositoryBeans";

export default interface RepositoryContainer extends CoreContainer {
    [RepositoryBeans.CONNECTION_MANAGER]: ConnectionManager
}