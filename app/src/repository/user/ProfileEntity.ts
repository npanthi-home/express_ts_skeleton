import { Model, model, Schema, Document } from "mongoose";

export interface ProfileDocument extends Document {
  username: string;
}
const ProfileSchema: Schema = new Schema({
  username: { type: String, required: true },
});

const ProfileEntity: Model<ProfileDocument> = model("Profile", ProfileSchema);

export default ProfileEntity;
