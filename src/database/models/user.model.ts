import { IUserInterface } from './../interfaces/user.interface';
import mongoose, { Document, Schema } from "mongoose";

const userSchema = new Schema<IUserInterface>({
    uid: { type: String, required: true },
    tweets: { type: [String], default: [] },
    firstName: { type: String, default: "Name" },
    lastName: { type: String, default: "Name" },
    email: { type: String, required: true },
    createdAt: { type: String, required: true },
});

const UserModel = mongoose.model<IUserInterface>('UserModel', userSchema)
export default UserModel;