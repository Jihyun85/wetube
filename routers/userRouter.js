import express from "express";
import {
  changePassword,
  editProfile,
  userDetail,
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";
import routes from "../routes";

export const userRouter = express.Router();

userRouter.get(routes.editProfile(), onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
