import { getAllUser, getUserById,getUserByName,creatNewUser,deleteUserById,updateUserById } from "../controller/user.controller.js";
import { Router } from "express";

const  userRouter = Router();

userRouter.get("/user/all", getAllUser);
userRouter.get("/user/:id", getUserById)
userRouter.get("/user/name/:name", getUserByName);
userRouter.get("/user/new", creatNewUser);
userRouter.delete("/user/delete/:id", deleteUserById);
userRouter.put("/user/upade/:id",updateUserById);

export {userRouter};