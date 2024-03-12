import { IUserInterface } from "./../database/interfaces/user.interface";
import { Request, Response } from "express";
import {
  createUserRepo,
  deleteTweetWithUserIdRepo,
  deleteUserRepo,
  getUserRepo,
  updateUserRepo,
} from "../repositories/user.repository";

export const getUserController = async (req: Request, res: Response) => {
  const userId = req.params.userId as string;
  try {
    const user = await getUserRepo(userId);
    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(500).json({ error: "User Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const createUserController = async (req: Request, res: Response) => {
  const user: IUserInterface = req.body;
  try {
    const success = await createUserRepo(user);
    if (success) {
      res.status(200).json({ data: user });
    } else {
      res.status(500).json({ error: "User Not created" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  const updatedUser: IUserInterface = req.body;
  try {
    const success = await updateUserRepo(updatedUser.uid, updatedUser);
    if (success) {
      res.status(200).json({ data: "User Updated" });
    } else {
      res.status(500).json({ error: "User Not updated" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.userId as string;
  try {
    const success = await deleteUserRepo(userId);
    if (success) {
      res.status(200).json({ data: "User Deleted" });
    } else {
      res.status(500).json({ error: "User Not Deleted" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
