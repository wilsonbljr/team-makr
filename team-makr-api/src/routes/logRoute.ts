import { Router } from "express";
import { LogController } from "../controller/LogController";

const LogRouter = Router();

LogRouter.get("/log", LogController.getLogs);

LogRouter.get("/log/:id", LogController.getLog);

module.exports = LogRouter;