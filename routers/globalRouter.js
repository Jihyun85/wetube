import express from "express";
// 내가 한 것이 아니라 아래 home, search 등등을 입력했더니 저장 후 알아서 import가 생겼음!
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { onlyPublic } from "../middlewares";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
