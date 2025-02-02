import { Router } from "express";
import userController from "../controllers/user.controller.js";

const userRouter = Router();
const controller = new userController();

userRouter.post("/user", (req, res) => {
  controller.addUserController(req, res);
});

export default userRouter;
