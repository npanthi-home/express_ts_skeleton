import { Model, model, Schema, Document } from "mongoose";

export interface ProfileDocument extends Document {
  username: string;
}
const ProfileSchema: Schema = new Schema({
  username: { type: String, required: true },
});

const MongoProfile: Model<ProfileDocument> = model("Profile", ProfileSchema);

export default MongoProfile;
