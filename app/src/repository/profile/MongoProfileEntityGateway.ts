import ProfileEntityGateway from "../../core/gateway/entity/ProfileEntityGateway";
import Profile from "../../core/model/Profile";
import MongoProfile from "./MongoProfile";

export default class MongoProfileEntityGateway implements ProfileEntityGateway {
  async save(profile: Profile) {
    const profileInput = await MongoProfile.create(profile);
    const savedProfile = await profileInput.save();
    return savedProfile;
  }

  async fetch(username: string) {
    return await MongoProfile.find({ username })
  }
}