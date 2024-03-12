import { IUserInterface } from "./../database/interfaces/user.interface";
import mongoose from "mongoose";
import UserModel from "../database/models/user.model";

export const getUserRepo = async (
  userId: string
): Promise<IUserInterface | null> => {
  try {
    const user = await UserModel.findOne({ uid: userId });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const createUserRepo = async (
  user: IUserInterface
): Promise<boolean> => {
  try {
    await UserModel.create(user);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const deleteUserRepo = async (userId: string): Promise<boolean> => {
  try {
    const deleted = await UserModel.findOneAndDelete({ uid: userId });
    if (deleted) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const updateUserRepo = async (
  userId: string,
  updatedUser: IUserInterface
): Promise<boolean> => {
  try {
    const result = await UserModel.findOneAndReplace(
      { uid: userId },
      updatedUser,
      { new: true }
    );
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const updateUserWithTweetIdRepo = async (
  userId: string,
  tweetId: string
): Promise<boolean> => {
  try {
    const result = await UserModel.findOneAndUpdate(
      { uid: userId },
      { $push: { tweets: tweetId } }
    );
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const deleteTweetWithUserIdRepo = async (
  userId: string,
  tweetId: string
): Promise<boolean> => {
  try {
    const result = await UserModel.findOneAndUpdate(
      { uid: userId },
      { $pull: { tweets: tweetId } }
    );
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};