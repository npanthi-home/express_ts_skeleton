import { Model, model } from "mongoose";
import Mapper from "../../core/mapper/Mapper";
import Profile from "../../core/model/Profile";
import ProfileDocument from './ProfileDocument';
import profileModel from './ProfileSchemaModel';

export default class ProfileDocumentMapper
  implements Mapper<Profile, ProfileDocument> {
  async to(profile: Profile) {
    return await profileModel.create(profile);
  }

  async from(profileDocument: ProfileDocument) {
    return {
      username: profileDocument.username,
    };
  }
}
