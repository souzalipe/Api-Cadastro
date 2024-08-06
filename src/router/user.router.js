import { getAllUser, getUserById,createNewUser,deleteUserById,updateUserById } from "../controller/user.controller.js";
import { Router } from "express";

const  userRouter = Router();

userRouter.get("/user/all", getAllUser);

userRouter.get("/user/:id", getUserById)

userRouter.post("/user/new", createNewUser);

userRouter.delete("/user/delete/:id", deleteUserById);

userRouter.put("/user/upade/:id",updateUserById);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna a lista de usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: João Silva
 */

export {userRouter};