import { model, Model, Schema } from "mongoose";
import { ProfileDocument } from "../user/ProfileEntity";

const profileSchema: Schema = new Schema({
  username: { type: String, required: true },
});

export const COLLECTION_NAME: string = 'Profile';

export const profileModel: Model<ProfileDocument> = model(
  COLLECTION_NAME,
  profileSchema
);

export default profileModel;
