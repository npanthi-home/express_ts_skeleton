import { Document } from "mongoose";
import Profile from "../../core/model/Profile";

export default interface ProfileDocument extends Document {
    username: string,
}
