import express from "express";
import { postRegisterView } from "../controllers/videoController";
import routes from "../routes";

export const apiRouter = express.Router();

apiRouter.get(routes.registerView, postRegisterView);

export default apiRouter;
