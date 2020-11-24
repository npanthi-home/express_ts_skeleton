import Profile from "../../model/Profile";

export default interface ProfileEntityGateway {
    save:(profile: Profile) => Promise<Profile>;
    fetch:(username: string) => Promise<Profile>;
}