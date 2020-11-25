import ProfileEntityGateway from "../../core/gateway/entity/ProfileEntityGateway";
import Profile from "../../core/model/Profile";
import { NullProfile } from "../../core/model/Profile";

export default class InMemoryProfileEntityGateway
  implements ProfileEntityGateway {
  storage: Map<string, Profile>;

  constructor() {
    this.storage = new Map();
  }

  async save(profile: Profile) {
    this.storage.set(profile.username, profile);
    return Promise.resolve(profile);
  }

  async fetch(username: string) {
    return Promise.resolve(this.storage.get(username) || NullProfile);
  }
}
