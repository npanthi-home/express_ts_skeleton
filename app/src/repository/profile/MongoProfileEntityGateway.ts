import ProfileEntityGateway from "../../core/gateway/entity/ProfileEntityGateway";
import Profile from "../../core/model/Profile";
import { ProfileDocument } from "../user/ProfileEntity";
import model from "./ProfileSchemaModel";
import Mapper from '../../core/mapper/Mapper';
import RepositoryBeans from '../config/RepositoryBeans';

export default class MongoProfileEntityGateway implements ProfileEntityGateway {

  mapper: Mapper<Profile, ProfileDocument>;

  constructor(container: any) {
    this.mapper = container[RepositoryBeans.PROFILE_DOCUMENT_MAPPER];
  }

  async save(profile: Profile) {
    const profileDocument = await this.mapper.to(profile);
    const savedProfile = await profileDocument.save();
    return savedProfile;
  }

  async fetch(username: string) {
    const profileDocument = await model.find({ username });
    return await this.mapper.from(profileDocument[0]);
  }
}